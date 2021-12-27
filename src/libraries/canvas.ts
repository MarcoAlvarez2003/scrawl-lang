import { parseMethod, ScrawlProperties, ScrawlConfig } from "../tools/utils.js";

namespace Canvas {
    export const name = "Canvas Library";
    export const version = "v1.0.0";

    function config(config: ScrawlConfig, props: ScrawlProperties) {
        config.changeCanvasGeometry(props.w, props.h);

        config.manual.render.strokeStyle = props.color;
        config.manual.render.fillStyle = props.background;

        alert(props.text);
    }

    export const methods = {
        canvas: parseMethod(config),
    };
}

export { Canvas };
