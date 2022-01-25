"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const parts_json_1 = __importDefault(require("../parts.json"));
class SparrowPreview extends skynode_1.DomNode {
    constructor(attributes, ment, pixel) {
        super(`.sparrow-preview${pixel === true ? ".pixel" : ""}`);
        this.attributes = attributes;
        this.pixel = pixel;
        this.mentDisplay = (0, skynode_1.el)(".ment", this.pixel !== true ? ment : undefined).appendTo(this);
        this.load();
    }
    changeAttributes(attributes) {
        this.attributes = attributes;
        this.load();
    }
    changeMent(ment) {
        if (this.pixel !== true) {
            this.mentDisplay.empty().appendText(ment);
        }
    }
    async load() {
        this.canvas?.delete();
        this.canvas = (0, skynode_1.el)("canvas").appendTo(this);
        if (this.pixel === true) {
            this.canvas.domElement.width = 100;
            this.canvas.domElement.height = 100;
        }
        else {
            this.canvas.domElement.width = 445;
            this.canvas.domElement.height = 445;
        }
        const context = this.canvas.domElement.getContext("2d");
        const imageParts = this.attributesToImageParts(this.attributes);
        let images = [];
        for (const imagePart of imageParts) {
            images = images.concat(parts_json_1.default[imagePart.traitId].parts[imagePart.partId].images);
        }
        images.sort((a, b) => a.order - b.order);
        for (const image of images) {
            if (this.pixel === true) {
                if (image.path.indexOf("8.TEXT BALLOON") === -1) {
                    context.drawImage(await this.addImageProcess(`https://storage.googleapis.com/tteokmill/${image.path.replace(/sparrows\-parts\//g, "sparrows-parts-pixel/")}`), 0, 0, 100, 100);
                }
            }
            else {
                context.drawImage(await this.addImageProcess(`https://storage.googleapis.com/tteokmill/${image.path}`), 0, 0, 445, 445);
            }
        }
    }
    async addImageProcess(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => { console.log(src); reject(); };
            img.src = src;
        });
    }
    attributesToImageParts(attributes) {
        const imageParts = [];
        for (const [traitId, trait] of parts_json_1.default.entries()) {
            if (trait.condition === undefined ||
                attributes.find((d) => d.trait_type === trait.condition.trait && trait.condition.values.includes(d.value) === true) !== undefined) {
                for (const [partId, part] of trait.parts.entries()) {
                    if (part.condition === undefined ||
                        attributes.find((d) => d.trait_type === part.condition.trait && part.condition.values.includes(d.value) === true) !== undefined) {
                        if (attributes.find((d) => d.trait_type === trait.name && d.value === part.name) !== undefined) {
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
exports.default = SparrowPreview;
//# sourceMappingURL=SparrowPreview.js.map