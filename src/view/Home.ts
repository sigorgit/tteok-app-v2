import { DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import { View, ViewParams } from "skyrouter";
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
        Layout.current.title = "홈";
        Layout.current.content.append(
            (this.container = el(".home-view",
                el("section",
                    el(".top-banner",
                        el(".banner-image0"),
                        el(".banner-image1",
                            el("img", { src: "/images/injeolmi.png" }),
                            el("h2", "한국인의 정과 훈훈한 인심"),
                            el("h1", "떡방앗간.닷컴")
                        ),
                        el("a.banner-image2", {
                            href: "https://gall.dcinside.com/mini/board/view/?id=defidev&no=47&s_type=search_subject_memo&s_keyword=%EC%9D%B8%EC%A0%88%EB%AF%B8&page=1",
                            target: "_blank"
                        })
                    )
                ),
                el(".gnb",
                    el(".item-container",
                        el("a.item", "소개", { click: () => { ViewUtil.go("introduce") } }),
                        el("a.item", "시고르", { click: () => { new Alert("준비중", "아직 페이지 준비중이야"); } }),
                        el("a.item", "참새 NFT", { click: () => { new Alert("준비중", "이것도 아직 페이지 준비중이야"); } }),
                        el("a.item", "밈 NFT", { click: () => { ViewUtil.go("meme-nft") } }),
                        el("a.item", "쥬니어", { click: () => { ViewUtil.go("junior") } }),
                        el("a.item", "클래식", { click: () => { ViewUtil.go("classic") } }),
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
                                    el("h3", "너의 인절미"),
                                    el(".price", (this.balanceDisplay = el("span.price", "...")), " IJM"),
                                    el("button", "인절미 지갑에 추가", {
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
                                    el("h3", "하드포크 물량 받기"),
                                    el("p", "2월 16일까지 받을 수 있음"),
                                    el(".price", (this.hardforkDisplay = el("span.price", "...")), " IJM"),
                                    el("button", "받기", {
                                        click: () => ArkContract.receiveNew(),
                                    }),
                                ),
                                el(".content",
                                    el("h3", "구매한 물량 받기"),
                                    el("p", "떡크노믹스가 사라졌으므로 10% 추가함"),
                                    el(".price", (this.initialSaleDisplay = el("span.price", "...")), " IJM"),
                                    el("button", "받기", {
                                        click: () => InitialSaleReceiverContract.receiveNew(),
                                    }),
                                ),
                                el(".content",
                                    el("h3", "연말 이벤트 물량 받기"),
                                    el("p", "1월 23일까지 받을 수 있음"),
                                    el(".price", (this.yearendDisplay = el("span.price", "...")), " IJM"),
                                    el("button", "받기", {
                                        click: () => YearendAirdropContract.receiveNew(),
                                    }),
                                ),
                            ),
                            el(".group-issue",
                                el(".issue_area", "참새 뉴스"),
                                el("a.issue", "[속보] 인절미 코인베이스 상장...", {
                                    href: "https://w.namu.la/s/0e4f61a6fc7b16d00ce2db04a7775a601c489c6cfe3cbd24c674619c8ddb32e72fa1f7a2b91ba09b8dedb28d2e0fbad4b6fcb141224e999aa698343dc0ec0315bd0d79b35ddfc7490f5be8a206e3d2dae929b1ed1a629de301cf76d0f0f2fec7",
                                    target: "_blank"
                                }),
                                el("a.issue", `[단독] 심영재 "절미페이" 만든다고 선언하여 충격...`, {
                                    href: "https://w.namu.la/s/518022bb341cb7e5fae54943759c6011298f551c1b77ef108dd888ff08ca4a41286fcef3b9d90d5d81e646b1482b9ce98da14e940e2a4dd956635a6d0b0ab55744666997086e5a081476b097acfd1720ade2bbd903203b1a1cd9993af75759db",
                                    target: "_blank"
                                }),
                                el("a.issue", `[화재] 이론 머스크 "인절미"로 테슬라사고 싶다...`, {
                                    href: "https://w.namu.la/s/c9b951140de72f66425f2f5523cd2a4aa0a796a5c67e4c8363782e249d58f9d4fbbd977b1c6fd8d0fcecf5ee70a146619ee15c502a074c547f931384a97d69e55f6df0a69665e426abb196329c39487ee6007803c94733c87a40c1d0ee24b436",
                                    target: "_blank"
                                }),
                            ),
                            el(".form",
                                el("h3", "사기"),
                                el(".caption", el("a", "클레이스왑", {
                                    href: "https://klayswap.com/",
                                    target: "_blank",
                                }), "을 통해 삼"),
                                el(".input-container",
                                    this.buyInput = el("input", {
                                        placeholder: "인절미 수량 입력",
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
                                    el("button", "인절미 사기", {
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
                                el("h3", "펄기"),
                                el(".caption", el("a", "클레이스왑", {
                                    href: "https://klayswap.com/",
                                    target: "_blank",
                                }), "을 통해 펌"),
                                el(".caption", "트랜잭션 2번 발생"),
                                el(".input-container",
                                    this.sellInput = el("input", {
                                        placeholder: "인절미 수량 입력",
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
                                    el("button", "인절미 펄기", {
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
                                el("h3", "이건 어때?"),
                                el(".content",
                                    el(".suggest",
                                        el("p", "절기고 싶어?"),
                                        el("button", "참새 NFT 사기", {
                                            click: () => { window.open("https://klu.bs/pfp/0x29d05593116C443da54DaBFB4e5322DEA2fff8Cd") }
                                        })
                                    ),
                                    el(".suggest",
                                        el("p", "혹시 개발자니...?"),
                                        el("button", "인절미 컨트랙트", {
                                            click: () => { window.open("https://github.com/tteokmill/injeolmi") }
                                        })
                                    ),
                                    el(".suggest",
                                        el("p", "떡크노믹스...?"),
                                        el("button", "인절미 클래식", {
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
                                el(".caption", "정과 훈훈한 인심의 세계로"),
                                new UserInfo()
                            ),
                            el("a.ad-banner", { href: "https://klayfox.com", target: "_blank" },
                                el("img", {
                                    src: "/images/ad-banner/klayfox.jpeg"
                                })
                            ),
                            el(".community",
                                el("h3", "떡방앗간 커뮤니티"),
                                el("a", "오카방\n(오픈 카카오톡 방)", { href: "https://open.kakao.com/o/g1nYzIHd", target: "_blank" }),
                                el("a", "디스코드", { href: "https://discord.gg/YgdruRMFtJ", target: "_blank" }),
                                el("a", "텔레그램", { href: "https://t.me/ricecakemill3", target: "_blank" }),
                                el("a", "트위터", { href: "https://twitter.com/tteokmill", target: "_blank" }),
                                el("a", "미디엄", { href: "https://medium.com/tteok", target: "_blank" }),
                                el("a", "깃허브", { href: "https://github.com/tteokmill", target: "_blank" }),
                            ),
                            el("iframe.chart", {
                                src: "https://dexata.kr/?tokenA=0x0268dbed3832b87582b1fa508acf5958cbb1cd74&tokenB=",
                                title: "IJM_Chart",
                            }),
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