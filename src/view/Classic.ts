import { BodyNode, DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import InjeolmiClassicContract from "../contracts/InjeolmiClassicContract";
import InjeolmiPoolContract from "../contracts/InjeolmiPoolContract";
import InjeolmiPriceContract from "../contracts/InjeolmiPriceContract";
import Wallet from "../klaytn/Wallet";

export default class Classic implements View {

    private container: DomNode;
    private interval: any;

    private priceDisplay: DomNode;
    private ijmPrice: BigNumber = BigNumber.from(0);

    private buyInput: DomNode<HTMLInputElement>;
    private buyResult: DomNode;

    private sellInput: DomNode<HTMLInputElement>;
    private sellResult: DomNode;

    constructor() {
        this.container = el(".classic-view",
            el("section",
                el("h1", msg("IJM_CLASSIC_TITLE1")),
                el("p", msg("IJM_CLASSIC_DESC1")),
                el("h3", msg("CLASSIC_INJEOLMI_TITLE")),
                el("img.injeolmi", { src: "/images/injeolmi-classic.png", height: "330" }),
                el("h3", msg("TTEOKNOMICS_TITLE")),
                el("p", msg("TTEOKNOMICS_DESC1")),
                el("p", msg("IJM_CLASSIC_DESC2")),
                el("a", msg("CLASSIC_KAIKAS_BUTTON"), {
                    href: "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi",
                    target: "_blank",
                }),
                el(".links",
                    el("a", msg("CLASSIC_ADD_IJM_BUTTON"), {
                        href: "#",
                        click: () => Wallet.addToken(
                            InjeolmiClassicContract.address,
                            "IJC",
                            8,
                            "https://tteok.org/images/injeolmi-classic.png"
                        ),
                    }), "\n",
                    el("a", msg("CLASSIC_CONTRACT_ADDRESS_BUTTON"), {
                        href: "https://scope.klaytn.com/token/0x9CFc059F64D664F92f3d0329844B8ccca4E5215B",
                        target: "_blank",
                    }), "\n",
                    el("a", msg("SOURCE_CODE_BUTTON"), {
                        href: "https://github.com/tteokmill/injeolmi",
                        target: "_blank",
                    }), "\n",
                    el("a", msg("CLASSIC_CHART_BUTTON"), {
                        href: "https://dexata.kr/?tokenA=0x9cfc059f64d664f92f3d0329844b8ccca4e5215b&tokenB=0x0000000000000000000000000000000000000000",
                        target: "_blank",
                    }),
                ),
                el("p.warning", msg("CLASSIC_WARNING")),
                el(".card",
                    el("h5", msg("CLASSIC_PRICE")),
                    el("h6", (this.priceDisplay = el("span.price", "...")), " KLAY\n"),
                ),
                el("h3", msg("CLASSIC_IJM_BUY_TITLE")),
                el("p", msg("CLASSIC_IJM_BUY_DESC")),
                el(".form",
                    this.buyInput = el("input", {
                        placeholder: msg("CLASSIC_IJM_BUY_INPUT"),
                        keyup: () => setTimeout(() => {
                            const value = utils.parseEther(this.buyInput.domElement.value);
                            this.buyResult.empty().appendText(
                                `${utils.formatEther(
                                    value.mul(utils.parseEther("1")).div(this.ijmPrice).mul(9).div(10)
                                )} IJM`
                            );
                        }),
                    }),
                    this.buyResult = el(".result"),
                    el("button", msg("CLASSIC_IJM_BUY_BUTTON"), {
                        click: async () => {
                            await InjeolmiPoolContract.swapToIJM(
                                utils.parseEther(this.buyInput.domElement.value)
                            );
                        },
                    })
                ),
                el("h3", msg("CLASSIC_IJM_SELL_TITLE")),
                el("p", msg("CLASSIC_IJM_SELL_DESC")),
                el(".form",
                    this.sellInput = el("input", {
                        placeholder: msg("CLASSIC_IJM_SELL_INPUT"),
                        keyup: () => setTimeout(() => {
                            const value = utils.parseEther(this.sellInput.domElement.value);
                            this.sellResult.empty().appendText(
                                `${utils.formatEther(
                                    value.mul(this.ijmPrice).div(utils.parseEther("1")).mul(9).div(10)
                                )} KLAY`
                            );
                        }),
                    }),
                    this.sellResult = el(".result"),
                    el("button", msg("CLASSIC_IJM_SELL_BUTTON"), {
                        click: async () => {
                            await InjeolmiPoolContract.swapToKlay(
                                utils.parseUnits(this.sellInput.domElement.value, 8)
                            );
                        },
                    })
                ),
                el("footer",
                    el("a", msg("TWITTER_BUTTON"), {
                        href: "https://twitter.com/tteokclassic",
                        target: "_blank",
                    }), "\n",
                    el("a", msg("OPENKAKAO_BUTTON"), {
                        href: "https://open.kakao.com/o/gc5NMySd",
                        target: "_blank",
                    }), "\n",
                    el("img", { src: "/images/thankyou.gif", height: "107.5" })
                ),
            ),
        ).appendTo(BodyNode);

        this.refresh();
        this.interval = setInterval(() => this.refresh(), 2000);
    }

    private async refresh() {
        this.ijmPrice = await InjeolmiPriceContract.price();
        if (this.container.deleted !== true) {
            this.priceDisplay.empty().appendText(utils.formatEther(this.ijmPrice));
        }
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}