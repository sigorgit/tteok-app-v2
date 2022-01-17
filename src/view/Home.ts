import { DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import { View, ViewParams } from "skyrouter";
import msg from "msg.js";
import Alert from "../component/dialogue/Alert";
import UserInfo from "../component/UserInfo";
import ArkContract from "../contracts/ArkContract";
import InitialSaleContract from "../contracts/InitialSaleContract";
import InitialSaleReceiverContract from "../contracts/InitialSaleReceiverContract";
import InjeolmiContract from "../contracts/InjeolmiContract";
import InjeolmiPriceEstimatorContract from "../contracts/InjeolmiPriceEstimatorContract";
import KlayswapContract from "../contracts/KlayswapContract";
import YearendAirdropContract from "../contracts/YearendAirdropContract";
import Wallet from "../klaytn/Wallet";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class Home implements View {

    private container: DomNode;
    private interval: any;

    private priceDisplay: DomNode;
    private balanceDisplay: DomNode;

    private hardforkDisplay: DomNode;
    private initialSaleDisplay: DomNode;
    private yearendDisplay: DomNode;

    private ijmPrice: BigNumber = BigNumber.from("144374553246136709");

    private buyInput: DomNode<HTMLInputElement>;
    private buyResult: DomNode;

    private sellInput: DomNode<HTMLInputElement>;
    private sellResult: DomNode;

    constructor() {
        Layout.current.title = msg("HOME");
        Layout.current.content.append(
            (this.container = el(".home-view",
                el("section",
                    el(".top-banner",
                        el(".banner-image0"),
                        el(".banner-image1",
                            el("img", { src: "/images/injeolmi.png" }),
                            el("h2", msg("TITLE_DESC")),
                            el("h1", msg("TITLE"))
                        ),
                        el("a.banner-image2", {
                            href: "https://gall.dcinside.com/mini/board/view/?id=defidev&no=47&s_type=search_subject_memo&s_keyword=%EC%9D%B8%EC%A0%88%EB%AF%B8&page=1",
                            target: "_blank"
                        })
                    )
                ),
                el(".gnb",
                    el(".item-container",
                        el("a.item", msg("INTRODUCTION_MENU"), { click: () => { ViewUtil.go("introduce") } }),
                        el("a.item", msg("SIGOR"), { click: () => { new Alert(msg("SIGRO_POPUP_TITLE"), msg("SIGRO_POPUP_DESC")); } }),
                        el("a.item", msg("SPARROW_NFT"), { click: () => { new Alert(msg("SIGRO_POPUP_TITLE"), msg("SPARROW_NFT_POPUP_DESC")); } }),
                        el("a.item", msg("MEME_NFT"), { click: () => { ViewUtil.go("meme-nft") } }),
                        el("a.item", msg("JUNIOR_MENU"), { click: () => { ViewUtil.go("junior") } }),
                        el("a.item", msg("CLASSIC"), { click: () => { ViewUtil.go("classic") } }),
                    )
                ),
                el("section",
                    el(".content-container",
                        el(".left-container",
                            el(".price-container",
                                el(".content",
                                    el("h3", msg("IJM_PRICE")),
                                    el(".price", (this.priceDisplay = el("span.price", "...")), " KLAY"),
                                    el("button", msg("CHART_BUTTON"), {
                                        click: () => {
                                            window.open("https://dexata.kr/?tokenA=0x0268dbed3832b87582b1fa508acf5958cbb1cd74&tokenB=")
                                        }
                                    }),
                                ),
                                el(".content",
                                    el("h3", msg("YOUR_IJM_DESC")),
                                    el(".price", (this.balanceDisplay = el("span.price", "...")), " IJM"),
                                    el("button", msg("ADD_IJM_BUTTON"), {
                                        click: () => Wallet.addToken(
                                            InjeolmiContract.address,
                                            "IJM",
                                            18,
                                            "https://tteok.org/images/injeolmi.png"
                                        ),
                                    }),
                                ),
                            ),
                            el(".price-container",
                                el(".content",
                                    el("h3", msg("GET_HARD_FORK_IJM_TITLE")),
                                    el("p", msg("GET_HARD_FORK_IJM_DESC")),
                                    el(".price", (this.hardforkDisplay = el("span.price", "...")), " IJM"),
                                    el("button", msg("GET_BUTTON"), {
                                        click: () => ArkContract.receiveNew(),
                                    }),
                                ),
                                el(".content",
                                    el("h3", msg("RECEIVE_BOUGHT_IJM_TITLE")),
                                    el("p", msg("RECEIVE_BOUGHT_IJM_DESC")),
                                    el(".price", (this.initialSaleDisplay = el("span.price", "...")), " IJM"),
                                    el("button", msg("GET_BUTTON"), {
                                        click: () => InitialSaleReceiverContract.receiveNew(),
                                    }),
                                ),
                                el(".content",
                                    el("h3", msg("GET_YEAR_END_EVENT_TITLE")),
                                    el("p", msg("GET_YEAR_END_EVENT_DESC")),
                                    el(".price", (this.yearendDisplay = el("span.price", "...")), " IJM"),
                                    el("button", msg("GET_BUTTON"), {
                                        click: () => YearendAirdropContract.receiveNew(),
                                    }),
                                ),
                            ),
                            el(".group-issue",
                                el(".issue_area", msg("SPARROW_NEWS_TITLE")),
                                el("a.issue", msg("SPARROW_NEWS_DESC1"), {
                                    href: "https://w.namu.la/s/0e4f61a6fc7b16d00ce2db04a7775a601c489c6cfe3cbd24c674619c8ddb32e72fa1f7a2b91ba09b8dedb28d2e0fbad4b6fcb141224e999aa698343dc0ec0315bd0d79b35ddfc7490f5be8a206e3d2dae929b1ed1a629de301cf76d0f0f2fec7",
                                    target: "_blank"
                                }),
                                el("a.issue", msg("SPARROW_NEWS_DESC2"), {
                                    href: "https://w.namu.la/s/518022bb341cb7e5fae54943759c6011298f551c1b77ef108dd888ff08ca4a41286fcef3b9d90d5d81e646b1482b9ce98da14e940e2a4dd956635a6d0b0ab55744666997086e5a081476b097acfd1720ade2bbd903203b1a1cd9993af75759db",
                                    target: "_blank"
                                }),
                                el("a.issue", msg("SPARROW_NEWS_DESC3"), {
                                    href: "https://w.namu.la/s/c9b951140de72f66425f2f5523cd2a4aa0a796a5c67e4c8363782e249d58f9d4fbbd977b1c6fd8d0fcecf5ee70a146619ee15c502a074c547f931384a97d69e55f6df0a69665e426abb196329c39487ee6007803c94733c87a40c1d0ee24b436",
                                    target: "_blank"
                                }),
                            ),
                            el(".form",
                                el("h3", msg("BUY_TITLE")),
                                el(".caption", el("a", msg("BUY_DESC"), {
                                    href: "https://klayswap.com/",
                                    target: "_blank",
                                })),
                                el(".input-container",
                                    this.buyInput = el("input", {
                                        placeholder: msg("IJM_ACCOUNT_INPUT"),
                                        keyup: () => setTimeout(async () => {
                                            if (this.buyInput.domElement.value.trim() === "") {
                                                this.buyResult.empty();
                                            } else {
                                                const amount = utils.parseEther(this.buyInput.domElement.value);
                                                const klay = await InjeolmiPriceEstimatorContract.estimatePos(amount);
                                                this.buyResult.empty().appendText(`${utils.formatEther(klay.mul(100).div(99))} KLAY`);
                                            }
                                        }),
                                    }),
                                    el("button", msg("BUY_BUTTON"), {
                                        click: async () => {
                                            await KlayswapContract.buy(
                                                utils.parseEther(this.buyInput.domElement.value)
                                            );
                                            ViewUtil.waitTransactionAndRefresh();
                                        },
                                    })
                                ),
                                this.buyResult = el(".result"),
                            ),
                            el(".form",
                                el("h3", msg("SELL_TITLE")),
                                el(".caption", el("a", msg("SELL_DESC1"), {
                                    href: "https://klayswap.com/",
                                    target: "_blank",
                                })),
                                el(".caption", msg("SELL_DESC2")),
                                el(".input-container",
                                    this.sellInput = el("input", {
                                        placeholder: msg("IJM_ACCOUNT_INPUT"),
                                        keyup: () => setTimeout(async () => {
                                            if (this.sellInput.domElement.value.trim() === "") {
                                                this.sellResult.empty();
                                            } else {
                                                const amount = utils.parseEther(this.sellInput.domElement.value);
                                                const klay = await InjeolmiPriceEstimatorContract.estimatePos(amount);
                                                this.sellResult.empty().appendText(`${utils.formatEther(klay)} KLAY`);
                                            }
                                        }),
                                    }),
                                    el("button", msg("SELL_BUTTON"), {
                                        click: async () => {
                                            await KlayswapContract.sell(
                                                utils.parseEther(this.sellInput.domElement.value)
                                            );
                                            ViewUtil.waitTransactionAndRefresh();
                                        },
                                    })
                                ),
                                this.sellResult = el(".result"),
                            ),
                            el(".suggest-container",
                                el("h3", msg("SUGGEST_TITLE")),
                                el(".content",
                                    el(".suggest",
                                        el("p", msg("SUGGEST_DESC1")),
                                        el("button", msg("SUGGEST_BUTTON1"), {
                                            click: () => { window.open("https://klu.bs/pfp/0x29d05593116C443da54DaBFB4e5322DEA2fff8Cd") }
                                        })
                                    ),
                                    el(".suggest",
                                        el("p", msg("SUGGEST_DESC2")),
                                        el("button", msg("SUGGEST_BUTTON2"), {
                                            click: () => { window.open("https://github.com/tteokmill/injeolmi") }
                                        })
                                    ),
                                    el(".suggest",
                                        el("p", msg("SUGGEST_DESC3")),
                                        el("button", msg("SUGGEST_BUTTON3"), {
                                            click: () => { ViewUtil.go("classic") }
                                        })
                                    )
                                )
                            ),
                            el(".banner",
                                el("img", {
                                    src: "/images/thankyou.gif"
                                })
                            ),
                        ),
                        el(".right-container",
                            el(".connect-wallet",
                                el(".caption", msg("CONNECT_WALLET_DESC")),
                                new UserInfo()
                            ),
                            el("a.ad-banner", { href: "https://klayfox.com", target: "_blank" },
                                el("img", {
                                    src: "/images/ad-banner/klayfox.jpeg"
                                })
                            ),
                            el(".community",
                                el("h3", msg("COMMUNITY_TITLE")),
                                el("a", msg("OPENKAKAO_BUTTON"), { href: "https://open.kakao.com/o/g1nYzIHd", target: "_blank" }),
                                el("a", msg("DISCORD_BUTTON"), { href: "https://discord.gg/YgdruRMFtJ", target: "_blank" }),
                                el("a", msg("TELEGRAM_BUTTON"), { href: "https://t.me/ricecakemill3", target: "_blank" }),
                                el("a", msg("TWITTER_BUTTON"), { href: "https://twitter.com/tteokmill", target: "_blank" }),
                                el("a", msg("MEDIUM_BUTTON"), { href: "https://medium.com/tteok", target: "_blank" }),
                                el("a", msg("GITHUB_BUTTON"), { href: "https://github.com/tteokmill", target: "_blank" }),
                            ),
                        ),
                    ),
                ),
            )),
        );

        this.refresh();
        this.interval = setInterval(() => this.refresh(), 2000);
    }

    private async refresh() {
        this.load()
    }

    private async load() {

        const price = await InjeolmiPriceEstimatorContract.estimatePos(utils.parseEther("1"));
        this.priceDisplay.empty().appendText(utils.formatEther(price));

        const address = await Wallet.loadAddress();
        if (address !== undefined) {

            const balance = await InjeolmiContract.balanceOf(address);
            this.balanceDisplay.empty().appendText(utils.formatEther(balance));

            if (await ArkContract.received(address) === true) {
                this.hardforkDisplay.empty().appendText("0");
            } else {
                const records = await ArkContract.records(address);
                this.hardforkDisplay.empty().appendText(utils.formatEther(records.mul(10000000000)));
            }

            if (await InitialSaleReceiverContract.received(address) === true) {
                this.initialSaleDisplay.empty().appendText("0");
            } else {
                const bought = await InitialSaleContract.bought(address);
                this.initialSaleDisplay.empty().appendText(utils.formatEther(bought.mul(11).div(10)));
            }

            const toReceive = await YearendAirdropContract.toReceive(address);
            if (toReceive === true) {
                this.yearendDisplay.empty().appendText("100");
            } else {
                this.yearendDisplay.empty().appendText("0");
            }
        }
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        if (this.container.deleted !== true) {
            this.container.delete();
        }
    }
}