"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const Layout_1 = __importDefault(require("./Layout"));
class Introduce {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("INTRODUCTION_MENU");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".introduce-view", (0, skynode_1.el)("section", (0, skynode_1.el)("h2", (0, msg_js_1.default)("TITLE")), (0, skynode_1.el)("p", (0, msg_js_1.default)("INTRODUCTION_DESC1")), (0, skynode_1.el)("h3", (0, msg_js_1.default)("INJEOLMI")), (0, skynode_1.el)("img.injeolmi", { src: "/images/injeolmi.png", height: "330" }), (0, skynode_1.el)("h3", (0, msg_js_1.default)("PREPARE_TITLE")), (0, skynode_1.el)("p", (0, msg_js_1.default)("PREPARE_DESC")), (0, skynode_1.el)("button", (0, msg_js_1.default)("PREPARE_BUTTON"), {
            click: () => {
                window.open("https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi");
            },
        }), (0, skynode_1.el)("h3", (0, msg_js_1.default)("ROAD_MAP_TITLE")), (0, skynode_1.el)("h4", (0, msg_js_1.default)("ROAD_MAP_TIME2")), (0, skynode_1.el)("p", (0, msg_js_1.default)("ROAD_MAP_DESC2")), (0, skynode_1.el)("h4", (0, msg_js_1.default)("ROAD_MAP_TIME3")), (0, skynode_1.el)("p", (0, msg_js_1.default)("ROAD_MAP_DESC3")), (0, skynode_1.el)("h4", (0, msg_js_1.default)("ROAD_MAP_TIME4")), (0, skynode_1.el)("p", (0, msg_js_1.default)("ROAD_MAP_DESC4")), (0, skynode_1.el)("h4", (0, msg_js_1.default)("ROAD_MAP_TIME5")), (0, skynode_1.el)("p", (0, msg_js_1.default)("ROAD_MAP_DESC5")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("ROAD_MAP_DESC6")))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Introduce;
//# sourceMappingURL=Introduce.js.map