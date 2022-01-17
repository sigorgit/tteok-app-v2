import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import ViewUtil from "./ViewUtil";

export default class Layout implements View {

    public static current: Layout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;
        BodyNode.append(
            (this.container = el(".layout",
                el("main", (this.content = el(".content"))),
                el("footer",
                    el("", "ⓒ 떡방앗간 참새들"),
                    el(".aside-container",
                        el("a", "명예의 참새", { click: () => { ViewUtil.go("sparrow-honor") }})
                    )
                )
            ))
        );
    }

    public set title(title: string) {
        document.title = `${title} | 떡방앗간 닷컴 `;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
