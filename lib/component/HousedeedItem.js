"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const CommonUtil_1 = __importDefault(require("../CommonUtil"));
const HousedeedStakingContract_1 = __importDefault(require("../contracts/HousedeedStakingContract"));
const HousedeedStakingMixContract_1 = __importDefault(require("../contracts/HousedeedStakingMixContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
class HousedeedItem extends skynode_1.DomNode {
    constructor(id) {
        super(".housedeed-item");
        this.id = id;
        this.append((0, skynode_1.el)(".content", this.image = (0, skynode_1.el)(".housedeed", (0, skynode_1.el)("span.id", `#${id}`)), (0, skynode_1.el)(".info", (0, skynode_1.el)("span.title", "쌓인 IJM"), this.ijmAmount = (0, skynode_1.el)("span.amount", "Loading..."), "\n", (0, skynode_1.el)("span.title", "쌓인 MIX"), this.mixAmount = (0, skynode_1.el)("span.amount", "Loading...")), (0, skynode_1.el)(".controller", (0, skynode_1.el)("button", "IJM 받기", {
            click: async () => {
                if (await Wallet_1.default.connected() !== true) {
                    await Wallet_1.default.connect();
                }
                const owner = await Wallet_1.default.loadAddress();
                if (owner !== undefined) {
                    await HousedeedStakingContract_1.default.withdrawReward([this.id]);
                }
            },
        }), (0, skynode_1.el)("button", "MIX 받기", {
            click: async () => {
                if (await Wallet_1.default.connected() !== true) {
                    await Wallet_1.default.connect();
                }
                const owner = await Wallet_1.default.loadAddress();
                if (owner !== undefined) {
                    await HousedeedStakingMixContract_1.default.withdrawReward([this.id]);
                }
            },
        }))));
        this.loadImage();
        this.load();
        this.refreshInterval = setInterval(() => this.load(), 1000);
    }
    async loadImage() {
        this.image.style({ backgroundImage: `url(https://storage.cloud.google.com/sigor/housedeed.png)` });
    }
    async load() {
        const claimableIJM = await HousedeedStakingContract_1.default.withdrawableReward([this.id]);
        const claimableMix = await HousedeedStakingMixContract_1.default.withdrawableReward([this.id]);
        if (this.deleted !== true) {
            this.ijmAmount.empty().appendText(CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(claimableIJM), 5));
            this.mixAmount.empty().appendText(CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(claimableMix), 5));
        }
    }
    delete() {
        clearInterval(this.refreshInterval);
        super.delete();
    }
}
exports.default = HousedeedItem;
//# sourceMappingURL=HousedeedItem.js.map