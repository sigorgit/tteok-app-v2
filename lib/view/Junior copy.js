"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
const msg_js_1 = __importDefault(require("msg.js"));
class Junior {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("IJM_JUNIOR_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".junior-view", (0, skynode_1.el)(".gnb", (0, skynode_1.el)(".inner-gnb", (0, skynode_1.el)("a", { click: () => ViewUtil_1.default.go("/") }, (0, skynode_1.el)("img", { src: "/images/injeolmi.png", height: "40px" })), (0, skynode_1.el)("h1", (0, msg_js_1.default)("IJM_JUNIOR_TITLE")))), (0, skynode_1.el)("section", (0, skynode_1.el)("h2", (0, msg_js_1.default)("IJM_FANGAME")), (0, skynode_1.el)(".pangame-list", (0, skynode_1.el)("a", { href: "https://flappy-injeolmi.netlify.app/", target: "_blank" }, (0, skynode_1.el)(".card", (0, skynode_1.el)(".content", (0, skynode_1.el)("h3", (0, msg_js_1.default)("IJM_FANGAME_TITLE1")), (0, skynode_1.el)("img", { src: "/images/junior/flappy.png" }), (0, skynode_1.el)(".description", (0, msg_js_1.default)("IJM_FANGAME_DESC1"))))), (0, skynode_1.el)("a", { href: "ijmclassic.itch.io/ultrarisk", target: "_blank" }, (0, skynode_1.el)(".card", (0, skynode_1.el)(".content", (0, skynode_1.el)("h3", (0, msg_js_1.default)("IJM_FANGAME_TITLE2")), (0, skynode_1.el)("img", { src: "/images/junior/ultraRisk.png" }), (0, skynode_1.el)(".description", (0, msg_js_1.default)("IJM_FANGAME_DESC2")))))))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Junior;
//# sourceMappingURL=Junior%20copy.js.map