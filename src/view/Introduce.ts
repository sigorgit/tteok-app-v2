import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Introduce implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = msg("INTRODUCTION_MENU");
        Layout.current.content.append(this.container = el(".introduce-view",
            el("section",
                el("h2", msg("TITLE")),
                el("p", msg("INTRODUCTION_DESC1")),
                el("h3", msg("INJEOLMI")),
                el("img.injeolmi", { src: "/images/injeolmi.png", height: "330" }),
                el("h3", msg("PREPARE_TITLE")),
                el("p", msg("PREPARE_DESC")),
                el("button", msg("PREPARE_BUTTON"), {
                    click: () => {
                        window.open("https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi")
                    },
                }),
                el("h3", msg("ROAD_MAP_TITLE")),
                el("h4", msg("ROAD_MAP_TIME2")),
                el("p", msg("ROAD_MAP_DESC2")),
                el("h4", msg("ROAD_MAP_TIME3")),
                el("p", msg("ROAD_MAP_DESC3")),
                el("h4", msg("ROAD_MAP_TIME4")),
                el("p", msg("ROAD_MAP_DESC4")),
                el("h4", msg("ROAD_MAP_TIME5")),
                el("p", msg("ROAD_MAP_DESC5")),
                el("h2", msg("ROAD_MAP_DESC6")),
            )
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}