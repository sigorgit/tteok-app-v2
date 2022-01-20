import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class Sparrows implements View {

    private container: DomNode;
    private list: DomNode;

    constructor() {
        Layout.current.title = "참새 NFT";
        Layout.current.content.append(this.container = el(".sparrows-view",
            el(".gnb",
                el(".inner-gnb",
                    el("a", { click: () => ViewUtil.go("/") },
                        el("img", { src: "/images/injeolmi.png", height: "40px" })
                    ),
                    el("h1", "참새 NFT"),
                )
            ),
            el("header",
                el(".info",
                    el("h3", "NFT 정보"),
                    el("main",
                        el("img", { src: "/images/sparrows.png" }),
                        el(".info",
                            el(".name", "떡방앗간 참새 NFT"),
                            el("p.description", "떡방앗간 참새들의 아이덴티티를 표현하는 NFT입니다. 짹짹!"),
                            el("ul",
                                el("li", el("a", "https://klu.bs/pfp/0x29d05593116C443da54DaBFB4e5322DEA2fff8Cd", { href: "https://klu.bs/pfp/0x29d05593116C443da54DaBFB4e5322DEA2fff8Cd", target: "_blank" })),
                            ),
                        ),
                    ),
                ),
                el(".info",
                    el("h3", "작가 정보"),
                    el("main",
                        el("img", { src: "/images/yonee.jpg" }),
                        el(".info",
                            el(".name", "Yonee (aka 초무새)"),
                            el("p.description", "illustrator/NFT artist based in korea"),
                            el("ul",
                                el("li", el("a", "https://twitter.com/Yonee_hi", { href: "https://twitter.com/Yonee_hi", target: "_blank" })),
                                el("li", el("a", "https://www.instagram.com/ooillust", { href: "https://www.instagram.com/ooillust", target: "_blank" })),
                                el("li", el("a", "https://opensea.io/collection/normaltravel", { href: "https://opensea.io/collection/normaltravel", target: "_blank" })),
                                el("li", el("a", "https://opensea.io/collection/tweetweets", { href: "https://opensea.io/collection/tweetweets", target: "_blank" })),
                            ),
                        ),
                    ),
                ),
            ),
            el("main",
                el("h2", "NFT 목록"),
                el("p", "개발중"),
                this.list = el(".sparrows-list"),
            ),
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