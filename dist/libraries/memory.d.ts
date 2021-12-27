import { Config } from "../lexical/interpreter.js";
declare namespace Memory {
    export const name = "Memory Library";
    export const version = "v1.0.0";
    function createVariables(config: Config, properties: Record<string, string>): void;
    export const preprocessors: {
        getVariables(properties: Record<string, string>): Record<string, string>;
    };
    export const methods: {
        define: typeof createVariables;
    };
    export {};
}
export { Memory };
