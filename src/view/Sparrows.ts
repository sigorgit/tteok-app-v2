import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class Sparrows implements View {

    private container: DomNode;
    private list : DomNode;

    constructor() {
        Layout.current.title = "참새 NFT";
        Layout.current.content.append(this.container = el(".junior-view",
            el(".gnb",
                el(".inner-gnb",
                    el("a", { click: () => ViewUtil.go("/") },
                        el("img", { src: "/images/injeolmi.png", height: "40px" })
                    ),
                    el("h1", "참새 NFT"),
                )
            ),
            el("section",
                el("h2", "참새 NFT"),
                this.list = el(".sparrows-list"),
            ),
            el("p", "곧 출시함"),
        ));
        this.loadSparrows();
    }

    private async loadSparrows() {

    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}