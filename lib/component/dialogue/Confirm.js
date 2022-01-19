"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
class Confirm extends skynode_1.Popup {
    constructor(title, message, confirmTitle, confirm) {
        super(".popup-background");
        this.append(this.content = (0, skynode_1.el)(".dialogue.confirm", (0, skynode_1.el)("h2", title), (0, skynode_1.el)("p", message), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("button", (0, msg_js_1.default)("CANCEL_BUTTON"), {
            click: () => this.delete(),
        }), (0, skynode_1.el)("button", confirmTitle, {
            click: () => {
                confirm();
                this.delete();
            },
        }))));
    }
}
exports.default = Confirm;
//# sourceMappingURL=Confirm.js.map