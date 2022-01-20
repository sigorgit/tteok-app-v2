import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import CommonUtil from "../CommonUtil";
import SparrowsContract from "../contracts/SparrowsContract";
import SparrowStakingContract from "../contracts/SparrowStakingContract";
import SparrowStakingMixContract from "../contracts/SparrowStakingMixContract";
import Wallet from "../klaytn/Wallet";
import KlubsLoader from "../KlubsLoader";
import ViewUtil from "../view/ViewUtil";

export default class SparrowItem extends DomNode {

    private sparrow: DomNode;
    private ijmAmount: DomNode;
    private mixAmount: DomNode;
    private refreshInterval: any;

    constructor(private id: number) {
        super(".sparrow-item");
        this.append(
            el(".content",
                this.sparrow = el(".sparrow",
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
                    el("button.claim-button", "IJM 받기", {
                        click: async () => {
                            if (await Wallet.connected() !== true) {
                                await Wallet.connect();
                            }
                            const owner = await Wallet.loadAddress();
                            if (owner !== undefined) {
                                await SparrowStakingContract.withdrawReward([this.id]);
                            }
                        },
                    }),
                    el("button.claim-button", "MIX 받기", {
                        click: async () => {
                            if (await Wallet.connected() !== true) {
                                await Wallet.connect();
                            }
                            const owner = await Wallet.loadAddress();
                            if (owner !== undefined) {
                                await SparrowStakingMixContract.withdrawReward([this.id]);
                            }
                        },
                    }),
                    el("button.custom-button", "꾸미기", {
                        click: () => ViewUtil.go(`/sparrows/${id}`),
                    }),
                ),
            ),
        );
        this.loadImage();
        this.load();
        this.refreshInterval = setInterval(() => this.load(), 1000);
    }

    private async loadImage() {
        const metadata = await KlubsLoader.loadMetadata(SparrowsContract.address, this.id);
        this.sparrow.style({ backgroundImage: `url(${metadata.image})` });
    }

    private async load() {
        const claimableIJM = await SparrowStakingContract.withdrawableReward([this.id]);
        const claimableMix = await SparrowStakingMixContract.withdrawableReward([this.id]);
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
