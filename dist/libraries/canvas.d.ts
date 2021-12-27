declare namespace Canvas {
    const name = "Canvas Library";
    const version = "v1.0.0";
    const methods: {
        canvas: (config: import("../lexical/interpreter.js").Config, properties: Record<string, string>) => void;
    };
}
export { Canvas };
