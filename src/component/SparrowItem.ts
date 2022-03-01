import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import CommonUtil from "../CommonUtil";
import SparrowsContract from "../contracts/SparrowsContract";
import SparrowStakingMixContract from "../contracts/SparrowStakingMixContract";
import Wallet from "../klaytn/Wallet";
import KlubsLoader from "../KlubsLoader";
import ViewUtil from "../view/ViewUtil";

export default class SparrowItem extends DomNode {

    private sparrow: DomNode;
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
                    el("span.title", "쌓인 MIX"),
                    this.mixAmount = el("span.amount", "Loading..."),
                ),
                el(".controller",
                    el("button", "MIX 받기", {
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
                    el("button", "꾸미기", {
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
        const claimableMix = await SparrowStakingMixContract.withdrawableReward([this.id]);
        if (this.deleted !== true) {
            this.mixAmount.empty().appendText(CommonUtil.numberWithCommas(utils.formatEther(claimableMix), 5));
        }
    }

    public delete() {
        clearInterval(this.refreshInterval);
        super.delete();
    }
}
