var Basic;
(function (Basic) {
    function GetProperties(properties) {
        const { width, height, x, y, radius, background, value, font, size } = properties;
        const _x = parseFloat(x);
        const _y = parseFloat(y);
        const _width = parseFloat(width);
        const _height = parseFloat(height);
        const _radius = parseFloat(radius);
        const _size = parseFloat(size);
        return {
            x: isNaN(_x) ? 0 : _x,
            y: isNaN(_y) ? 0 : _y,
            width: isNaN(_width) ? 0 : _width,
            height: isNaN(_height) ? 0 : _height,
            radius: isNaN(_radius) ? 0 : _radius,
            size: isNaN(_size) ? 0 : _size,
            font: font !== null && font !== void 0 ? font : "sans-serif",
            value: value !== null && value !== void 0 ? value : "",
            background: background !== null && background !== void 0 ? background : "",
        };
    }
    Basic.GetProperties = GetProperties;
    function ParseMethod(method) {
        return (config, props) => {
            method(config, GetProperties(props));
        };
    }
    Basic.ParseMethod = ParseMethod;
})(Basic || (Basic = {}));
export { Basic };
