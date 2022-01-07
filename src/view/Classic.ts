import { BodyNode, DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import { View, ViewParams } from "skyrouter";
import InjeolmiContract from "../contracts/InjeolmiContract";
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
                el("h1", "떡방앗간.닷컴\n클래식"),
                el("p", `한국인의 정과 훈훈한 인심. 따뜻한 코인 커뮤니티 떡방앗간 코인 이야기.\nhttp://tteok.org으로도 접속하실 수 있습니다.\n떡방앗간 회원들은 "참새"로 불리웁니다.`),
                el("h3", "클래식 인절미"),
                el("img.injeolmi", { src: "/images/injeolmi-classic.png", height: "330" }),
                el("h3", "인절미 클래식 떡크노믹스"),
                el("p", "토큰 전송 시 10% 떼감 -> 9%는 홀더들한테 떡돌림, 1%는 떡방앗간에 팁으로 제공 (팁은 이벤트, 에드, 기부, 개발자 사리사욕에 쓰임)"),
                el("p", "인절미 클래식은 클레이튼 밈 토큰입니다. 따라서 클레이튼 지갑인 카이카스 지갑이 필요합니다."),
                el("a", "카이카스 지갑 다운로드", {
                    href: "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi",
                    target: "_blank",
                }),
                el(".links",
                    el("a", "인절미 카이카스 지갑에 추가(클립은 영원히 지원 계획이 없습니다.)", {
                        click: () => Wallet.addToken(
                            InjeolmiContract.address,
                            "IJM",
                            8,
                            "https://raw.githubusercontent.com/tteokmill/tteok-app/main/docs/images/injeolmi.png"
                        ),
                    }), "\n",
                    el("a", "스마트 콘트랙트 주소: 0x9CFc059F64D664F92f3d0329844B8ccca4E5215B", {
                        href: "https://scope.klaytn.com/token/0x9CFc059F64D664F92f3d0329844B8ccca4E5215B",
                        target: "_blank",
                    }), "\n",
                    el("a", "소스 코드", {
                        href: "https://github.com/tteokmill/injeolmi",
                        target: "_blank",
                    }), "\n",
                    el("a", "인절미 차트보기", {
                        href: "https://dexata.kr/?tokenA=0x9cfc059f64d664f92f3d0329844b8ccca4e5215b&tokenB=0x0000000000000000000000000000000000000000",
                        target: "_blank",
                    }),
                ),
                el("p.warning", "절대 본인의 인절미 클래식을 본인의 지갑에 전송하지 마세요. 인절미 클래식을 모두 잃어버릴 수 있습니다!"),
                el(".card",
                    el("h5", "인절미 클래식 가격"),
                    el("h6", (this.priceDisplay = el("span.price", "...")), " KLAY\n"),
                ),
                el("h3", "클레이로 인절미 클래식 사기"),
                el("p", "인절미 클래식을 살때도 떡크노믹스 때문에 10%를 적게 받습니다."),
                el(".form",
                    this.buyInput = el("input", {
                        placeholder: "KLAY 수량",
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
                    el("button", "사기", {
                        click: async () => {
                            await InjeolmiPoolContract.swapToIJM(
                                utils.parseEther(this.buyInput.domElement.value)
                            );
                        },
                    })
                ),
                el("h3", "인절미 클래식 클레이로 팔기"),
                el("p", "인절미 클래식을 펄때도 떡크노믹스 때문에 10%를 적게 받습니다."),
                el(".form",
                    this.sellInput = el("input", {
                        placeholder: "IMJ 수량",
                        keyup: () => setTimeout(() => {
                            const value = utils.parseEther(this.sellInput.domElement.value);
                            this.sellResult.empty().appendText(
                                `대략 ${utils.formatEther(
                                    value.mul(this.ijmPrice).div(utils.parseEther("1")).mul(9).div(10)
                                )} KLAY`
                            );
                        }),
                    }),
                    this.sellResult = el(".result"),
                    el("button", "펄기", {
                        click: async () => {
                            await InjeolmiPoolContract.swapToKlay(
                                utils.parseUnits(this.sellInput.domElement.value, 8)
                            );
                        },
                    })
                ),
                el("footer",
                    el("a", "트위터", {
                        href: "https://twitter.com/tteokclassic",
                        target: "_blank",
                    }), "\n",
                    el("a", "오카방 (오픈 카카오톡 방)", {
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