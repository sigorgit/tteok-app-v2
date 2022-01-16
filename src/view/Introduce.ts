import { DomNode, el } from "@hanul/skynode";
import { SkyRouter, View, ViewParams } from "skyrouter";
import Layout from "./Layout";
import CommonUtil from "../CommonUtil";
import SparrowNFTsContract from "../contracts/SparrowNFTsContract";
import Wallet from "../klaytn/Wallet";
import ViewUtil from "./ViewUtil";

export default class Introduce implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "소개";
        Layout.current.content.append(this.container = el(".introduce-view",
            el("section",
                el("h2", "떡방앗간.닷컴"),
                el("p", `한국인의 정과 훈훈한 인심. 따뜻한 코인 커뮤니티 떡방앗간 코인 이야기.\nhttp://tteok.org으로도 접속하실 수 있습니다.\n떡방앗간 회원들은 "참새"로 불리웁니다.`),
                el("h3", "인절미"),
                el("img.injeolmi", { src: "/images/injeolmi.png", height: "330" }),
                el("p", `우리나라에는 새로 이사를 오면 떡을 돌리는 풍습이 있습니다. \n이런 "떡돌리기" 문화를 토크노믹스로 만들어 보았습니다. \n한국인의 정과 훈훈한 인심을 느껴보세요.`),
                el("h3", "떡크노믹스"),
                el("p", `토큰 전송 시 10% 떼감 -> 9%는 홀더들한테 떡돌림. \n1%는 떡방앗간에 팁으로 제공 (팁은 이벤트, 에드, 기부, 개발자 사리사욕에 쓰임)`),
                el("h3", "준비물"),
                el("p", `인절미는 클레이튼 최초의 밈 토큰입니다. \n따라서 클레이튼 지갑인 카이카스 지갑이 필요합니다.`),
                el("button", "카이카스 지갑 받기", {
                    click: () => {
                        window.open("https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi")
                    },
                }),
                el("img", {
                    src: "/images/thankyou.gif"
                })
            )
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}