import { DomNode, el } from "@hanul/skynode";
import { SkyRouter, View, ViewParams } from "skyrouter";
import Layout from "./Layout";
import CommonUtil from "../CommonUtil";
import SparrowNFTsContract from "../contracts/SparrowNFTsContract";
import Wallet from "../klaytn/Wallet";
import ViewUtil from "./ViewUtil";
import msg from "msg.js";

export default class Junior implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = msg("IJM_JUNIOR_TITLE");
        Layout.current.content.append(this.container = el(".junior-view",
            el(".gnb",
                el(".inner-gnb",
                    el("a", { click: () => ViewUtil.go("/") },
                        el("img", { src: "/images/injeolmi.png", height: "40px" })
                    ),
                    el("h1", msg("IJM_JUNIOR_TITLE")),
                )
            ),
            el("section",
                el("h2", msg("IJM_FANGAME")),
                el(".pangame-list",
                    el("a", { href: "https://flappy-injeolmi.netlify.app/", target: "_blank" },
                        el(".card",
                            el(".content",
                                el("h3", msg("IJM_FANGAME_TITLE1")),
                                el("img", { src: "/images/junior/flappy.png" }),
                                el(".description", msg("IJM_FANGAME_DESC1"))
                            )
                        )
                    ),
                    el("a", { href: "ijmclassic.itch.io/ultrarisk", target: "_blank" },
                        el(".card",
                            el(".content",
                                el("h3", msg("IJM_FANGAME_TITLE2")),
                                el("img", { src: "/images/junior/ultraRisk.png" }),
                                el(".description", msg("IJM_FANGAME_DESC2"))
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