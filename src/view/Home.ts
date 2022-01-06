import { DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class Home implements View {

    private container: DomNode;
    private interval: any;

    private priceDisplay: DomNode;
    private airdropDisplay: DomNode;
    private ijmPrice: BigNumber = BigNumber.from(0);

    private buyInput: DomNode<HTMLInputElement>;
    private buyResult: DomNode;

    private sellInput: DomNode<HTMLInputElement>;
    private sellResult: DomNode;

    constructor() {
        Layout.current.title = "홈";
        Layout.current.content.append(
            (this.container = el(".home-view",
                el("section",
                    el(".banner-image",
                        el("img", { src: "/images/injeolmi.png" }),
                        el("h2", "한국인의 정과 훈훈한 인심"),
                        el("h1", "떡방앗간.닷컴")
                    )
                ),
                el(".gnb",
                    el(".item-container",
                        el("a.item", "소개", { click: () => { ViewUtil.go("introduce") } }),
                        el("a.item", "참새 NFT", { click: () => { ViewUtil.go("sparrow-nft") } }),
                        el("a.item", "밈 NFT"),
                        el("a.item", "팬 게임"),
                        el("a.item", "클래식"),
                    )
                ),
                el("section",
                    el(".content-container",
                        el(".left-container",
                            el(".price-container",
                                el(".content",
                                    el("h3", "인절미 가격"),
                                    el(".price", (this.priceDisplay = el("span.price", "...")), " KLAY")
                                ),
                                el(".content",
                                    el("h3", "에어드롭 물량"),
                                    el(".price", (this.airdropDisplay = el("span.price", "...")), " KLAY"),
                                ),
                            ),
                            el(".form",
                                el("h3", "클레이로 인절미 사기"),
                                el(".caption", "인절미를 살때도 떡크노믹스 때문에 10%를 적게 받습니다."),
                                el(".input-container",
                                    this.buyInput = el("input", {
                                        placeholder: "클레이 수량 입력",
                                        keyup: () => setTimeout(() => {
                                            const value = utils.parseEther(this.buyInput.domElement.value);
                                            this.buyResult.empty().appendText(
                                                `대략 ${utils.formatEther(
                                                    value.mul(utils.parseEther("1")).div(this.ijmPrice).mul(9).div(10)
                                                )} IJM`
                                            );
                                        }),
                                    }),
                                    this.buyResult = el(".result"),
                                    el("button", "인절미 사기", {
                                        click: async () => {
                                        },
                                    })
                                )
                            ),
                            el(".form",
                                el("h3", "클레이로 인절기 펄기"),
                                el(".caption", "인절미를 펄때도 떡크노믹스 때문에 10%를 적게 받습니다."),
                                el(".input-container",
                                    this.buyInput = el("input", {
                                        placeholder: "인절미 수량 입력",
                                        keyup: () => setTimeout(() => {
                                            const value = utils.parseEther(this.buyInput.domElement.value);
                                            this.buyResult.empty().appendText(
                                                `대략 ${utils.formatEther(
                                                    value.mul(utils.parseEther("1")).div(this.ijmPrice).mul(9).div(10)
                                                )} IJM`
                                            );
                                        }),
                                    }),
                                    this.buyResult = el(".result"),
                                    el("button", "인절미 펄기", {
                                        click: async () => {
                                        },
                                    })
                                )
                            )
                        ),
                        el(".right-container",
                            el(".connect-wallet",
                                el(".caption", "정과 훈훈한 인심의 세계로"),
                                el("button", "지갑 연결")
                            ),
                            el(".banner",
                                el("img", {
                                    src: "/images/thankyou.gif"
                                })
                            ),
                            el(".community",
                                el("h3", "떡방앗간 커뮤니티"),
                                el("a", "오카방\n(오픈 카카오톡 방)", { href: "https://open.kakao.com/o/g1nYzIHd", target: "_blank" }),
                                el("a", "디스코드", { href: "https://discord.gg/YgdruRMFtJ", target: "_blank" }),
                                el("a", "트위터", { href: "https://twitter.com/tteokmill", target: "_blank" }),
                                el("a", "미디엄", { href: "https://medium.com/tteok", target: "_blank" }),
                                el("a", "깃허브", { href: "https://github.com/tteokmill", target: "_blank" }),
                            ),
                        ),
                    ),
                ),
            )),
        );
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}