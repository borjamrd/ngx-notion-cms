![Alt text](public/ngx-notion-cms-rounded.png)

Render your Notion content through your Angular application as a CMS.
Possible uses:

-   💡 Write your blog
-   🚀 Showcase your projects
-   📄 Write documentation

Huge thanks to [react-notion](https://github.com/splitbee/react-notion), this library simulates much of what they have previously created with React. ❤️

_This package doesn't handle the communication with the API. Check out [notion-api-worker](https://github.com/splitbee/notion-api-worker) for an easy solution_.

<sub>Created by <a href="https://www.threads.net/@borjamrd">Borja Muñoz</a> with the help of all <a href="https://github.com/borjamrd/notion-workspace/graphs/contributors">contributors</a> </sub>

## Table of Contents

1.  [Type of content](#type-of-content)
2.  [Get started](#get-started)
3.  [Global Options](#aditional-options)
4.  [Supported blocks](#supported-blocks)

## Type of content

You can display any content you want and configure your style to your liking. But we offer you these two options by default:

-   Post: which allows you to use all the potential of Notion to write your best articles.
-   Project: to showcase your projects in an attractive visual format.

For both, only the styles change, the components are the same:

-   Notion databases: display multiple items
-   Notion pages: display the content in blocks for each item.

## Get started

```bash
npm install ngx-notion-cms

# Optional if need to display highlighted code blocks
npm install ngx-highlightjs
```

```typescript
import { globalSettingsProvider } from 'ngx-notion-cms';
import { provideHttpClient } from '@angular/common/http';
import { provideHighlightOptions } from 'ngx-highlightjs'; //optional

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        globalSettingsProvider({}), //you can pass global settings here,
        provideHighlightOptions({
            // Optional
            fullLibraryLoader: () => import('highlight.js'),
            lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
        }),
    ],
};
```

## Example

### Add database component

### Add page component

### Global Options

By default, global options are configured that are easily modified. For example, in case we want the images of the articles in the databases to not be displayed:

```typescript
import { globalSettingsProvider } from 'ngx-notion-cms';

export const appConfig: ApplicationConfig = {
    providers: [
        // ....
        globalSettingsProvider({
            cacheOptions: {
                stateTime: 100000,
                storeInCache: true,
            },
            database: {
                showImage: false,
            },
            page: {
                showTableOfContents: true,
            },
            prefetchOnHover: false,
        }),
    ],
};
```

## Supported Blocks

Most common block types are supported. We happily accept pull requests to add support for the missing blocks.

| Block Type        | Supported  | Notes                |
| ----------------- | ---------- | -------------------- |
| Table Of Contents | ✅ Yes     |
| Text              | ✅ Yes     |                      |
| Heading           | ✅ Yes     |                      |
| Image             | ✅ Yes     |                      |
| Image Caption     | ❌ Missing |                      |
| Bulleted List     | ✅ Yes     |                      |
| Numbered List     | ✅ Yes     |                      |
| Quote             | ✅ Yes     |                      |
| Callout           | ✅ Yes     |                      |
| Column            | ✅ Yes     |                      |
| iframe            | ✅ Yes     |                      |
| Video             | ✅ Yes     | Only embedded videos |
| Divider           | ✅ Yes     |                      |
| Link              | ✅ Yes     |                      |
| Code              | ✅ Yes     |                      |
| Web Bookmark      | ✅ Yes     |                      |
| Toggle List       | ❌ Missing |                      |
| Page Links        | ✅ Yes     |                      |
| Header            | ❌ Missing |                      |
| Databases         | ❌ Missing |
| Checkbox          | ❌ Missing |
