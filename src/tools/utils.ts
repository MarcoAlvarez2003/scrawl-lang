import { Config } from "../lexical/interpreter.js";

interface ScrawlProperties {
    /**
     * Defines a color for fill shapes
     */
    background: string;
    /**
     * Define a color for stroke shapes
     */
    color: string;
    /**
     * Define x pos of shape
     */
    x: number;
    /**
     * Define y pos of shape
     */
    y: number;
    /**
     * Define shortcut of width
     */
    w: number;
    /**
     * Define shortcut of height
     */
    h: number;
    /**
     * Define shortcut of radius
     */
    r: number;
    /**
     * Define a shortcut of text
     */
    t: string;
    /**
     * Define text content of shape or others
     */
    text: string;
    /**
     * Define a width of shape
     */
    width: number;
    /**
     * Define a height of shape
     */
    height: number;
    /**
     * Define a radius of radian shapes
     */
    radius: number;
    /**
     * Define type of line join
     */
    line_join: string;
    /**
     * Define a width of the lines
     */
    line_width: number;
    /**
     * Define a font family
     */
    font_family: string;
    /**
     * Define a font size
     */
    font_size: string;
}

interface ScrawlConfig {
    /**
     * Allow handle manual configs
     */
    manual: Config;
    /**
     * Allow change the context of rendering
     * @param context Define the new context for rendering
     */
    changeCanvasContext(context: string): void;
    /**
     * Allow change canvas dimensions
     * @param width Define a new width for canvas
     * @param height Define a new height for canvas
     */
    changeCanvasGeometry(width: number, height: number): void;
}

type Method = (config: ScrawlConfig, properties: ScrawlProperties) => void;

function parseProperties(properties: Record<string, string>): ScrawlProperties {
    const { x, y, w, h, color, width, height, r, radius, t, text } = properties;
    const { line_join, line_width, font_size, font_family } = properties;
    const { background } = properties;

    return {
        background: parseStrProperty(background),
        color: parseStrProperty(color),
        x: parseIntProperty(x),
        y: parseIntProperty(y),
        t: parseStrProperty(t, text),
        w: parseIntProperty(w, width),
        h: parseIntProperty(h, height),
        r: parseIntProperty(r, radius),
        text: parseStrProperty(text, t),
        width: parseIntProperty(width, w),
        height: parseIntProperty(height, h),
        radius: parseIntProperty(radius, r),
        line_join: parseStrProperty(line_join),
        line_width: parseIntProperty(line_width),
        font_size: parseStrProperty(font_size),
        font_family: parseStrProperty(font_family),
    };
}

function parseIntProperty(prop: string, _default = "0"): number {
    const num = parseFloat(prop);

    return isNaN(num) ? parseIntProperty(_default) : num;
}

function parseStrProperty(prop: string, _default = "") {
    return prop ? prop : _default;
}

function parseBoolProperty(prop: string) {
    if (prop === "true" || prop === "1" || prop !== "") {
        return true;
    }

    return false;
}

/**
 * Parse Scrawl Method to Interpreter Method
 * @param method Define the scrawl method
 * @returns A Interpreter Method
 */
function parseMethod(method: Method) {
    return (config: Config, properties: Record<string, string>) => {
        method(
            {
                manual: config,
                changeCanvasContext(context) {
                    config.render = config.canvas.getContext(context) as CanvasRenderingContext2D;
                },
                changeCanvasGeometry(width, height) {
                    config.canvas.width = width;
                    config.canvas.height = height;
                    this.changeCanvasContext(getCanvasContext(config.render));
                },
            },
            parseProperties(properties)
        );
    };
}

function getCanvasContext(
    render:
        | ImageBitmapRenderingContext
        | CanvasRenderingContext2D
        | WebGL2RenderingContext
        | WebGLRenderingContext
) {
    switch (true) {
        case render instanceof CanvasRenderingContext2D:
            return "2d";

        case render instanceof WebGL2RenderingContext:
            return "webgl2";

        case render instanceof WebGLRenderingContext:
            return "webgl";

        default:
            return "bitmaprenderer";
    }
}

export { parseStrProperty, parseMethod };
export type { ScrawlProperties, ScrawlConfig };
