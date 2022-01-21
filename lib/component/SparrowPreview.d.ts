import { DomNode } from "@hanul/skynode";
export default class SparrowPreview extends DomNode {
    private attributes;
    private mentDisplay;
    private canvas;
    constructor(attributes: {
        trait_type: string;
        value: string;
    }[], ment: string);
    changeAttributes(attributes: {
        trait_type: string;
        value: string;
    }[]): void;
    changeMent(ment: string): void;
    private load;
    private addImageProcess;
    private attributesToImageParts;
}
//# sourceMappingURL=SparrowPreview.d.ts.map