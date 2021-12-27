import { Entities } from "./entities.js";
interface Token {
    type: keyof typeof Entities;
    body: string;
}
export type { Token };
