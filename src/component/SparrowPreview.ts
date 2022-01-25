import { DomNode, el } from "@hanul/skynode";
import parts from "../parts.json";

export default class SparrowPreview extends DomNode {

    private mentDisplay: DomNode;
    private canvas: DomNode<HTMLCanvasElement> | undefined;

    constructor(
        private attributes: { trait_type: string, value: string }[],
        ment: string,
        private pixel?: boolean,
    ) {
        super(`.sparrow-preview${pixel === true ? ".pixel" : ""}`);
        this.mentDisplay = el(".ment", this.pixel !== true ? ment : undefined).appendTo(this);
        this.load();
    }

    public changeAttributes(attributes: { trait_type: string, value: string }[]) {
        this.attributes = attributes;
        this.load();
    }

    public changeMent(ment: string) {
        if (this.pixel !== true) {
            this.mentDisplay.empty().appendText(ment);
        }
    }

    private async load() {
        this.canvas?.delete();

        this.canvas = el<HTMLCanvasElement>("canvas").appendTo(this);
        if (this.pixel === true) {
            this.canvas.domElement.width = 100;
            this.canvas.domElement.height = 100;
        } else {
            this.canvas.domElement.width = 445;
            this.canvas.domElement.height = 445;
        }

        const context = this.canvas.domElement.getContext("2d")!;

        const imageParts = this.attributesToImageParts(this.attributes);
        let images: any[] = [];
        for (const imagePart of imageParts) {
            images = images.concat(parts[imagePart.traitId].parts[imagePart.partId].images);
        }
        images.sort((a, b) => a.order - b.order);

        for (const image of images) {
            if (this.pixel === true) {
                if (image.path.indexOf("8.TEXT BALLOON") === -1) {
                    context.drawImage(await this.addImageProcess(`https://storage.googleapis.com/tteokmill/${image.path.replace(/sparrows\-parts\//g, "sparrows-parts-pixel/")}`), 0, 0, 100, 100);
                }
            } else {
                context.drawImage(await this.addImageProcess(`https://storage.googleapis.com/tteokmill/${image.path}`), 0, 0, 445, 445);
            }
        }
    }

    private async addImageProcess(src: string): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => { console.log(src); reject(); };
            img.src = src;
        })
    }

    private attributesToImageParts(attributes: any[]) {

        const imageParts: any[] = [];

        for (const [traitId, trait] of parts.entries()) {
            if (
                trait.condition === undefined ||
                attributes.find((d: any) => d.trait_type === trait.condition.trait && trait.condition.values.includes(d.value) === true) !== undefined
            ) {
                for (const [partId, part] of trait.parts.entries()) {
                    if (
                        (part as any).condition === undefined ||
                        attributes.find((d: any) => d.trait_type === (part as any).condition.trait && (part as any).condition.values.includes(d.value) === true) !== undefined
                    ) {
                        if (attributes.find((d: any) => d.trait_type === trait.name && d.value === part.name) !== undefined) {
                            imageParts.push({ traitId, partId });
                            break;
                        }
                    }
                }
            }
        }

        return imageParts;
    }
}
