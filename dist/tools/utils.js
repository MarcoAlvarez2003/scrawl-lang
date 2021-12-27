function parseProperties(properties) {
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
function parseIntProperty(prop, _default = "0") {
    const num = parseFloat(prop);
    return isNaN(num) ? parseIntProperty(_default) : num;
}
function parseStrProperty(prop, _default = "") {
    return prop ? prop : _default;
}
function parseBoolProperty(prop) {
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
function parseMethod(method) {
    return (config, properties) => {
        method({
            manual: config,
            changeCanvasContext(context) {
                config.render = config.canvas.getContext(context);
            },
            changeCanvasGeometry(width, height) {
                config.canvas.width = width;
                config.canvas.height = height;
                this.changeCanvasContext(getCanvasContext(config.render));
            },
        }, parseProperties(properties));
    };
}
function getCanvasContext(render) {
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
