"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
class Introduce {
    constructor() {
        Layout_1.default.current.title = "소개";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".introduce-view", (0, skynode_1.el)("section", (0, skynode_1.el)("h2", "떡방앗간.닷컴"), (0, skynode_1.el)("p", `한국인의 정과 훈훈한 인심. 따뜻한 코인 커뮤니티 떡방앗간 코인 이야기.\nhttp://tteok.org으로도 접속하실 수 있습니다.\n떡방앗간 회원들은 "참새"로 불리웁니다.`), (0, skynode_1.el)("h3", "인절미"), (0, skynode_1.el)("img.injeolmi", { src: "/images/injeolmi.png", height: "330" }), (0, skynode_1.el)("p", `우리나라에는 새로 이사를 오면 떡을 돌리는 풍습이 있습니다. \n이런 "떡돌리기" 문화를 토크노믹스로 만들어 보았습니다. \n한국인의 정과 훈훈한 인심을 느껴보세요.`), (0, skynode_1.el)("h3", "떡크노믹스"), (0, skynode_1.el)("p", `토큰 전송 시 10% 떼감 -> 9%는 홀더들한테 떡돌림. \n1%는 떡방앗간에 팁으로 제공 (팁은 이벤트, 에드, 기부, 개발자 사리사욕에 쓰임)`), (0, skynode_1.el)("h3", "준비물"), (0, skynode_1.el)("p", `인절미는 클레이튼 최초의 밈 토큰입니다. \n따라서 클레이튼 지갑인 카이카스 지갑이 필요합니다.`), (0, skynode_1.el)("button", "카이카스 지갑 받기", {
            click: () => {
                window.open("https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi");
            },
        }), (0, skynode_1.el)("img", {
            src: "/images/thankyou.gif"
        }))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Introduce;
//# sourceMappingURL=Introduce.js.map