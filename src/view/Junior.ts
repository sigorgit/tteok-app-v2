import { DomNode, el } from "@hanul/skynode";
import { SkyRouter, View, ViewParams } from "skyrouter";
import Layout from "./Layout";
import CommonUtil from "../CommonUtil";
import SparrowNFTsContract from "../contracts/SparrowNFTsContract";
import Wallet from "../klaytn/Wallet";
import ViewUtil from "./ViewUtil";

export default class Junior implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "쥬니어";
        Layout.current.content.append(this.container = el(".junior-view",
            el(".gnb",
                el(".inner-gnb",
                    el("a", { click: () => ViewUtil.go("/") },
                        el("img", { src: "/images/injeolmi.png", height: "40px" })
                    ),
                    el("h1", "인절미 쥬니어"),
                )
            ),
            el("section",
                el("h2", "인절미 팬게임"),
                el(".pangame-list",
                    el("a", { href: "https://flappy-injeolmi.netlify.app/", target: "_blank" },
                        el(".card",
                            el(".content",
                                el("h3", "플래피 인절미"),
                                el("img", { src: "/images/junior/flappy.png" }),
                                el(".description", "'학성참새'가 만든 플래피 인절미")
                            )
                        )
                    ),
                    el("a", { href: "ijmclassic.itch.io/ultrarisk", target: "_blank" },
                        el(".card",
                            el(".content",
                                el("h3", "울트라리스크 피하기V1"),
                                el("img", { src: "/images/junior/ultraRisk.png" }),
                                el(".description", "'떡동성 참새'가 만든 하이리스크 울트라리스크 노리턴코인  IJC미니게임")
                            )
                        )
                    )
                ),

            )
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}