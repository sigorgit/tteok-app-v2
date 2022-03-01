import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import HousedeedItem from "../component/HousedeedItem";
import HousedeedsContract from "../contracts/HousedeedsContract";
import HousedeedStakingContract from "../contracts/HousedeedStakingContract";
import HousedeedStakingMixContract from "../contracts/HousedeedStakingMixContract";
import Wallet from "../klaytn/Wallet";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class Housedeeds implements View {

    private container: DomNode;
    private list: DomNode;

    private nfts: number[] = [];

    constructor() {
        Layout.current.title = "집문서 NFT";
        Layout.current.content.append(this.container = el(".housedeeds-view",
            el(".gnb",
                el(".inner-gnb",
                    el("a", { click: () => ViewUtil.go("/") },
                        el("img", { src: "/images/injeolmi.png", height: "40px" })
                    ),
                    el("h1", "집문서 NFT"),
                )
            ),
            el("header",
                el(".info",
                    el("h3", "NFT 정보"),
                    el("main",
                        el("img", { src: "https://storage.cloud.google.com/sigor/housedeed.png" }),
                        el(".info",
                            el(".name", "시고르 집문서 NFT"),
                            el("p.description", "시고르에 살려면 소지해야 하는 NFT입니다."),
                            el("ul",
                                el("li", el("a", "https://klu.bs/pfp/0x29d05593116C443da54DaBFB4e5322DEA2fff8Cd", { href: "https://klu.bs/pfp/0x29d05593116C443da54DaBFB4e5322DEA2fff8Cd", target: "_blank" })),
                            ),
                        ),
                    ),
                ),
            ),
            el("main",
                el("h2", "NFT 목록"),
                el(".button-container",
                    el("button", "한방에 절미 수령", {
                        click: async () => {
                            if (await Wallet.connected() !== true) {
                                await Wallet.connect();
                            }
                            const owner = await Wallet.loadAddress();
                            if (owner !== undefined) {
                                await HousedeedStakingContract.withdrawReward(this.nfts);
                            }
                        },
                    }),
                    el("button", "한방에 믹스 수령", {
                        click: async () => {
                            if (await Wallet.connected() !== true) {
                                await Wallet.connect();
                            }
                            const owner = await Wallet.loadAddress();
                            if (owner !== undefined) {
                                await HousedeedStakingMixContract.withdrawReward(this.nfts);
                            }
                        },
                    }),
                ),
                this.list = el(".housedeeds-list"),
            ),
        ));
        this.loadHousedeeds();
    }

    private async loadHousedeeds() {
        if (await Wallet.connected() !== true) {
            await Wallet.connect();
        }
        const walletAddress = await Wallet.loadAddress();
        if (walletAddress !== undefined) {

            const balance = (await HousedeedsContract.balanceOf(walletAddress)).toNumber();

            const promises: Promise<void>[] = [];
            for (let i = 0; i < balance; i += 1) {
                const promise = async (index: number) => {
                    const nftId = await HousedeedsContract.tokenOfOwnerByIndex(walletAddress, index);
                    this.nfts.push(nftId.toNumber());
                };
                promises.push(promise(i));
            }
            await Promise.all(promises);

            this.list.empty();

            for (const nftId of this.nfts) {
                new HousedeedItem(nftId).appendTo(this.list);
            }

        } else {
            this.list.empty();
        }
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}