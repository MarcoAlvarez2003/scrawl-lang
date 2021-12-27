import { Token } from "../syntax/token.js";
declare class Tokenizer {
    lines: number;
    tokens: Token[];
    constructor(source: string);
}
export { Tokenizer };
