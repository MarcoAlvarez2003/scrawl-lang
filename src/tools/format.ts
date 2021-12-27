import { Entities } from "../syntax/entities.js";

function format(text: string) {
    return text
        .replaceAll(Entities.String, ` ${Entities.String} `)
        .replaceAll(Entities.NewLine, ` ${Entities.NewLine} `)
        .replaceAll(Entities.LeftKey, ` ${Entities.LeftKey} `)
        .replaceAll(Entities.RightKey, ` ${Entities.RightKey} `)
        .replaceAll(Entities.Assignation, ` ${Entities.Assignation} `);
}

export { format };
