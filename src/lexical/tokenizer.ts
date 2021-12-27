import { Entities } from "../syntax/entities.js";
import { Token } from "../syntax/token.js";

class Tokenizer {
    public lines: number = 0;
    public tokens: Token[] = [];

    constructor(source: string) {
        const characters = source.split(" ");

        for (const character of characters) {
            switch (character) {
                case Entities.NewLine: {
                    this.lines++;
                    break;
                }

                case Entities.String: {
                    this.tokens.push({
                        type: "String",
                        body: '"',
                    });
                    break;
                }

                case Entities.LeftKey: {
                    this.tokens.push({
                        type: "LeftKey",
                        body: "{",
                    });
                    break;
                }

                case Entities.RightKey: {
                    this.tokens.push({
                        type: "RightKey",
                        body: "}",
                    });
                    break;
                }

                case Entities.Assignation: {
                    this.tokens.push({
                        type: "Assignation",
                        body: ":",
                    });
                    break;
                }

                default: {
                    if (character !== "") {
                        this.tokens.push({
                            type: "Word",
                            body: character,
                        });
                    }
                }
            }
        }
    }
}

export { Tokenizer };
