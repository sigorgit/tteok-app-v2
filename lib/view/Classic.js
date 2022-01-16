"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const InjeolmiClassicContract_1 = __importDefault(require("../contracts/InjeolmiClassicContract"));
const InjeolmiPoolContract_1 = __importDefault(require("../contracts/InjeolmiPoolContract"));
const InjeolmiPriceContract_1 = __importDefault(require("../contracts/InjeolmiPriceContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
class Classic {
    constructor() {
        this.ijmPrice = ethers_1.BigNumber.from(0);
        this.container = (0, skynode_1.el)(".classic-view", (0, skynode_1.el)("section", (0, skynode_1.el)("h1", "떡방앗간.닷컴\n클래식"), (0, skynode_1.el)("p", `한국인의 정과 훈훈한 인심. 따뜻한 코인 커뮤니티 떡방앗간 코인 이야기.\nhttp://tteok.org으로도 접속하실 수 있습니다.\n떡방앗간 회원들은 "참새"로 불리웁니다.`), (0, skynode_1.el)("h3", "클래식 인절미"), (0, skynode_1.el)("img.injeolmi", { src: "/images/injeolmi-classic.png", height: "330" }), (0, skynode_1.el)("h3", "인절미 클래식 떡크노믹스"), (0, skynode_1.el)("p", "토큰 전송 시 10% 떼감 -> 9%는 홀더들한테 떡돌림, 1%는 떡방앗간에 팁으로 제공 (팁은 이벤트, 에드, 기부, 개발자 사리사욕에 쓰임)"), (0, skynode_1.el)("p", "인절미 클래식은 클레이튼 밈 토큰입니다. 따라서 클레이튼 지갑인 카이카스 지갑이 필요합니다."), (0, skynode_1.el)("a", "카이카스 지갑 다운로드", {
            href: "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi",
            target: "_blank",
        }), (0, skynode_1.el)(".links", (0, skynode_1.el)("a", "인절미 카이카스 지갑에 추가(클립은 영원히 지원 계획이 없습니다.)", {
            href: "#",
            click: () => Wallet_1.default.addToken(InjeolmiClassicContract_1.default.address, "IJC", 8, "https://tteok.org/images/injeolmi-classic.png"),
        }), "\n", (0, skynode_1.el)("a", "스마트 콘트랙트 주소: 0x9CFc059F64D664F92f3d0329844B8ccca4E5215B", {
            href: "https://scope.klaytn.com/token/0x9CFc059F64D664F92f3d0329844B8ccca4E5215B",
            target: "_blank",
        }), "\n", (0, skynode_1.el)("a", "소스 코드", {
            href: "https://github.com/tteokmill/injeolmi",
            target: "_blank",
        }), "\n", (0, skynode_1.el)("a", "인절미 차트보기", {
            href: "https://dexata.kr/?tokenA=0x9cfc059f64d664f92f3d0329844b8ccca4e5215b&tokenB=0x0000000000000000000000000000000000000000",
            target: "_blank",
        })), (0, skynode_1.el)("p.warning", "절대 본인의 인절미 클래식을 본인의 지갑에 전송하지 마세요. 인절미 클래식을 모두 잃어버릴 수 있습니다!"), (0, skynode_1.el)(".card", (0, skynode_1.el)("h5", "인절미 클래식 가격"), (0, skynode_1.el)("h6", (this.priceDisplay = (0, skynode_1.el)("span.price", "...")), " KLAY\n")), (0, skynode_1.el)("h3", "클레이로 인절미 클래식 사기"), (0, skynode_1.el)("p", "인절미 클래식을 살때도 떡크노믹스 때문에 10%를 적게 받습니다."), (0, skynode_1.el)(".form", this.buyInput = (0, skynode_1.el)("input", {
            placeholder: "KLAY 수량",
            keyup: () => setTimeout(() => {
                const value = ethers_1.utils.parseEther(this.buyInput.domElement.value);
                this.buyResult.empty().appendText(`대략 ${ethers_1.utils.formatEther(value.mul(ethers_1.utils.parseEther("1")).div(this.ijmPrice).mul(9).div(10))} IJM`);
            }),
        }), this.buyResult = (0, skynode_1.el)(".result"), (0, skynode_1.el)("button", "사기", {
            click: async () => {
                await InjeolmiPoolContract_1.default.swapToIJM(ethers_1.utils.parseEther(this.buyInput.domElement.value));
            },
        })), (0, skynode_1.el)("h3", "인절미 클래식 클레이로 팔기"), (0, skynode_1.el)("p", "인절미 클래식을 펄때도 떡크노믹스 때문에 10%를 적게 받습니다."), (0, skynode_1.el)(".form", this.sellInput = (0, skynode_1.el)("input", {
            placeholder: "IMJ 수량",
            keyup: () => setTimeout(() => {
                const value = ethers_1.utils.parseEther(this.sellInput.domElement.value);
                this.sellResult.empty().appendText(`대략 ${ethers_1.utils.formatEther(value.mul(this.ijmPrice).div(ethers_1.utils.parseEther("1")).mul(9).div(10))} KLAY`);
            }),
        }), this.sellResult = (0, skynode_1.el)(".result"), (0, skynode_1.el)("button", "펄기", {
            click: async () => {
                await InjeolmiPoolContract_1.default.swapToKlay(ethers_1.utils.parseUnits(this.sellInput.domElement.value, 8));
            },
        })), (0, skynode_1.el)("footer", (0, skynode_1.el)("a", "트위터", {
            href: "https://twitter.com/tteokclassic",
            target: "_blank",
        }), "\n", (0, skynode_1.el)("a", "오카방 (오픈 카카오톡 방)", {
            href: "https://open.kakao.com/o/gc5NMySd",
            target: "_blank",
        }), "\n", (0, skynode_1.el)("img", { src: "/images/thankyou.gif", height: "107.5" })))).appendTo(skynode_1.BodyNode);
        this.refresh();
        this.interval = setInterval(() => this.refresh(), 2000);
    }
    async refresh() {
        this.ijmPrice = await InjeolmiPriceContract_1.default.price();
        if (this.container.deleted !== true) {
            this.priceDisplay.empty().appendText(ethers_1.utils.formatEther(this.ijmPrice));
        }
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Classic;
//# sourceMappingURL=Classic.js.map