declare namespace Shapes {
    const name = "Shapes";
    const version = "v1.0.0";
    const methods: {
        fill_rect: (config: import("../lexical/interpreter.js").Config, properties: Record<string, string>) => void;
        stroke_rect: (config: import("../lexical/interpreter.js").Config, properties: Record<string, string>) => void;
        line: (config: import("../lexical/interpreter.js").Config, properties: Record<string, string>) => void;
        stroke: (config: import("../lexical/interpreter.js").Config, properties: Record<string, string>) => void;
        fill: (config: import("../lexical/interpreter.js").Config, properties: Record<string, string>) => void;
        begin_path: (config: import("../lexical/interpreter.js").Config, properties: Record<string, string>) => void;
        close_path: (config: import("../lexical/interpreter.js").Config, properties: Record<string, string>) => void;
        circle: (config: import("../lexical/interpreter.js").Config, properties: Record<string, string>) => void;
        elipse: (config: import("../lexical/interpreter.js").Config, properties: Record<string, string>) => void;
        paint: (config: import("../lexical/interpreter.js").Config, properties: Record<string, string>) => void;
    };
}
export { Shapes };
