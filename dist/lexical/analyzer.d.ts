import { Token } from "../syntax/token.js";
interface Block {
    identifier: string;
    properties: Record<string, string>;
}
declare class Analyzer {
    tokens: Token[];
    blocks: Block[];
    index: number;
    constructor(tokens: Token[]);
    get props(): Record<string, string>;
    get block(): Token[];
    get string(): string;
}
export { Analyzer };
export type { Block };
