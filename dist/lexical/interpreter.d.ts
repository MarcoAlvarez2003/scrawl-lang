import { Block } from "./analyzer.js";
interface Config {
    canvas: HTMLCanvasElement;
    render: CanvasRenderingContext2D;
}
interface Library {
    name: string;
    version: string;
    methods: Record<string, Method>;
}
declare type Method = (config: Config, properties: Record<string, string>) => void;
declare class Interpreter {
    configs: Config;
    libs: Library[];
    constructor(configs: Config, libs: Library[]);
    file(path: string): Promise<void>;
    files(...paths: string[]): Promise<void>;
    compile(source: string): Block[];
    exec({ identifier, properties }: Block): void;
}
export { Interpreter };
export type { Config, Library, Method };
