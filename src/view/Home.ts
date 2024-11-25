import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import BrowserInfo from "../BrowserInfo";
import Alert from "../component/dialogue/Alert";
import UserInfo from "../component/UserInfo";
import ArkContract from "../contracts/ArkContract";
import InitialSaleContract from "../contracts/InitialSaleContract";
import InitialSaleReceiverContract from "../contracts/InitialSaleReceiverContract";
import InjeolmiContract from "../contracts/InjeolmiContract";
import InjeolmiPriceEstimatorContract from "../contracts/InjeolmiPriceEstimatorContract";
import KlayswapContract from "../contracts/KlayswapContract";
import SInjeolmiContract from "../contracts/SInjeolmiContract";
import YearendAirdropContract from "../contracts/YearendAirdropContract";
import Wallet from "../klaytn/Wallet";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class Home implements View {

    private container: DomNode;
    private interval: any;

    private balanceDisplay: DomNode;
    private totalStakedDisplay: DomNode;
    private withdrawableDisplay: DomNode;

    private hardforkDisplay: DomNode;
    private initialSaleDisplay: DomNode;
    private yearendDisplay: DomNode;

    private stakeInput: DomNode<HTMLInputElement>;
    private unstakeInput: DomNode<HTMLInputElement>;

    constructor() {
        let select: DomNode<HTMLSelectElement>;
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
                        el("a.item", msg("INTRODUCTION_MENU"), { click: () => { ViewUtil.go("/introduce") } }),
                        el("a.item", msg("SIGOR"), { click: () => { new Alert(msg("SIGRO_POPUP_TITLE"), msg("SIGRO_POPUP_DESC")); } }),
                        el("a.item", "집문서 NFT", { click: () => { ViewUtil.go("/housedeeds") } }),
                        el("a.item", msg("SPARROW_NFT"), { click: () => { ViewUtil.go("/sparrows") } }),
                        el("a.item", msg("MEME_NFT"), { click: () => { ViewUtil.go("/meme-nft") } }),
                        el("a.item", msg("JUNIOR_MENU"), { click: () => { ViewUtil.go("/junior") } }),
                        el("a.item", msg("CLASSIC"), { click: () => { ViewUtil.go("/classic") } }),
                        select = el("select.language-select",
                            el("option", "한국어", { value: "ko" }),
                            el("option", "English", { value: "en" }),
                            el("option", "日本語", { value: "jp" }),
                            el("option", "繁体字", { value: "zh-CN" }),
                            el("option", "簡體字", { value: "zh-TW" }),
                            el("option", "Tiếng Việt", { value: "vn" }),
                            el("option", "ภาษาไทย", { value: "TH" }),
                            el("option", "짹짹어", { value: "짹짹어" }),
                            {
                                change: () => {
                                    BrowserInfo.changeLanguage(select.domElement.value);
                                },
                            },
                        ),
                    )
                ),
                el("section",
                    el(".content-container",
                        el(".left-container",
                            el(".price-container",
                                el(".content",
                                    el("h3", "인절미 거래하기"),
                                    el("button", "KLAYSwap으로 이동", {
                                        click: () => open("https://klayswap.com/ko/swap?outputCurrency=0x0268dbed3832b87582B1FA508aCF5958cbb1cd74"),
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
                                el(`${BrowserInfo.language !== "ko" ? ".en-content" : ".content"}`,
                                    el("h3", msg("GET_HARD_FORK_IJM_TITLE")),
                                    el("p", msg("GET_HARD_FORK_IJM_DESC")),
                                    el(".price", (this.hardforkDisplay = el("span.price", "...")), " IJM"),
                                    el("button", msg("GET_BUTTON"), {
                                        click: () => ArkContract.receiveNew(),
                                    }),
                                ),
                                el(`${BrowserInfo.language !== "ko" ? ".en-content" : ".content"}`,
                                    el("h3", msg("RECEIVE_BOUGHT_IJM_TITLE")),
                                    el("p", msg("RECEIVE_BOUGHT_IJM_DESC")),
                                    el(".price", (this.initialSaleDisplay = el("span.price", "...")), " IJM"),
                                    el("button", msg("GET_BUTTON"), {
                                        click: () => InitialSaleReceiverContract.receiveNew(),
                                    }),
                                ),
                                el(`${BrowserInfo.language !== "ko" ? ".en-content" : ".content"}`,
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
                                    href: "https://res.cloudinary.com/drznekqaq/image/upload/v1643110626/fishing1_plte9l.jpg",
                                    target: "_blank"
                                }),
                                el("a.issue", msg("SPARROW_NEWS_DESC2"), {
                                    href: "https://res.cloudinary.com/drznekqaq/image/upload/v1643110626/fishing2_kner5x.jpg",
                                    target: "_blank"
                                }),
                                el("a.issue", msg("SPARROW_NEWS_DESC3"), {
                                    href: "https://res.cloudinary.com/drznekqaq/image/upload/v1643110626/fishing3_ab4ftd.jpg",
                                    target: "_blank"
                                }),
                            ),
                            el(".form",
                                el("p", "인절미와 시고르 집문서가 가이아 프로토콜로 통합 과정 중에 있습니다."),
                                el("p", "곧 해당 내용에 대해 공지드리겠습니다."),
                                el("p", "자산들에 대해 끝까지 책임지겠습니다."),
                            ),
                            /*el(".form",
                                el("h3", msg("BUY_TITLE")),
                                el(".caption", el("a", msg("BUY_DESC"), {
                                    href: "https://klayswap.com/",
                                    target: "_blank",
                                })),
                                // el(".input-container",
                                //     this.buyInput = el("input", {
                                //         placeholder: msg("IJM_ACCOUNT_INPUT"),
                                //         keyup: () => setTimeout(async () => {
                                //             if (this.buyInput.domElement.value.trim() === "") {
                                //                 this.buyResult.empty();
                                //             } else {
                                //                 const amount = utils.parseEther(this.buyInput.domElement.value);
                                //                 const klay = await InjeolmiPriceEstimatorContract.estimatePos(amount);
                                //                 this.buyResult.empty().appendText(`${utils.formatEther(klay.mul(100).div(99))} KLAY`);
                                //             }
                                //         }),
                                //     }),
                                //     el("button", msg("BUY_BUTTON"), {
                                //         click: async () => {
                                //             await KlayswapContract.buy(
                                //                 utils.parseEther(this.buyInput.domElement.value)
                                //             );
                                //             ViewUtil.waitTransactionAndRefresh();
                                //         },
                                //     })
                                // ),
                                // this.buyResult = el(".result"),
                            ),
                            el(".form",
                                el("h3", msg("SELL_TITLE")),
                                el(".caption", el("a", msg("SELL_DESC1"), {
                                    href: "https://klayswap.com/",
                                    target: "_blank",
                                })),
                                // el(".caption", msg("SELL_DESC2")),
                                // el(".input-container",
                                //     this.sellInput = el("input", {
                                //         placeholder: msg("IJM_ACCOUNT_INPUT"),
                                //         keyup: () => setTimeout(async () => {
                                //             if (this.sellInput.domElement.value.trim() === "") {
                                //                 this.sellResult.empty();
                                //             } else {
                                //                 const amount = utils.parseEther(this.sellInput.domElement.value);
                                //                 const klay = await InjeolmiPriceEstimatorContract.estimatePos(amount);
                                //                 this.sellResult.empty().appendText(`${utils.formatEther(klay)} KLAY`);
                                //             }
                                //         }),
                                //     }),
                                //     el("button", msg("SELL_BUTTON"), {
                                //         click: async () => {
                                //             await KlayswapContract.sell(
                                //                 utils.parseEther(this.sellInput.domElement.value)
                                //             );
                                //             ViewUtil.waitTransactionAndRefresh();
                                //         },
                                //     })
                                // ),
                                // this.sellResult = el(".result"),
                            ),*/
                            el(".form",
                                el("h3", "절미 적금"),
                                el(".caption", "절미를 넣어두면 수익을 나눠줘서 예치한 절미가 계속 늘어나!"),
                                el(".caption", "총 예치한 절미: ", (this.totalStakedDisplay = el("span.price", "...")), " IJM"),
                                el(".caption", "너가 예치한 절미: ", (this.withdrawableDisplay = el("span.price", "...")), " IJM"),
                                el(".input-container",
                                    this.stakeInput = el("input", {
                                        placeholder: "인절미 수량 입력",
                                    }),
                                    el("button", "예치하기", {
                                        click: async () => {
                                            await SInjeolmiContract.stake(
                                                utils.parseEther(this.stakeInput.domElement.value)
                                            );
                                            ViewUtil.waitTransactionAndRefresh();
                                        },
                                    })
                                ),
                                el(".input-container",
                                    this.unstakeInput = el("input", {
                                        placeholder: "인절미 수량 입력",
                                    }),
                                    el("button", "출금하기", {
                                        click: async () => {
                                            await SInjeolmiContract.unstake(
                                                utils.parseEther(this.unstakeInput.domElement.value)
                                            );
                                            ViewUtil.waitTransactionAndRefresh();
                                        },
                                    })
                                ),
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
                                            click: () => { ViewUtil.go("/classic") }
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
                            // el("a.ad-banner", { href: "https://www.klaybrag.com/", target: "_blank" },
                            //     el("img", {
                            //         src: "/images/ad-banner/klaybrag.gif"
                            //     })
                            // ),
                            el(".community",
                                el("h3", msg("COMMUNITY_TITLE")),
                                // el("a", msg("OPENKAKAO_BUTTON"), { href: "https://open.kakao.com/o/g1nYzIHd", target: "_blank" }),
                                el("a", msg("DISCORD_BUTTON"), { href: "https://discord.gg/YgdruRMFtJ", target: "_blank" }),
                                // el("a", msg("TELEGRAM_BUTTON"), { href: "https://t.me/ricecakemill3", target: "_blank" }),
                                el("a", msg("TWITTER_BUTTON"), { href: "https://twitter.com/sigorcsc", target: "_blank" }),
                                el("a", msg("MEDIUM_BUTTON"), { href: "https://medium.com/tteok", target: "_blank" }),
                                el("a", msg("GITHUB_BUTTON"), { href: "https://github.com/sigorgit", target: "_blank" }),
                            ),
                        ),
                    ),
                ),
            )),
        );

        select.domElement.value = BrowserInfo.language.substring(0, 2);
        this.refresh();
        this.interval = setInterval(() => this.refresh(), 2000);
    }

    private async refresh() {
        this.load()
    }

    private async load() {

        //const price = await InjeolmiPriceEstimatorContract.estimatePos(utils.parseEther("1"));
        if (this.container.deleted !== true) {
           // this.priceDisplay.empty().appendText("0.004791 $");
        }

        const address = await Wallet.loadAddress();
        if (address !== undefined) {

            const balance = await InjeolmiContract.balanceOf(address);
            if (this.container.deleted !== true) {
                this.balanceDisplay.empty().appendText(utils.formatEther(balance));
            }

            if (await ArkContract.received(address) === true) {
                if (this.container.deleted !== true) {
                    this.hardforkDisplay.empty().appendText("0");
                }
            } else {
                const records = await ArkContract.records(address);
                if (this.container.deleted !== true) {
                    this.hardforkDisplay.empty().appendText(utils.formatEther(records.mul(10000000000)));
                }
            }

            if (await InitialSaleReceiverContract.received(address) === true) {
                if (this.container.deleted !== true) {
                    this.initialSaleDisplay.empty().appendText("0");
                }
            } else {
                const bought = await InitialSaleContract.bought(address);
                if (this.container.deleted !== true) {
                    this.initialSaleDisplay.empty().appendText(utils.formatEther(bought.mul(11).div(10)));
                }
            }

            const toReceive = await YearendAirdropContract.toReceive(address);
            if (this.container.deleted !== true) {
                if (toReceive === true) {
                    this.yearendDisplay.empty().appendText("100");
                } else {
                    this.yearendDisplay.empty().appendText("0");
                }
            }

            const totalStaked = await InjeolmiContract.balanceOf(SInjeolmiContract.address);
            if (this.container.deleted !== true) {
                this.totalStakedDisplay.empty().appendText(utils.formatEther(totalStaked));
            }

            const withdrawable = await SInjeolmiContract.withdrawableIJM(address);
            if (this.container.deleted !== true) {
                this.withdrawableDisplay.empty().appendText(utils.formatEther(withdrawable));
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