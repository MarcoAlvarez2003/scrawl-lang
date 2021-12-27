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
declare type Method = (config: ScrawlConfig, properties: ScrawlProperties) => void;
declare function parseStrProperty(prop: string, _default?: string): string;
/**
 * Parse Scrawl Method to Interpreter Method
 * @param method Define the scrawl method
 * @returns A Interpreter Method
 */
declare function parseMethod(method: Method): (config: Config, properties: Record<string, string>) => void;
export { parseStrProperty, parseMethod };
export type { ScrawlProperties, ScrawlConfig };
