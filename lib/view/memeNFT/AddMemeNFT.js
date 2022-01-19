"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("../Layout"));
const ViewUtil_1 = __importDefault(require("../ViewUtil"));
const msg_js_1 = __importDefault(require("msg.js"));
class AddMemeNFT {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("MEME_NFT");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".add-sparrow-nft-view", (0, skynode_1.el)(".gnb", (0, skynode_1.el)(".inner-gnb", (0, skynode_1.el)("a", { click: () => ViewUtil_1.default.go("/") }, (0, skynode_1.el)("img", { src: "/images/injeolmi.png", height: "40px" })), (0, skynode_1.el)("h1", (0, msg_js_1.default)("MEME_NFT")))), (0, skynode_1.el)("h2", (0, msg_js_1.default)("CREATE_MEME_NFT_BUTTON")), (0, skynode_1.el)(".form", this.extnameInput = (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("NFT_EXT_NAME_INPUT") }), this.nameInput = (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("NFT_NAME_INPUT") }), this.descriptionInput = (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("NFT_DESC_INPUT") }), this.amountInput = (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("NFT_TOTAL_AMOUNT") }), (0, skynode_1.el)("input", {
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
        })), (0, skynode_1.el)("button", (0, msg_js_1.default)("CREATE_MEME_NFT_BUTTON"), {
            click: () => ViewUtil_1.default.go("/")
        }), this.nftList = (0, skynode_1.el)("ul.nft-list")));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = AddMemeNFT;
//# sourceMappingURL=AddMemeNFT.js.map