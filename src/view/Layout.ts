import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";

export default class Layout implements View {

    public static current: Layout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;
        BodyNode.append(
            (this.container = el(".layout",
                el("main", (this.content = el(".content"))),
                el("footer", el("", "ⓒ 영재와 떡방앗간 참새들"))
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
