"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const msg_js_1 = __importDefault(require("msg.js"));
const InjeolmiClassicContract_1 = __importDefault(require("../contracts/InjeolmiClassicContract"));
const InjeolmiPoolContract_1 = __importDefault(require("../contracts/InjeolmiPoolContract"));
const InjeolmiPriceContract_1 = __importDefault(require("../contracts/InjeolmiPriceContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
class Classic {
    constructor() {
        this.ijmPrice = ethers_1.BigNumber.from(0);
        this.container = (0, skynode_1.el)(".classic-view", (0, skynode_1.el)("section", (0, skynode_1.el)("h1", (0, msg_js_1.default)("IJM_CLASSIC_TITLE1")), (0, skynode_1.el)("p", (0, msg_js_1.default)("IJM_CLASSIC_DESC1")), (0, skynode_1.el)("h3", (0, msg_js_1.default)("CLASSIC_INJEOLMI_TITLE")), (0, skynode_1.el)("img.injeolmi", { src: "/images/injeolmi-classic.png", height: "330" }), (0, skynode_1.el)("h3", (0, msg_js_1.default)("TTEOKNOMICS_TITLE")), (0, skynode_1.el)("p", (0, msg_js_1.default)("TTEOKNOMICS_DESC1")), (0, skynode_1.el)("p", (0, msg_js_1.default)("IJM_CLASSIC_DESC2")), (0, skynode_1.el)("a", (0, msg_js_1.default)("CLASSIC_KAIKAS_BUTTON"), {
            href: "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi",
            target: "_blank",
        }), (0, skynode_1.el)(".links", (0, skynode_1.el)("a", (0, msg_js_1.default)("CLASSIC_ADD_IJM_BUTTON"), {
            href: "#",
            click: () => Wallet_1.default.addToken(InjeolmiClassicContract_1.default.address, "IJC", 8, "https://tteok.org/images/injeolmi-classic.png"),
        }), "\n", (0, skynode_1.el)("a", (0, msg_js_1.default)("CLASSIC_CONTRACT_ADDRESS_BUTTON"), {
            href: "https://scope.klaytn.com/token/0x9CFc059F64D664F92f3d0329844B8ccca4E5215B",
            target: "_blank",
        }), "\n", (0, skynode_1.el)("a", (0, msg_js_1.default)("SOURCE_CODE_BUTTON"), {
            href: "https://github.com/tteokmill/injeolmi",
            target: "_blank",
        }), "\n", (0, skynode_1.el)("a", (0, msg_js_1.default)("CLASSIC_CHART_BUTTON"), {
            href: "https://dexata.kr/?tokenA=0x9cfc059f64d664f92f3d0329844b8ccca4e5215b&tokenB=0x0000000000000000000000000000000000000000",
            target: "_blank",
        })), (0, skynode_1.el)("p.warning", (0, msg_js_1.default)("CLASSIC_WARNING")), (0, skynode_1.el)(".card", (0, skynode_1.el)("h5", (0, msg_js_1.default)("CLASSIC_PRICE")), (0, skynode_1.el)("h6", (this.priceDisplay = (0, skynode_1.el)("span.price", "...")), " KLAY\n")), (0, skynode_1.el)("h3", (0, msg_js_1.default)("CLASSIC_IJM_BUY_TITLE")), (0, skynode_1.el)("p", (0, msg_js_1.default)("CLASSIC_IJM_BUY_DESC")), (0, skynode_1.el)(".form", this.buyInput = (0, skynode_1.el)("input", {
            placeholder: (0, msg_js_1.default)("CLASSIC_IJM_BUY_INPUT"),
            keyup: () => setTimeout(() => {
                const value = ethers_1.utils.parseEther(this.buyInput.domElement.value);
                this.buyResult.empty().appendText(`${ethers_1.utils.formatEther(value.mul(ethers_1.utils.parseEther("1")).div(this.ijmPrice).mul(9).div(10))} IJM`);
            }),
        }), this.buyResult = (0, skynode_1.el)(".result"), (0, skynode_1.el)("button", (0, msg_js_1.default)("CLASSIC_IJM_BUY_BUTTON"), {
            click: async () => {
                await InjeolmiPoolContract_1.default.swapToIJM(ethers_1.utils.parseEther(this.buyInput.domElement.value));
            },
        })), (0, skynode_1.el)("h3", (0, msg_js_1.default)("CLASSIC_IJM_SELL_TITLE")), (0, skynode_1.el)("p", (0, msg_js_1.default)("CLASSIC_IJM_SELL_DESC")), (0, skynode_1.el)(".form", this.sellInput = (0, skynode_1.el)("input", {
            placeholder: (0, msg_js_1.default)("CLASSIC_IJM_SELL_INPUT"),
            keyup: () => setTimeout(() => {
                const value = ethers_1.utils.parseEther(this.sellInput.domElement.value);
                this.sellResult.empty().appendText(`${ethers_1.utils.formatEther(value.mul(this.ijmPrice).div(ethers_1.utils.parseEther("1")).mul(9).div(10))} KLAY`);
            }),
        }), this.sellResult = (0, skynode_1.el)(".result"), (0, skynode_1.el)("button", (0, msg_js_1.default)("CLASSIC_IJM_SELL_BUTTON"), {
            click: async () => {
                await InjeolmiPoolContract_1.default.swapToKlay(ethers_1.utils.parseUnits(this.sellInput.domElement.value, 8));
            },
        })), (0, skynode_1.el)("footer", (0, skynode_1.el)("a", (0, msg_js_1.default)("TWITTER_BUTTON"), {
            href: "https://twitter.com/tteokclassic",
            target: "_blank",
        }), "\n", (0, skynode_1.el)("a", (0, msg_js_1.default)("OPENKAKAO_BUTTON"), {
            href: "https://open.kakao.com/o/gc5NMySd",
            target: "_blank",
        }), "\n", (0, skynode_1.el)("img", { src: "/images/thankyou.gif", height: "107.5" })))).appendTo(skynode_1.BodyNode);
        this.refresh();
        this.interval = setInterval(() => this.refresh(), 2000);
    }
    async refresh() {
        this.ijmPrice = await InjeolmiPriceContract_1.default.price();
        if (this.container.deleted !== true) {
            this.priceDisplay.empty().appendText(ethers_1.utils.formatEther(this.ijmPrice));
        }
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Classic;
//# sourceMappingURL=Classic.js.map