declare interface Window {
    [key:string]: any;
}

declare module "js-md5" {
    type HashFunction  = (value:string) => string
    const md5: HashFunction;
    export = md5
}

declare class global {
    
}
