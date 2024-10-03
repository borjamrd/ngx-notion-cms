

export interface NotionBlock {
    id: string;
    version: number;
    type: NotionBlockType;
    properties?: Properties;
    content?: string[];
    created_time: number;
    last_edited_time: number;
    parent_id: string;
    parent_table: string;
    alive: boolean;
    space_id: string;
    format?: Format;
}


export interface Format {
    page_icon: string;
    page_cover?: string;
    block_color: string;
    copied_from_pointer: CopiedFromPointer;
    block_width?: number
    block_height?: number
}

export interface CopiedFromPointer {
    id: string;
    table: string;
    spaceId: string;
}


export interface Properties {
    title: Array<string[]>;
    language?: Array<string[]>;
    checked?: 'Yes' | 'No'[];
    size?: Array<string[]>;
    source?: Array<string[]>;
    link?: Array<string[]>;
    description?: Array<string[]>;
}


export type NotionBlockType =
    'page'
    | 'collection_view_page'
    | 'header'
    | 'sub_header'
    | 'sub_sub_header'
    | 'text'
    | 'bulleted_list'
    | 'numbered_list'
    | 'quote'
    | 'divider'
    | 'code'
    | 'to_do'
    | 'callout'
    | 'image'
    | 'table_row'
    | 'table_of_contents'
    | 'video'
    | 'embed'
    | 'bookmark'

export type MapImageUrl = (image: string, block?: NotionBlock['type']) => string;

export interface TableOfContentsEntry {
    id: string;
    type: string;
    text: string | string[][];
    indentLevel: number;
}