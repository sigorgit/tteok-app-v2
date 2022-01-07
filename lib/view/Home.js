"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const Alert_1 = __importDefault(require("../component/dialogue/Alert"));
const ArkContract_1 = __importDefault(require("../contracts/ArkContract"));
const InitialSaleContract_1 = __importDefault(require("../contracts/InitialSaleContract"));
const YearendAirdropContract_1 = __importDefault(require("../contracts/YearendAirdropContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Home {
    constructor() {
        this.ijmPrice = ethers_1.BigNumber.from("144374553246136709");
        Layout_1.default.current.title = "홈";
        Layout_1.default.current.content.append((this.container = (0, skynode_1.el)(".home-view", (0, skynode_1.el)("section", (0, skynode_1.el)(".banner-image", (0, skynode_1.el)("img", { src: "/images/injeolmi.png" }), (0, skynode_1.el)("h2", "한국인의 정과 훈훈한 인심"), (0, skynode_1.el)("h1", "떡방앗간.닷컴"))), (0, skynode_1.el)(".gnb", (0, skynode_1.el)(".item-container", (0, skynode_1.el)("a.item", "소개", { click: () => { ViewUtil_1.default.go("introduce"); } }), (0, skynode_1.el)("a.item", "시고르", { click: () => { new Alert_1.default("준비중", "아직 페이지 준비중이야"); } }), (0, skynode_1.el)("a.item", "참새 NFT", { click: () => { new Alert_1.default("준비중", "이것도 아직 페이지 준비중이야"); } }), (0, skynode_1.el)("a.item", "밈 NFT", { click: () => { new Alert_1.default("준비중", "이것조차 아직 페이지 준비중이야"); } }), (0, skynode_1.el)("a.item", "쥬니어", { click: () => { ViewUtil_1.default.go("junior"); } }), (0, skynode_1.el)("a.item", "클래식", { click: () => { ViewUtil_1.default.go("classic"); } }))), (0, skynode_1.el)("section", (0, skynode_1.el)(".content-container", (0, skynode_1.el)(".left-container", (0, skynode_1.el)(".price-container", (0, skynode_1.el)(".content", (0, skynode_1.el)("h3", "인절미 가격"), (0, skynode_1.el)(".price", (this.priceDisplay = (0, skynode_1.el)("span.price", ethers_1.utils.formatEther(this.ijmPrice))), " KLAY")), (0, skynode_1.el)(".content", (0, skynode_1.el)("h3", "너의 인절미"), (0, skynode_1.el)(".price", (this.balanceDisplay = (0, skynode_1.el)("span.price", "...")), " IJM"))), (0, skynode_1.el)(".price-container", (0, skynode_1.el)(".content", (0, skynode_1.el)("h3", "떡크노믹스 미반영 물량"), (0, skynode_1.el)(".price", (this.initialSaleDisplay = (0, skynode_1.el)("span.price", "...")), " IJM")), (0, skynode_1.el)(".content", (0, skynode_1.el)("h3", "구매 가능 물량"), (0, skynode_1.el)(".price", (this.buyableDisplay = (0, skynode_1.el)("span.price", "...")), " IJM"))), (0, skynode_1.el)(".form", (0, skynode_1.el)("h3", "클레이로 인절미 사기"), (0, skynode_1.el)(".caption", "현재 하드포크 기간이어서 떡크노믹스 반영되지 않고 액수 그대로 구매 가능함"), (0, skynode_1.el)(".caption", "떡크노믹스 미반영 물량에서 사는거고 지갑당 최대 5만개(7218.72766230683545 KLAY)까지 구매 가능"), (0, skynode_1.el)(".input-container", this.buyInput = (0, skynode_1.el)("input", {
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
        })), this.buyResult = (0, skynode_1.el)(".result"))), (0, skynode_1.el)(".right-container", (0, skynode_1.el)(".connect-wallet", (0, skynode_1.el)(".caption", "정과 훈훈한 인심의 세계로"), (0, skynode_1.el)("button", "지갑 연결", {
            click: () => Wallet_1.default.connect(),
        })), (0, skynode_1.el)(".banner", (0, skynode_1.el)("img", {
            src: "/images/thankyou.gif"
        })), (0, skynode_1.el)(".community", (0, skynode_1.el)("h3", "떡방앗간 커뮤니티"), (0, skynode_1.el)("a", "오카방\n(오픈 카카오톡 방)", { href: "https://open.kakao.com/o/g1nYzIHd", target: "_blank" }), (0, skynode_1.el)("a", "디스코드", { href: "https://discord.gg/YgdruRMFtJ", target: "_blank" }), (0, skynode_1.el)("a", "트위터", { href: "https://twitter.com/tteokmill", target: "_blank" }), (0, skynode_1.el)("a", "미디엄", { href: "https://medium.com/tteok", target: "_blank" }), (0, skynode_1.el)("a", "깃허브", { href: "https://github.com/tteokmill", target: "_blank" }))))))));
        this.load();
    }
    async load() {
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            let balance = ethers_1.BigNumber.from(0);
            const records = await ArkContract_1.default.records(address);
            const bought = await InitialSaleContract_1.default.bought(address);
            balance = balance.add(records.mul("10000000000")).add(bought);
            const toReceive = await YearendAirdropContract_1.default.toReceive(address);
            if (toReceive === true) {
                balance = balance.add(ethers_1.utils.parseEther("100"));
            }
            this.balanceDisplay.empty().appendText(ethers_1.utils.formatEther(balance));
            this.buyableDisplay.empty().appendText(ethers_1.utils.formatEther(ethers_1.BigNumber.from("50000000000000000000000").sub(bought)));
        }
        let buyable = ethers_1.BigNumber.from("100000000000000000000000000");
        buyable = buyable.sub("10000000000000000000000000");
        buyable = buyable.sub("72885984369501670000000000");
        buyable = buyable.sub("731800000000000000000000");
        buyable = buyable.add("4466106537452830000000000");
        buyable = buyable.div(2).sub(await InitialSaleContract_1.default.total());
        this.initialSaleDisplay.empty().appendText(ethers_1.utils.formatEther(buyable));
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