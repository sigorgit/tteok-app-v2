"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Sparrows {
    constructor() {
        Layout_1.default.current.title = "참새 NFT";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".junior-view", (0, skynode_1.el)(".gnb", (0, skynode_1.el)(".inner-gnb", (0, skynode_1.el)("a", { click: () => ViewUtil_1.default.go("/") }, (0, skynode_1.el)("img", { src: "/images/injeolmi.png", height: "40px" })), (0, skynode_1.el)("h1", "참새 NFT"))), (0, skynode_1.el)("section", (0, skynode_1.el)("h2", "참새 NFT"), this.list = (0, skynode_1.el)(".sparrows-list")), (0, skynode_1.el)("p", "곧 출시함")));
        this.loadSparrows();
    }
    async loadSparrows() {
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Sparrows;
//# sourceMappingURL=Sparrows.js.map