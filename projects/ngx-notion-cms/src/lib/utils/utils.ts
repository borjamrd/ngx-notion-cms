import { NotionBlock } from '../types';

export const getBlockImageURL = (url: string, block: NotionBlock) => {
    if (url.startsWith('data:')) {
        return url;
    }

    // more recent versions of notion don't proxy unsplash images
    if (url.startsWith('https://images.unsplash.com')) {
        return url;
    }

    try {
        const u = new URL(url);

        if (
            u.pathname.startsWith('/secure.notion-static.com') &&
            u.hostname.endsWith('.amazonaws.com')
        ) {
            if (
                u.searchParams.has('X-Amz-Credential') &&
                u.searchParams.has('X-Amz-Signature') &&
                u.searchParams.has('X-Amz-Algorithm')
            ) {
                // if the URL is already signed, then use it as-is
                return url;
            }
        }
    } catch {
        // ignore invalid urls
    }

    if (url.startsWith('/images')) {
        url = `https://www.notion.so${url}`;
    }

    url = `https://www.notion.so${url.startsWith('/image') ? url : `/image/${encodeURIComponent(url)}`
        }`;

    const notionImageUrlV2 = new URL(url);
    let table = block.parent_table === 'space' ? 'block' : block.parent_table;
    if (table === 'collection' || table === 'team') {
        table = 'block';
    }
    notionImageUrlV2.searchParams.set('table', table);
    notionImageUrlV2.searchParams.set('id', block.id);
    notionImageUrlV2.searchParams.set('cache', 'v2');

    url = notionImageUrlV2.toString();

    return url;
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mergeDeep = (target: any, source: any): any => {
    if (typeof target !== 'object' || typeof source !== 'object') {
        return source !== undefined ? source : target;
    }

    for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = mergeDeep(target[key], source[key]);
        }
    }

    return target;
}