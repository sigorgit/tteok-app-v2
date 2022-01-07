"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("../Layout"));
const ViewUtil_1 = __importDefault(require("../ViewUtil"));
class AddSparrowNFT {
    constructor() {
        Layout_1.default.current.title = "참새 NFT";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".add-sparrow-nft-view", (0, skynode_1.el)(".gnb", (0, skynode_1.el)(".inner-gnb", (0, skynode_1.el)("a", { click: () => ViewUtil_1.default.go("/") }, (0, skynode_1.el)("img", { src: "/images/injeolmi.png", height: "40px" })), (0, skynode_1.el)("h1", "참새 NFT"))), (0, skynode_1.el)("h2", "참새 NFT 만들기"), (0, skynode_1.el)(".form", this.extnameInput = (0, skynode_1.el)("input", { placeholder: "파일 확장자 (png 등, 점 빼고)" }), this.nameInput = (0, skynode_1.el)("input", { placeholder: "NFT 이름" }), this.descriptionInput = (0, skynode_1.el)("input", { placeholder: "NFT 설명" }), this.amountInput = (0, skynode_1.el)("input", { placeholder: "발행 개수 (숫자로만)" }), (0, skynode_1.el)("input", {
            type: "file",
            change: (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                    this.dataURL = reader.result;
                }, false);
                if (file) {
                    reader.readAsDataURL(file);
                }
            },
        })), (0, skynode_1.el)("button", "만들기", {
            click: () => ViewUtil_1.default.go("/")
        }), this.nftList = (0, skynode_1.el)("ul.nft-list")));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = AddSparrowNFT;
//# sourceMappingURL=AddSparrowNFT.js.map