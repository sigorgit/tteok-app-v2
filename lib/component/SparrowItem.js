"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const SparrowNFTsContract_1 = __importDefault(require("../contracts/SparrowNFTsContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const KlubsLoader_1 = __importDefault(require("../KlubsLoader"));
class SparrowItem extends skynode_1.DomNode {
    constructor(tab, id) {
        super(".sparrow-item");
        this.tab = tab;
        this.id = id;
        this.claimable = ethers_1.BigNumber.from(0);
        this.append((0, skynode_1.el)(".content", this.sparrow = (0, skynode_1.el)(".sparrow", (0, skynode_1.el)("span.id", `#${id}`)), (0, skynode_1.el)(".info", (0, skynode_1.el)("h5", "쌓인 IJM"), this.mixAmount = (0, skynode_1.el)(".amount", "Loading...")), (0, skynode_1.el)(".controller", (0, skynode_1.el)("button.claim-button", "받기", {
            click: async () => {
                if (await Wallet_1.default.connected() !== true) {
                    await Wallet_1.default.connect();
                }
            },
        }))));
        this.loadImage();
        this.load();
        this.refreshInterval = setInterval(() => this.load(), 1000);
    }
    async loadImage() {
        const metadata = await KlubsLoader_1.default.loadMetadata(SparrowNFTsContract_1.default.address, this.id);
        this.sparrow.style({ backgroundImage: `url(${metadata.image})` });
    }
    async load() {
    }
    delete() {
        clearInterval(this.refreshInterval);
        super.delete();
    }
}
exports.default = SparrowItem;
//# sourceMappingURL=SparrowItem.js.map