import { Config } from "../lexical/interpreter.js";
declare namespace Basic {
    type Props = Record<string, string>;
    interface StandardProperties {
        width: number;
        height: number;
        x: number;
        y: number;
        radius: number;
        background: string;
        value: string;
        font: string;
        size: number;
    }
    function GetProperties(properties: Record<string, string>): {
        x: number;
        y: number;
        width: number;
        height: number;
        radius: number;
        size: number;
        font: string;
        value: string;
        background: string;
    };
    function ParseMethod(method: (config: Config, props: StandardProperties) => void): (config: Config, props: Props) => void;
}
export { Basic };
