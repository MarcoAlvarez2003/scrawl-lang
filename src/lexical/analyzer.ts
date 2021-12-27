import { Entities } from "../syntax/entities.js";
import { Token } from "../syntax/token.js";

interface Block {
    identifier: string;
    properties: Record<string, string>;
}

class Analyzer {
    public blocks: Block[] = [];
    public index: number = 0;

    constructor(public tokens: Token[]) {
        for (; this.index < this.tokens.length; this.index++) {
            const current = this.tokens[this.index];

            if (current.type === "String") {
                this.string;
            }

            if (current.type === "Word") {
                this.blocks.push({
                    identifier: current.body,
                    properties: this.props,
                });
            }
        }

        this.index = 0;
    }

    public get props() {
        const properties: Record<string, string> = {};
        const block = this.block;

        for (let i = 0; i < block.length; i++) {
            if (i + 1 in block) {
                const current = block[i++].body;
                const next = block[i].body;

                properties[current] = next;
            }
        }

        return properties;
    }

    public get block() {
        const tokens: Token[] = [];

        const start = this.tokens.findIndex(({ type }, i) => {
            return type === "LeftKey" && i >= this.index;
        });

        const end = this.tokens.findIndex(({ type }, i) => {
            return type === "RightKey" && i >= this.index;
        });

        if (start >= 0 && end >= 0) {
            this.index = start + 1;

            for (; this.index < end; this.index++) {
                const current = this.tokens[this.index];

                if (current.type === "Assignation") {
                    continue;
                }

                if (current.type === "String") {
                    tokens.push({
                        type: "Text",
                        body: this.string,
                    });

                    continue;
                }

                tokens.push(current);
            }

            this.index = end;
        }

        return tokens.filter((t) => t.body !== "");
    }

    public get string() {
        const words: string[] = [];

        this.index++;

        for (; this.index < this.tokens.length; this.index++) {
            const current = this.tokens[this.index];

            if (current.type === "String") {
                break;
            }

            words.push(current.body);
        }

        return words.join(" ");
    }
}

export { Analyzer };
export type { Block };
