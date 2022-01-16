"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const Alert_1 = __importDefault(require("../component/dialogue/Alert"));
const UserInfo_1 = __importDefault(require("../component/UserInfo"));
const ArkContract_1 = __importDefault(require("../contracts/ArkContract"));
const InitialSaleContract_1 = __importDefault(require("../contracts/InitialSaleContract"));
const InitialSaleReceiverContract_1 = __importDefault(require("../contracts/InitialSaleReceiverContract"));
const InjeolmiContract_1 = __importDefault(require("../contracts/InjeolmiContract"));
const YearendAirdropContract_1 = __importDefault(require("../contracts/YearendAirdropContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Home {
    constructor() {
        this.ijmPrice = ethers_1.BigNumber.from("144374553246136709");
        Layout_1.default.current.title = "홈";
        Layout_1.default.current.content.append((this.container = (0, skynode_1.el)(".home-view", (0, skynode_1.el)("section", (0, skynode_1.el)(".top-banner", (0, skynode_1.el)(".banner-image0"), (0, skynode_1.el)(".banner-image1", (0, skynode_1.el)("img", { src: "/images/injeolmi.png" }), (0, skynode_1.el)("h2", "한국인의 정과 훈훈한 인심"), (0, skynode_1.el)("h1", "떡방앗간.닷컴")), (0, skynode_1.el)("a.banner-image2", {
            href: "https://gall.dcinside.com/mini/board/view/?id=defidev&no=47&s_type=search_subject_memo&s_keyword=%EC%9D%B8%EC%A0%88%EB%AF%B8&page=1",
            target: "_blank"
        }))), (0, skynode_1.el)(".gnb", (0, skynode_1.el)(".item-container", (0, skynode_1.el)("a.item", "소개", { click: () => { ViewUtil_1.default.go("introduce"); } }), (0, skynode_1.el)("a.item", "시고르", { click: () => { new Alert_1.default("준비중", "아직 페이지 준비중이야"); } }), (0, skynode_1.el)("a.item", "참새 NFT", { click: () => { new Alert_1.default("준비중", "이것도 아직 페이지 준비중이야"); } }), (0, skynode_1.el)("a.item", "밈 NFT", { click: () => { ViewUtil_1.default.go("meme-nft"); } }), (0, skynode_1.el)("a.item", "쥬니어", { click: () => { ViewUtil_1.default.go("junior"); } }), (0, skynode_1.el)("a.item", "클래식", { click: () => { ViewUtil_1.default.go("classic"); } }))), (0, skynode_1.el)("section", (0, skynode_1.el)(".content-container", (0, skynode_1.el)(".left-container", (0, skynode_1.el)(".price-container", (0, skynode_1.el)(".content", (0, skynode_1.el)("h3", "인절미 가격"), (0, skynode_1.el)(".price", (this.priceDisplay = (0, skynode_1.el)("span.price", ethers_1.utils.formatEther(this.ijmPrice))), " KLAY")), (0, skynode_1.el)(".content", (0, skynode_1.el)("h3", "너의 인절미"), (0, skynode_1.el)(".price", (this.balanceDisplay = (0, skynode_1.el)("span.price", "...")), " IJM"), (0, skynode_1.el)("button", "인절미 지갑에 추가", {
            click: () => Wallet_1.default.addToken(InjeolmiContract_1.default.address, "IJM", 18, "https://tteok.org/images/injeolmi.png"),
        }))), (0, skynode_1.el)(".price-container", (0, skynode_1.el)(".content", (0, skynode_1.el)("h3", "하드포크 물량 받기"), (0, skynode_1.el)(".price", (this.hardforkDisplay = (0, skynode_1.el)("span.price", "...")), " IJM"), (0, skynode_1.el)("button", "받기", {
            click: () => ArkContract_1.default.receiveNew(),
        })), (0, skynode_1.el)(".content", (0, skynode_1.el)("h3", "구매한 물량 받기"), (0, skynode_1.el)("p", "떡크노믹스가 사라졌으므로 10% 추가함"), (0, skynode_1.el)(".price", (this.initialSaleDisplay = (0, skynode_1.el)("span.price", "...")), " IJM"), (0, skynode_1.el)("button", "받기", {
            click: () => InitialSaleReceiverContract_1.default.receiveNew(),
        })), (0, skynode_1.el)(".content", (0, skynode_1.el)("h3", "연말 이벤트 물량 받기"), (0, skynode_1.el)(".price", (this.yearendDisplay = (0, skynode_1.el)("span.price", "...")), " IJM"), (0, skynode_1.el)("button", "받기", {
            click: () => YearendAirdropContract_1.default.receiveNew(),
        }))), (0, skynode_1.el)(".group-issue", (0, skynode_1.el)(".issue_area", "참새 뉴스"), (0, skynode_1.el)("a.issue", "[속보] 인절미 코인베이스 상장...", {
            href: "https://w.namu.la/s/0e4f61a6fc7b16d00ce2db04a7775a601c489c6cfe3cbd24c674619c8ddb32e72fa1f7a2b91ba09b8dedb28d2e0fbad4b6fcb141224e999aa698343dc0ec0315bd0d79b35ddfc7490f5be8a206e3d2dae929b1ed1a629de301cf76d0f0f2fec7",
            target: "_blank"
        }), (0, skynode_1.el)("a.issue", `[단독] 심영재 "절미페이" 만든다고 선언하여 충격...`, {
            href: "https://w.namu.la/s/518022bb341cb7e5fae54943759c6011298f551c1b77ef108dd888ff08ca4a41286fcef3b9d90d5d81e646b1482b9ce98da14e940e2a4dd956635a6d0b0ab55744666997086e5a081476b097acfd1720ade2bbd903203b1a1cd9993af75759db",
            target: "_blank"
        }), (0, skynode_1.el)("a.issue", `[화재] 이론 머스크 "인절미"로 테슬라사고 싶다...`, {
            href: "https://w.namu.la/s/c9b951140de72f66425f2f5523cd2a4aa0a796a5c67e4c8363782e249d58f9d4fbbd977b1c6fd8d0fcecf5ee70a146619ee15c502a074c547f931384a97d69e55f6df0a69665e426abb196329c39487ee6007803c94733c87a40c1d0ee24b436",
            target: "_blank"
        })), (0, skynode_1.el)(".form", (0, skynode_1.el)("h3", "클레이로 인절미 사기"), (0, skynode_1.el)(".caption", (0, skynode_1.el)("a", "클레이스왑", {
            href: "https://klayswap.com/",
            target: "_blank",
        }), "을 통해 삼"), (0, skynode_1.el)(".input-container", this.buyInput = (0, skynode_1.el)("input", {
            placeholder: "클레이 수량 입력",
            keyup: () => setTimeout(() => {
                if (this.buyInput.domElement.value.trim() === "") {
                    this.buyResult.empty();
                }
                else {
                    const value = ethers_1.utils.parseEther(this.buyInput.domElement.value);
                    this.buyResult.empty().appendText(`대략 ${ethers_1.utils.formatEther(value.mul(ethers_1.utils.parseEther("1")).div(this.ijmPrice))} IJM`);
                }
            }),
        }), (0, skynode_1.el)("button", "인절미 사기", {
            click: async () => {
                await InitialSaleContract_1.default.buy(ethers_1.utils.parseEther(this.buyInput.domElement.value));
                ViewUtil_1.default.waitTransactionAndRefresh();
            },
        })), this.buyResult = (0, skynode_1.el)(".result")), (0, skynode_1.el)(".form", (0, skynode_1.el)("h3", "클레이로 인절기 펄기"), (0, skynode_1.el)(".caption", (0, skynode_1.el)("a", "클레이스왑", {
            href: "https://klayswap.com/",
            target: "_blank",
        }), "을 통해 펌"), (0, skynode_1.el)(".input-container", this.buyInput = (0, skynode_1.el)("input", {
            placeholder: "인절미 수량 입력",
            keyup: () => setTimeout(() => {
                const value = ethers_1.utils.parseEther(this.buyInput.domElement.value);
                this.buyResult.empty().appendText(`대략 ${ethers_1.utils.formatEther(value.mul(ethers_1.utils.parseEther("1")).div(this.ijmPrice).mul(9).div(10))} IJM`);
            }),
        }), this.buyResult = (0, skynode_1.el)(".result"), (0, skynode_1.el)("button", "인절미 펄기", {
            click: async () => {
            },
        }))), (0, skynode_1.el)(".banner", (0, skynode_1.el)("img", {
            src: "/images/thankyou.gif"
        }))), (0, skynode_1.el)(".right-container", (0, skynode_1.el)(".connect-wallet", (0, skynode_1.el)(".caption", "정과 훈훈한 인심의 세계로"), new UserInfo_1.default()), (0, skynode_1.el)("a.ad-banner", { href: "https://klayfox.com", target: "_blank" }, (0, skynode_1.el)("img", {
            src: "/images/ad-banner/klayfox.jpeg"
        })), (0, skynode_1.el)(".community", (0, skynode_1.el)("h3", "떡방앗간 커뮤니티"), (0, skynode_1.el)("a", "오카방\n(오픈 카카오톡 방)", { href: "https://open.kakao.com/o/g1nYzIHd", target: "_blank" }), (0, skynode_1.el)("a", "디스코드", { href: "https://discord.gg/YgdruRMFtJ", target: "_blank" }), (0, skynode_1.el)("a", "텔레그램", { href: "https://t.me/ricecakemill3", target: "_blank" }), (0, skynode_1.el)("a", "트위터", { href: "https://twitter.com/tteokmill", target: "_blank" }), (0, skynode_1.el)("a", "미디엄", { href: "https://medium.com/tteok", target: "_blank" }), (0, skynode_1.el)("a", "깃허브", { href: "https://github.com/tteokmill", target: "_blank" }))))))));
        this.refresh();
        this.interval = setInterval(() => this.refresh(), 2000);
    }
    async refresh() {
        this.load();
    }
    async load() {
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            const balance = await InjeolmiContract_1.default.balanceOf(address);
            this.balanceDisplay.empty().appendText(ethers_1.utils.formatEther(balance));
            if (await ArkContract_1.default.received(address) === true) {
                this.hardforkDisplay.empty().appendText("0");
            }
            else {
                const records = await ArkContract_1.default.records(address);
                this.hardforkDisplay.empty().appendText(ethers_1.utils.formatEther(records.mul(10000000000)));
            }
            if (await InitialSaleReceiverContract_1.default.received(address) === true) {
                this.initialSaleDisplay.empty().appendText("0");
            }
            else {
                const bought = await InitialSaleContract_1.default.bought(address);
                this.initialSaleDisplay.empty().appendText(ethers_1.utils.formatEther(bought.mul(11).div(10)));
            }
            const toReceive = await YearendAirdropContract_1.default.toReceive(address);
            if (toReceive === true) {
                this.yearendDisplay.empty().appendText(ethers_1.utils.formatEther("100"));
            }
            else {
                this.yearendDisplay.empty().appendText("0");
            }
        }
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        if (this.container.deleted !== true) {
            this.container.delete();
        }
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map