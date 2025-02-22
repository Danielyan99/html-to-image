import { Options } from './options';

export declare function getExtension(url: string): string;
export declare function getMimeType(url: string): string;
export declare function resolveUrl(url: string, baseUrl: string | null): string;
export declare function isDataUrl(url: string): boolean;
export declare function makeDataUrl(content: string, mimeType: string): string;
export declare function parseDataUrlContent(dataURL: string): string;
export declare const uuid: () => string;
export declare const delay: <T>(ms: number) => (args: T) => Promise<T>;
export declare function toArray<T>(arrayLike: any): T[];
export declare function getNodeWidth(node: HTMLElement): number;
export declare function getNodeHeight(node: HTMLElement): number;
export declare function getPixelRatio(): number;
export declare function canvasToBlob(canvas: HTMLCanvasElement, options?: Options): Promise<Blob | null>;
export declare function createImage(url: string): Promise<HTMLImageElement>;
export declare function svgToDataURL(svg: SVGElement): Promise<string>;
export declare function nodeToDataURL(node: HTMLElement, width: number, height: number): Promise<string>;
