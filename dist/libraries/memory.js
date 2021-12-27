var Memory;
(function (Memory) {
    Memory.name = "Memory Library";
    Memory.version = "v1.0.0";
    const variables = {};
    function createVariables(config, properties) {
        for (const name in properties) {
            variables[name] = properties[name];
        }
    }
    Memory.preprocessors = {
        getVariables(properties) {
            for (const key in properties) {
                const name = properties[key];
                if (name in variables) {
                    properties[key] = variables[name];
                }
            }
            return properties;
        },
    };
    Memory.methods = {
        define: createVariables,
    };
})(Memory || (Memory = {}));
export { Memory };
