import { Analyzer } from "./analyzer.js";
import { format } from "../tools/format.js";
import { Tokenizer } from "./tokenizer.js";
class Interpreter {
    constructor(configs, libs) {
        this.configs = configs;
        this.libs = libs;
        for (const { name, version } of libs) {
            console.log(`Installing ${name} ${version}`);
        }
    }
    async file(path) {
        const text = await (await fetch(path)).text();
        const blocks = this.compile(format(text));
        for (const block of blocks) {
            this.exec(block);
        }
    }
    async files(...paths) {
        for (const path of paths) {
            await this.file(path);
        }
    }
    compile(source) {
        const tokens = new Tokenizer(source).tokens;
        const blocks = new Analyzer(tokens).blocks;
        return blocks;
    }
    exec({ identifier, properties }) {
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
