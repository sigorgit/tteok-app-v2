import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import CommonUtil from "../CommonUtil";
import HousedeedStakingContract from "../contracts/HousedeedStakingContract";
import HousedeedStakingMixContract from "../contracts/HousedeedStakingMixContract";
import Wallet from "../klaytn/Wallet";

export default class HousedeedItem extends DomNode {

    private image: DomNode;
    private ijmAmount: DomNode;
    private mixAmount: DomNode;
    private refreshInterval: any;

    constructor(private id: number) {
        super(".housedeed-item");
        this.append(
            el(".content",
                this.image = el(".housedeed",
                    el("span.id", `#${id}`),
                ),
                el(".info",
                    el("span.title", "쌓인 IJM"),
                    this.ijmAmount = el("span.amount", "Loading..."),
                    "\n",
                    el("span.title", "쌓인 MIX"),
                    this.mixAmount = el("span.amount", "Loading..."),
                ),
                el(".controller",
                    el("button", "IJM 받기", {
                        click: async () => {
                            if (await Wallet.connected() !== true) {
                                await Wallet.connect();
                            }
                            const owner = await Wallet.loadAddress();
                            if (owner !== undefined) {
                                await HousedeedStakingContract.withdrawReward([this.id]);
                            }
                        },
                    }),
                    el("button", "MIX 받기", {
                        click: async () => {
                            if (await Wallet.connected() !== true) {
                                await Wallet.connect();
                            }
                            const owner = await Wallet.loadAddress();
                            if (owner !== undefined) {
                                await HousedeedStakingMixContract.withdrawReward([this.id]);
                            }
                        },
                    }),
                ),
            ),
        );
        this.loadImage();
        this.load();
        this.refreshInterval = setInterval(() => this.load(), 1000);
    }

    private async loadImage() {
        this.image.style({ backgroundImage: `url(https://storage.cloud.google.com/sigor/housedeed.png)` });
    }

    private async load() {
        const claimableIJM = await HousedeedStakingContract.withdrawableReward([this.id]);
        const claimableMix = await HousedeedStakingMixContract.withdrawableReward([this.id]);
        if (this.deleted !== true) {
            this.ijmAmount.empty().appendText(CommonUtil.numberWithCommas(utils.formatEther(claimableIJM), 5));
            this.mixAmount.empty().appendText(CommonUtil.numberWithCommas(utils.formatEther(claimableMix), 5));
        }
    }

    public delete() {
        clearInterval(this.refreshInterval);
        super.delete();
    }
}
