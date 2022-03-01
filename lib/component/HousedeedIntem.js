"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const CommonUtil_1 = __importDefault(require("../CommonUtil"));
const SparrowsContract_1 = __importDefault(require("../contracts/SparrowsContract"));
const SparrowStakingContract_1 = __importDefault(require("../contracts/SparrowStakingContract"));
const SparrowStakingMixContract_1 = __importDefault(require("../contracts/SparrowStakingMixContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const KlubsLoader_1 = __importDefault(require("../KlubsLoader"));
const ViewUtil_1 = __importDefault(require("../view/ViewUtil"));
class SparrowItem extends skynode_1.DomNode {
    constructor(id) {
        super(".sparrow-item");
        this.id = id;
        this.append((0, skynode_1.el)(".content", this.sparrow = (0, skynode_1.el)(".sparrow", (0, skynode_1.el)("span.id", `#${id}`)), (0, skynode_1.el)(".info", (0, skynode_1.el)("span.title", "쌓인 IJM"), this.ijmAmount = (0, skynode_1.el)("span.amount", "Loading..."), "\n", (0, skynode_1.el)("span.title", "쌓인 MIX"), this.mixAmount = (0, skynode_1.el)("span.amount", "Loading...")), (0, skynode_1.el)(".controller", (0, skynode_1.el)("button", "IJM 받기", {
            click: async () => {
                if (await Wallet_1.default.connected() !== true) {
                    await Wallet_1.default.connect();
                }
                const owner = await Wallet_1.default.loadAddress();
                if (owner !== undefined) {
                    await SparrowStakingContract_1.default.withdrawReward([this.id]);
                }
            },
        }), (0, skynode_1.el)("button", "MIX 받기", {
            click: async () => {
                if (await Wallet_1.default.connected() !== true) {
                    await Wallet_1.default.connect();
                }
                const owner = await Wallet_1.default.loadAddress();
                if (owner !== undefined) {
                    await SparrowStakingMixContract_1.default.withdrawReward([this.id]);
                }
            },
        }), (0, skynode_1.el)("button", "꾸미기", {
            click: () => ViewUtil_1.default.go(`/sparrows/${id}`),
        }))));
        this.loadImage();
        this.load();
        this.refreshInterval = setInterval(() => this.load(), 1000);
    }
    async loadImage() {
        const metadata = await KlubsLoader_1.default.loadMetadata(SparrowsContract_1.default.address, this.id);
        this.sparrow.style({ backgroundImage: `url(${metadata.image})` });
    }
    async load() {
        const claimableIJM = await SparrowStakingContract_1.default.withdrawableReward([this.id]);
        const claimableMix = await SparrowStakingMixContract_1.default.withdrawableReward([this.id]);
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
exports.default = SparrowItem;
//# sourceMappingURL=HousedeedIntem.js.map