"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const HousedeedItem_1 = __importDefault(require("../component/HousedeedItem"));
const HousedeedsContract_1 = __importDefault(require("../contracts/HousedeedsContract"));
const HousedeedStakingContract_1 = __importDefault(require("../contracts/HousedeedStakingContract"));
const HousedeedStakingMixContract_1 = __importDefault(require("../contracts/HousedeedStakingMixContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Housedeeds {
    constructor() {
        this.nfts = [];
        Layout_1.default.current.title = "집문서 NFT";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".housedeeds-view", (0, skynode_1.el)(".gnb", (0, skynode_1.el)(".inner-gnb", (0, skynode_1.el)("a", { click: () => ViewUtil_1.default.go("/") }, (0, skynode_1.el)("img", { src: "/images/injeolmi.png", height: "40px" })), (0, skynode_1.el)("h1", "집문서 NFT"))), (0, skynode_1.el)("header", (0, skynode_1.el)(".info", (0, skynode_1.el)("h3", "NFT 정보"), (0, skynode_1.el)("main", (0, skynode_1.el)("img", { src: "https://storage.cloud.google.com/sigor/housedeed.png" }), (0, skynode_1.el)(".info", (0, skynode_1.el)(".name", "시고르 집문서 NFT"), (0, skynode_1.el)("p.description", "시고르에 살려면 소지해야 하는 NFT입니다."), (0, skynode_1.el)("ul", (0, skynode_1.el)("li", (0, skynode_1.el)("a", "https://klu.bs/pfp/0x29d05593116C443da54DaBFB4e5322DEA2fff8Cd", { href: "https://klu.bs/pfp/0x29d05593116C443da54DaBFB4e5322DEA2fff8Cd", target: "_blank" }))))))), (0, skynode_1.el)("main", (0, skynode_1.el)("h2", "NFT 목록"), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("button", "한방에 절미 수령", {
            click: async () => {
                if (await Wallet_1.default.connected() !== true) {
                    await Wallet_1.default.connect();
                }
                const owner = await Wallet_1.default.loadAddress();
                if (owner !== undefined) {
                    await HousedeedStakingContract_1.default.withdrawReward(this.nfts);
                }
            },
        }), (0, skynode_1.el)("button", "한방에 믹스 수령", {
            click: async () => {
                if (await Wallet_1.default.connected() !== true) {
                    await Wallet_1.default.connect();
                }
                const owner = await Wallet_1.default.loadAddress();
                if (owner !== undefined) {
                    await HousedeedStakingMixContract_1.default.withdrawReward(this.nfts);
                }
            },
        })), this.list = (0, skynode_1.el)(".housedeeds-list"))));
        this.loadHousedeeds();
    }
    async loadHousedeeds() {
        if (await Wallet_1.default.connected() !== true) {
            await Wallet_1.default.connect();
        }
        const walletAddress = await Wallet_1.default.loadAddress();
        if (walletAddress !== undefined) {
            const balance = (await HousedeedsContract_1.default.balanceOf(walletAddress)).toNumber();
            const promises = [];
            for (let i = 0; i < balance; i += 1) {
                const promise = async (index) => {
                    const nftId = await HousedeedsContract_1.default.tokenOfOwnerByIndex(walletAddress, index);
                    this.nfts.push(nftId.toNumber());
                };
                promises.push(promise(i));
            }
            await Promise.all(promises);
            this.list.empty();
            for (const nftId of this.nfts) {
                new HousedeedItem_1.default(nftId).appendTo(this.list);
            }
        }
        else {
            this.list.empty();
        }
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Housedeeds;
//# sourceMappingURL=Housedeeds.js.map