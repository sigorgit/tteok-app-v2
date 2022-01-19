"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
class Sparrow extends skynode_1.DomNode {
    constructor(tab, id) {
        super(".sparrow");
        this.tab = tab;
        this.id = id;
        this.claimable = ethers_1.BigNumber.from(0);
        this.append((0, skynode_1.el)(".content", this.pixelCat = (0, skynode_1.el)(".pixel-cat", (0, skynode_1.el)("span.id", `#${id}`)), (0, skynode_1.el)(".info", (0, skynode_1.el)("h5", "쌓인 MIX"), this.mixAmount = (0, skynode_1.el)(".amount", "Loading...")), (0, skynode_1.el)(".controller", (0, skynode_1.el)("button.claim-button", "받기", {
            click: async () => {
                if (await Wallet.connected() !== true) {
                    await Wallet.connect();
                }
                const owner = await Wallet.loadAddress();
                if (owner !== undefined) {
                    const balance = await MixContract.balanceOf(owner);
                    const fee = this.claimable.div(9);
                    if (balance.lt(fee)) {
                        new Confirm("믹스 구매", "NFT로부터 MIX를 수령받기 위해서는 수령받을 MIX의 10%의 MIX를 선납해야 합니다.", "구매", () => {
                            open("https://klayswap.com/exchange/swap?input=0x0000000000000000000000000000000000000000&output=0xdd483a970a7a7fef2b223c3510fac852799a88bf");
                        });
                    }
                    else {
                        if ((await MixContract.allowance(owner, PixelCatPoolContract.address)).lt(fee)) {
                            await MixContract.approve(PixelCatPoolContract.address, ethers_1.constants.MaxUint256);
                            setTimeout(async () => {
                                await PixelCatPoolContract.claim([this.id]);
                            }, 2000);
                        }
                        else {
                            await PixelCatPoolContract.claim([this.id]);
                        }
                    }
                }
            },
        }))));
        this.loadImage();
        this.load();
        this.refreshInterval = setInterval(() => this.load(), 1000);
    }
    async loadImage() {
        const metadata = await KlubsLoader.loadMetadata(PixelCatContract.address, this.id);
        this.pixelCat.style({ backgroundImage: `url(${metadata.image})` });
    }
    async load() {
        const claimable = await PixelCatPoolContract.claimableOf(this.id);
        if (this.deleted !== true) {
            this.mixAmount.empty().appendText(CommonUtil.numberWithCommas(ethers_1.utils.formatEther(claimable), 5));
            this.tab.changeMix(claimable.sub(this.claimable));
            this.claimable = claimable;
        }
    }
    delete() {
        clearInterval(this.refreshInterval);
        super.delete();
    }
}
exports.default = Sparrow;
//# sourceMappingURL=Sparrow.js.map