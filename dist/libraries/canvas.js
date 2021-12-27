import { parseMethod } from "../tools/utils.js";
var Canvas;
(function (Canvas) {
    Canvas.name = "Canvas Library";
    Canvas.version = "v1.0.0";
    function config(config, props) {
        config.changeCanvasGeometry(props.w, props.h);
        config.manual.render.strokeStyle = props.color;
        config.manual.render.fillStyle = props.background;
        alert(props.text);
    }
    Canvas.methods = {
        canvas: parseMethod(config),
    };
})(Canvas || (Canvas = {}));
export { Canvas };
