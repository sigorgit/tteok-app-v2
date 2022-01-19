"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const BrowserInfo_1 = __importDefault(require("../BrowserInfo"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Layout {
    constructor() {
        Layout.current = this;
        let select;
        skynode_1.BodyNode.append((this.container = (0, skynode_1.el)(".layout", (0, skynode_1.el)("main", (this.content = (0, skynode_1.el)(".content"))), (0, skynode_1.el)("footer", (0, skynode_1.el)("", (0, msg_js_1.default)("COPYRIGHT_TITLE")), (0, skynode_1.el)(".aside-container", (0, skynode_1.el)("a", (0, msg_js_1.default)("SPARROW_OF_HONOR_TITLE"), { click: () => { ViewUtil_1.default.go("/sparrow-honor"); } }), select = (0, skynode_1.el)("select.language-select", (0, skynode_1.el)("option", "한국어", { value: "ko" }), (0, skynode_1.el)("option", "English", { value: "en" }), (0, skynode_1.el)("option", "日本語", { value: "jp" }), (0, skynode_1.el)("option", "繁体字", { value: "zh-CN" }), (0, skynode_1.el)("option", "簡體字", { value: "zh-TW" }), (0, skynode_1.el)("option", "Tiếng Việt", { value: "vn" }), (0, skynode_1.el)("option", "ภาษาไทย", { value: "TH" }), (0, skynode_1.el)("option", "짹짹어", { value: "짹짹어" }), {
            change: () => {
                BrowserInfo_1.default.changeLanguage(select.domElement.value);
            },
        }))))));
        select.domElement.value = BrowserInfo_1.default.language.substring(0, 2);
    }
    set title(title) {
        document.title = `${title} | ${(0, msg_js_1.default)("TITLE")} `;
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Layout;
//# sourceMappingURL=Layout.js.map