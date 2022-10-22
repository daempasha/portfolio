import { ReactNode } from "react";

interface iBodyItem {
    [key: string]: any;
}
export interface iProjectApi {
    title: string;
    author: {
        name: string;
    },
    slug: {
        current: string;
    },
    body: any,
    tags: string[],
    codeUrl: string;
    demoUrl: string;
    mainImage: any;
    publishedAt: string;
}

export interface iPtComponents {
    [key: string]: any;
}
export interface iPtComponent {
    children: ReactNode | ReactNode[]
}

export interface iTag {
    value: string;
}