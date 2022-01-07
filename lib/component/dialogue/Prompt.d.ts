import { DomNode, Popup } from "@hanul/skynode";
export default class Prompt extends Popup {
    content: DomNode;
    private input;
    constructor(title: string, message: string, confirmTitle: string, confirm: (value: string) => void);
}
//# sourceMappingURL=Prompt.d.ts.map