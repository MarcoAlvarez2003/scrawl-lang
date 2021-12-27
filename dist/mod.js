import { Interpreter } from "./lexical/interpreter.js";
import { Canvas } from "./libraries/canvas.js";
import { Shapes } from "./libraries/shapes.js";
const canvas = document.getElementById("canvas");
const render = canvas.getContext("2d");
const interpreter = new Interpreter({
    canvas,
    render,
}, [Shapes, Canvas]);
await interpreter.file("../house.sc");
// const image = interpreter.configs.canvas
//     .toDataURL("image/png")
//     .replace("image/png", "image/octet-stream");
// let link = document.getElementById("link") as HTMLLinkElement;
// link.setAttribute("download", "MintyPaper.png");
// link.setAttribute("href", image);
// link.click();
