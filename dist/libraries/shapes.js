import { parseMethod } from "../tools/utils.js";
var Shapes;
(function (Shapes) {
    Shapes.name = "Shapes";
    Shapes.version = "v1.0.0";
    /*
        ? Shapes
    */
    function drawStrokeRect({ manual: { render } }, properties) {
        const { x, y, width, height } = properties;
        changeBorderWidth(render, properties.line_width).restore(() => {
            render.strokeRect(x, y, width, height);
        });
        changeBorderColor(render, properties.color).restore(() => { });
    }
    function drawFillRect({ manual: { render } }, properties) {
        const { x, y, width, height } = properties;
        changeBorderWidth(render, properties.line_width).restore(() => {
            changeBackgroundColor(render, properties.background).restore(() => {
                render.fillRect(x, y, width, height);
            });
        });
    }
    function drawCircle({ manual: { render } }, properties) {
        const { x, y, radius } = properties;
        changeBorderWidth(render, properties.line_width).restore(() => {
            changeBackgroundColor(render, properties.background).restore(() => {
                render.beginPath();
                render.arc(x, y, radius, 0, Math.PI * 2, false);
                render.closePath();
            });
        });
    }
    function drawElipse({ manual: { render } }, properties) {
        const { x, y, w, h } = properties;
        changeBorderWidth(render, properties.line_width).restore(() => {
            changeBackgroundColor(render, properties.background).restore(() => {
                render.beginPath();
                render.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
                render.closePath();
            });
        });
    }
    /*
        ! This libraries are experimental, remember this.
    */
    function beginPath({ manual: { render } }, properties) {
        render.beginPath();
    }
    function closePath({ manual: { render } }, properties) {
        render.closePath();
    }
    function drawLine({ manual: { render } }, properties) {
        const { x, y, w, h } = properties;
        changeBorderWidth(render, properties.line_width).restore(() => {
            changeBorderColor(render, properties.color).restore(() => {
                render.moveTo(x, y);
                render.lineTo(w, h);
            });
        });
    }
    function stroke({ manual: { render } }, properties) {
        changeBorderColor(render, properties.color).restore(() => {
            render.stroke();
        });
    }
    function fill({ manual: { render } }, properties) {
        changeBackgroundColor(render, properties.background).restore(() => {
            render.fill();
        });
    }
    function paint({ manual: { render } }, properties) {
        changeBorderColor(render, properties.color).restore(() => {
            changeBackgroundColor(render, properties.background).restore(() => {
                render.fill();
            });
            render.stroke();
        });
    }
    /*
        ? Utils
    */
    function changeBorderWidth(render, width) {
        const backup = render.lineWidth;
        render.lineWidth = width;
        return {
            restore(after) {
                after();
                render.lineWidth = backup;
            },
        };
    }
    function changeBorderColor(render, color) {
        const backup = render.strokeStyle;
        render.strokeStyle = color;
        return {
            restore(after) {
                after();
                render.strokeStyle = backup;
            },
        };
    }
    function changeBackgroundColor(render, color) {
        const backup = render.fillStyle;
        render.fillStyle = color;
        return {
            restore(after) {
                after();
                render.fillStyle = backup;
            },
        };
    }
    Shapes.methods = {
        fill_rect: parseMethod(drawFillRect),
        stroke_rect: parseMethod(drawStrokeRect),
        line: parseMethod(drawLine),
        stroke: parseMethod(stroke),
        fill: parseMethod(fill),
        begin_path: parseMethod(beginPath),
        close_path: parseMethod(closePath),
        circle: parseMethod(drawCircle),
        elipse: parseMethod(drawElipse),
        paint: parseMethod(paint),
    };
})(Shapes || (Shapes = {}));
export { Shapes };
