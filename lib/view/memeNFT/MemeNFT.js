"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyrouter_1 = require("skyrouter");
const Layout_1 = __importDefault(require("../Layout"));
const CommonUtil_1 = __importDefault(require("../../CommonUtil"));
const SparrowNFTsContract_1 = __importDefault(require("../../contracts/SparrowNFTsContract"));
const Wallet_1 = __importDefault(require("../../klaytn/Wallet"));
const ViewUtil_1 = __importDefault(require("../ViewUtil"));
const msg_js_1 = __importDefault(require("msg.js"));
class MemeNFT {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("MEME_NFT");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".sparrow-nft-view", (0, skynode_1.el)(".gnb", (0, skynode_1.el)(".inner-gnb", (0, skynode_1.el)("a", { click: () => ViewUtil_1.default.go("/") }, (0, skynode_1.el)("img", { src: "/images/injeolmi.png", height: "40px" })), (0, skynode_1.el)("h1", (0, msg_js_1.default)("MEME_NFT")))), (0, skynode_1.el)("h2", (0, msg_js_1.default)("MEME_NFT_TITLE")), (0, skynode_1.el)("button", (0, msg_js_1.default)("CREATE_MEME_NFT_BUTTON"), {
            click: () => ViewUtil_1.default.go("/meme-nft/add")
        }), (0, skynode_1.el)("button.outline", (0, msg_js_1.default)("MEME_NFT_ADDRESS_BUTTON"), {
            click: () => window.open("https://opensea.io/collection/sparrow-nfts")
        }), this.nftList = (0, skynode_1.el)("ul.nft-list")));
        this.loadNFTs();
    }
    async loadNFTs() {
        const current = await SparrowNFTsContract_1.default.current();
        const address = await Wallet_1.default.loadAddress();
        const promises = [];
        for (let id = 0; id < current.toNumber(); id += 1) {
            const promise = async (index) => {
                const minter = await SparrowNFTsContract_1.default.minters(index);
                const extname = await SparrowNFTsContract_1.default.extnames(index);
                const title = await SparrowNFTsContract_1.default.titles(index);
                const description = await SparrowNFTsContract_1.default.descriptions(index);
                const totalSupply = await SparrowNFTsContract_1.default.getTotalSupply(index);
                (0, skynode_1.el)(".nft", (0, skynode_1.el)(".content", (0, skynode_1.el)("h3", title), (0, skynode_1.el)("img", {
                    src: `https://storage.googleapis.com/sparrow-nfts/${id}.${extname}`,
                    onError: "this.src='/images/error.png'",
                    click: () => open(`https://opensea.io/assets/klaytn/0xfe1970e7fba02c2ab7721840eca0277d5ee6b482/${id}`),
                }), (0, skynode_1.el)(".description", description), (0, skynode_1.el)(".info", (0, skynode_1.el)(".minter", `${(0, msg_js_1.default)("ISSUER")}: ${CommonUtil_1.default.shortenAddress(minter)}`), (0, skynode_1.el)(".totalSupply", `${(0, msg_js_1.default)("TOTAL_AMOUNT")}: ${totalSupply.toNumber()}`)), minter !== address ? undefined : (0, skynode_1.el)(".reupload", (0, skynode_1.el)("h6", (0, msg_js_1.default)("IMAGE_REUPLOAD")), (0, skynode_1.el)("input.hidden", {
                    type: "file",
                    change: (event) => {
                        const file = event.target.files[0];
                        const reader = new FileReader();
                        reader.addEventListener("load", async () => {
                            let dataURL = reader.result;
                            const signedMessage = await Wallet_1.default.signMessage("Upload SparrowNFT File");
                            await fetch(`https://api.tteok.org/sparrow/nft/${id}/upload`, {
                                method: "POST",
                                body: JSON.stringify({
                                    dataURL,
                                    signedMessage,
                                }),
                            });
                            skyrouter_1.SkyRouter.refresh();
                        }, false);
                        if (file) {
                            reader.readAsDataURL(file);
                        }
                    },
                })))).appendTo(this.nftList);
            };
            promises.push(promise(id));
        }
        await Promise.all(promises);
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = MemeNFT;
//# sourceMappingURL=MemeNFT.js.map