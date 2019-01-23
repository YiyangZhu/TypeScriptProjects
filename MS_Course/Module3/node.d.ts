declare module "url"{
    export interface URl{
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr:string, parseQueryString?,slashesDenoteHost?):URl;
}

declare module "path"{
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export var sep: string;
}

