export interface Meme {
    url: string;
    createdAt: number;
    textOptions: TextOptions;
}
export interface TextOptions {
    direction?: string;
    text?: string;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: string;
    fontVariant?: string;
    textDecoration?: string;
    align?: string;
    padding?: number;
    fill?: string;
    x?: number;
    y?: number;
    lineHeight?: number;
    letterSpacing?: number;
    wrap?: string;
    ellipsis?: boolean;

}
