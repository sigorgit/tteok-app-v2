import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import msg from "msg.js";
import BrowserInfo from "../BrowserInfo";
import ViewUtil from "./ViewUtil";

export default class Layout implements View {

    public static current: Layout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;

        let select: DomNode<HTMLSelectElement>;
        BodyNode.append(
            (this.container = el(".layout",
                el("main", (this.content = el(".content"))),
                el("footer",
                    el("", msg("COPYRIGHT_TITLE")),
                    el(".aside-container",
                        el("a", msg("SPARROW_OF_HONOR_TITLE"), { click: () => { ViewUtil.go("sparrow-honor") } }),
                        select = el("select.language-select",
                            el("option", "한국어", { value: "ko" }),
                            el("option", "English", { value: "en" }),
                            el("option", "日本語", { value: "jp" }),
                            el("option", "繁体字", { value: "zh-CN" }),
                            el("option", "簡體字", { value: "zh-TW" }),
                            el("option", "Tiếng Việt", { value: "vn" }),
                            el("option", "ภาษาไทย", { value: "TH" }),
                            el("option", "짹짹어", { value: "짹짹어" }),
                            {
                                change: () => {
                                    BrowserInfo.changeLanguage(select.domElement.value);
                                },
                            },
                        ),
                    )
                )
            ))
        );

        select.domElement.value = BrowserInfo.language.substring(0, 2);
    }

    public set title(title: string) {
        document.title = `${title} | ${msg("TITLE")} `;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
