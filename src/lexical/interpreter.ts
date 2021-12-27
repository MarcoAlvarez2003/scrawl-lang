import { Analyzer, Block } from "./analyzer.js";
import { format } from "../tools/format.js";
import { Tokenizer } from "./tokenizer.js";

interface Config {
    canvas: HTMLCanvasElement;
    render: CanvasRenderingContext2D;
}

interface Library {
    name: string;
    version: string;
    methods: Record<string, Method>;
}

type Method = (config: Config, properties: Record<string, string>) => void;

class Interpreter {
    constructor(public configs: Config, public libs: Library[]) {
        for (const { name, version } of libs) {
            console.log(`Installing ${name} ${version}`);
        }
    }

    public async file(path: string) {
        const text = await (await fetch(path)).text();
        const blocks = this.compile(format(text));

        for (const block of blocks) {
            this.exec(block);
        }
    }

    public async files(...paths: string[]) {
        for (const path of paths) {
            await this.file(path);
        }
    }

    public compile(source: string) {
        const tokens = new Tokenizer(source).tokens;
        const blocks = new Analyzer(tokens).blocks;
        return blocks;
    }

    public exec({ identifier, properties }: Block) {
        for (const lib of this.libs) {
            for (const name in lib.methods) {
                if (name === identifier) {
                    const method = lib.methods[name];

                    method(this.configs, properties);
                    console.log("running method", name);
                }
            }
        }
    }
}

export { Interpreter };
export type { Config, Library, Method };
