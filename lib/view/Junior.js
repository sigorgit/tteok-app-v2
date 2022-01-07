"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Junior {
    constructor() {
        Layout_1.default.current.title = "쥬니어";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".junior-view", (0, skynode_1.el)(".gnb", (0, skynode_1.el)(".inner-gnb", (0, skynode_1.el)("a", { click: () => ViewUtil_1.default.go("/") }, (0, skynode_1.el)("img", { src: "/images/injeolmi.png", height: "40px" })), (0, skynode_1.el)("h1", "인절미 쥬니어"))), (0, skynode_1.el)("section", (0, skynode_1.el)("h2", "인절미 팬게임"), (0, skynode_1.el)(".pangame-list", (0, skynode_1.el)("a", { href: "https://flappy-injeolmi.netlify.app/", target: "_blank" }, (0, skynode_1.el)(".card", (0, skynode_1.el)(".content", (0, skynode_1.el)("h3", "플래피 인절미"), (0, skynode_1.el)("img", { src: "/images/junior/flappy.png" }), (0, skynode_1.el)(".description", "'학성참새'가 만든 플래피 인절미")))), (0, skynode_1.el)("a", { href: "ijmclassic.itch.io/ultrarisk", target: "_blank" }, (0, skynode_1.el)(".card", (0, skynode_1.el)(".content", (0, skynode_1.el)("h3", "울트라리스크 피하기V1"), (0, skynode_1.el)("img", { src: "/images/junior/ultraRisk.png" }), (0, skynode_1.el)(".description", "'떡동성 참새'가 만든 하이리스크 울트라리스크 노리턴코인  IJC미니게임"))))))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Junior;
//# sourceMappingURL=Junior.js.map