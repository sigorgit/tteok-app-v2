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
                el("h3", "준비물"),
                el("p", "인절미는 클레이튼 최초의 밈 토큰입니다. \n따라서 클레이튼 지갑인 카이카스 지갑이 필요합니다."),
                el("button", "카이카스 지갑 받기", {
                    click: () => {
                        window.open("https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi")
                    },
                }),
                el("h3", "로드맵"),
                el("h4", "2021년 4Q"),
                el("p", "물레방아 하드포크 준비 (완료) \n 떡방앗간 참새 NFT 출시 (완료)"),
                el("h4", "2022년 1Q"),
                el("p", "물레방아 하드포크 실행 (완료) \n 폴리곤 진출 (팥절미 — Polygon Injeolmi) \n BSC 진출 (창펑자오 인절미 — CZ Injeolmi) \n 이더리움 진출 (비탈릭 인절미 — Vitalik Injeolmi) \n 탈중앙화 거래소 (DEX) 상장 추진 \n 중앙 거래소 상장 추진"),
                el("h4", "2021년 2Q"),
                el("p", "<누워서 떡먹기>게임 출시 \n 농촌 메타버스 <시고르(Sigor)> 출시"),
                el("h4", "2021년 3Q"),
                el("p", "나 휴가"),
                el("h4", "2021년 4Q"),
                el("p", "<시고르 3D> 출시"),
                el("h2", "이제 절겨~"),
            )
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}