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
    codeUrl: string;
    demoUrl: string;
    imageUrl: string;
    publishedAt: string;
}

export interface iPtComponents {
    [key: string]: any;
}
export interface iPtComponent {
    children: ReactNode | ReactNode[]
}