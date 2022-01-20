"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const SparrowItem_1 = __importDefault(require("../component/SparrowItem"));
const SparrowsContract_1 = __importDefault(require("../contracts/SparrowsContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Sparrows {
    constructor() {
        this.nfts = [];
        Layout_1.default.current.title = "참새 NFT";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".sparrows-view", (0, skynode_1.el)(".gnb", (0, skynode_1.el)(".inner-gnb", (0, skynode_1.el)("a", { click: () => ViewUtil_1.default.go("/") }, (0, skynode_1.el)("img", { src: "/images/injeolmi.png", height: "40px" })), (0, skynode_1.el)("h1", "참새 NFT"))), (0, skynode_1.el)("header", (0, skynode_1.el)(".info", (0, skynode_1.el)("h3", "NFT 정보"), (0, skynode_1.el)("main", (0, skynode_1.el)("img", { src: "/images/sparrows.png" }), (0, skynode_1.el)(".info", (0, skynode_1.el)(".name", "떡방앗간 참새 NFT"), (0, skynode_1.el)("p.description", "떡방앗간 참새들의 아이덴티티를 표현하는 NFT입니다. 짹짹!"), (0, skynode_1.el)("ul", (0, skynode_1.el)("li", (0, skynode_1.el)("a", "https://klu.bs/pfp/0x29d05593116C443da54DaBFB4e5322DEA2fff8Cd", { href: "https://klu.bs/pfp/0x29d05593116C443da54DaBFB4e5322DEA2fff8Cd", target: "_blank" })))))), (0, skynode_1.el)(".info", (0, skynode_1.el)("h3", "작가 정보"), (0, skynode_1.el)("main", (0, skynode_1.el)("img", { src: "/images/yonee.jpg" }), (0, skynode_1.el)(".info", (0, skynode_1.el)(".name", "Yonee (aka 초무새)"), (0, skynode_1.el)("p.description", "illustrator/NFT artist based in korea"), (0, skynode_1.el)("ul", (0, skynode_1.el)("li", (0, skynode_1.el)("a", "https://twitter.com/Yonee_hi", { href: "https://twitter.com/Yonee_hi", target: "_blank" })), (0, skynode_1.el)("li", (0, skynode_1.el)("a", "https://www.instagram.com/ooillust", { href: "https://www.instagram.com/ooillust", target: "_blank" })), (0, skynode_1.el)("li", (0, skynode_1.el)("a", "https://opensea.io/collection/normaltravel", { href: "https://opensea.io/collection/normaltravel", target: "_blank" })), (0, skynode_1.el)("li", (0, skynode_1.el)("a", "https://opensea.io/collection/tweetweets", { href: "https://opensea.io/collection/tweetweets", target: "_blank" }))))))), (0, skynode_1.el)("main", (0, skynode_1.el)("h2", "NFT 목록"), this.list = (0, skynode_1.el)(".sparrows-list"))));
        this.loadSparrows();
    }
    async loadSparrows() {
        if (await Wallet_1.default.connected() !== true) {
            await Wallet_1.default.connect();
        }
        const walletAddress = await Wallet_1.default.loadAddress();
        if (walletAddress !== undefined) {
            const balance = (await SparrowsContract_1.default.balanceOf(walletAddress)).toNumber();
            const promises = [];
            for (let i = 0; i < balance; i += 1) {
                const promise = async (index) => {
                    const nftId = await SparrowsContract_1.default.tokenOfOwnerByIndex(walletAddress, index);
                    this.nfts.push(nftId.toNumber());
                };
                promises.push(promise(i));
            }
            await Promise.all(promises);
            this.list.empty();
            for (const nftId of this.nfts) {
                new SparrowItem_1.default(nftId).appendTo(this.list);
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
exports.default = Sparrows;
//# sourceMappingURL=Sparrows.js.map