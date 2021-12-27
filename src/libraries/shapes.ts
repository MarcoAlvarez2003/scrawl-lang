import { ScrawlProperties, ScrawlConfig, parseMethod } from "../tools/utils.js";

namespace Shapes {
    export const name = "Shapes";
    export const version = "v1.0.0";

    /* 
        ? Shapes 
    */
    function drawStrokeRect({ manual: { render } }: ScrawlConfig, properties: ScrawlProperties) {
        const { x, y, width, height } = properties;

        changeBorderWidth(render, properties.line_width).restore(() => {
            render.strokeRect(x, y, width, height);
        });

        changeBorderColor(render, properties.color).restore(() => {});
    }

    function drawFillRect({ manual: { render } }: ScrawlConfig, properties: ScrawlProperties) {
        const { x, y, width, height } = properties;

        changeBorderWidth(render, properties.line_width).restore(() => {
            changeBackgroundColor(render, properties.background).restore(() => {
                render.fillRect(x, y, width, height);
            });
        });
    }

    function drawCircle({ manual: { render } }: ScrawlConfig, properties: ScrawlProperties) {
        const { x, y, radius } = properties;

        changeBorderWidth(render, properties.line_width).restore(() => {
            changeBackgroundColor(render, properties.background).restore(() => {
                render.beginPath();
                render.arc(x, y, radius, 0, Math.PI * 2, false);
                render.closePath();
            });
        });
    }

    function drawElipse({ manual: { render } }: ScrawlConfig, properties: ScrawlProperties) {
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
    function beginPath({ manual: { render } }: ScrawlConfig, properties: ScrawlProperties) {
        render.beginPath();
    }

    function closePath({ manual: { render } }: ScrawlConfig, properties: ScrawlProperties) {
        render.closePath();
    }

    function drawLine({ manual: { render } }: ScrawlConfig, properties: ScrawlProperties) {
        const { x, y, w, h } = properties;

        changeBorderWidth(render, properties.line_width).restore(() => {
            changeBorderColor(render, properties.color).restore(() => {
                render.moveTo(x, y);
                render.lineTo(w, h);
            });
        });
    }

    function stroke({ manual: { render } }: ScrawlConfig, properties: ScrawlProperties) {
        changeBorderColor(render, properties.color).restore(() => {
            render.stroke();
        });
    }

    function fill({ manual: { render } }: ScrawlConfig, properties: ScrawlProperties) {
        changeBackgroundColor(render, properties.background).restore(() => {
            render.fill();
        });
    }

    function paint({ manual: { render } }: ScrawlConfig, properties: ScrawlProperties) {
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
    function changeBorderWidth(render: CanvasRenderingContext2D, width: number) {
        const backup = render.lineWidth;

        render.lineWidth = width;

        return {
            restore(after: Function) {
                after();
                render.lineWidth = backup;
            },
        };
    }

    function changeBorderColor(render: CanvasRenderingContext2D, color: string) {
        const backup = render.strokeStyle;

        render.strokeStyle = color;

        return {
            restore(after: Function) {
                after();
                render.strokeStyle = backup;
            },
        };
    }

    function changeBackgroundColor(render: CanvasRenderingContext2D, color: string) {
        const backup = render.fillStyle;

        render.fillStyle = color;

        return {
            restore(after: Function) {
                after();
                render.fillStyle = backup;
            },
        };
    }

    export const methods = {
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
}

export { Shapes };
