import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class SparrowHonor implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "명예의 참새";
        Layout.current.content.append(this.container = el(".sparrow-honor-view",
            el(".gnb",
                el(".inner-gnb",
                    el("a", { click: () => ViewUtil.go("/") },
                        el("img", { src: "/images/injeolmi.png", height: "40px" })
                    ),
                    el("h1", "명예의 참새"),
                )
            ),
            el("h2", "명예로운 참새들"),
            el("p", "나 때는 말이야...\n 인절미를 위해서 힘써준 명예로운 참새들이 있었어..."),
            el("h3", "왕 참새"),
            el(".sparrow-container",
                el(".card",
                    el("img", { src: "https://storage.googleapis.com/tteokmill/sparrows/6eac2877-52c0-4ede-92b6-d0ac3b2ab2cf.png" }),
                    el(".title", "똥영재#0"),
                    el("p", "인절미의 아버지")
                ),
                el(".card",
                    el("img", { src: "https://storage.googleapis.com/tteokmill/sparrows/ff444ad2-6e20-4cec-a889-af86e0c070b4.png" }),
                    el(".title", "물레방아#4101"),
                    el("p", "참새들의 형아")
                ),
                el(".card",
                    el("img", { src: "https://storage.googleapis.com/tteokmill/sparrows/564de77e-071d-40ad-bfbe-3f376450d19f.png" }),
                    el(".title", "초무새#6130"),
                    el("p", "참새들의 어머니")
                )
            ),
            el("h3", "청년 참새"),
            el(".sparrow-container",
                el(".card",
                    el("img", { src: "https://storage.googleapis.com/tteokmill/sparrows/d18ba326-2718-4d20-8824-2de518d812ed.png" }),
                    el(".title", "고래절미#1459"),
                    el("p", "나..고래절미는 인절미에 진심이다!")
                ),
                el(".card",
                    el("img", { src: "https://storage.googleapis.com/tteokmill/sparrows/bab3cefd-e8b0-490e-8aab-4a0e63a4c6ea.png" }),
                    el(".title", "똥상우#5877"),
                    el("p", "아마 참새들의 친구")
                ),
                el(".card",
                    el("img", { src: "https://storage.googleapis.com/tteokmill/sparrows/a25e6803-77f7-4124-82d7-32d3b888caa3.png" }),
                    el(".title", "은퇴한 인절미 시세 알림 봇#6625"),
                    el("p", "왕년엔 잘나갔던 알림봇")
                ),
                el(".card",
                    el("img", { src: "https://storage.googleapis.com/tteokmill/sparrows/a286081e-642d-40b3-97de-c2c9c8394d45.png" }),
                    el(".title", "이보세요 나야#169"),
                    el("p", "강퇴를 많이 해서 미안해")
                ),
                el(".card",
                    el("img", { src: "https://storage.googleapis.com/tteokmill/sparrows/ef3c078a-8d68-47d6-b29a-71372f7263a7.png" }),
                    el(".title", "JUMO#0303"),
                    el("p", "뒤에서 포스터 만드는 중")
                ),
                el(".card",
                    el("img", { src: "https://storage.googleapis.com/tteokmill/sparrows/57b8157e-a752-41ed-8673-29ac363b4261.png" }),
                    el(".title", "태구#7985"),
                    el("p", "계속 절며드는중")
                ),
                el(".card",
                    el("img", { src: "https://storage.googleapis.com/tteokmill/sparrows/89eba3d0-f645-4fff-8b4e-ad1c4fce6f33.png" }),
                    el(".title", "ultrason#3060"),
                    el("p", "니들 뒤엔 내가 있어")
                ),
                el(".card",
                    el("img", { src: "https://storage.googleapis.com/tteokmill/sparrows/64b3a491-fb46-417b-917d-8700211d59c4.png" }),
                    el(".title", "Beber Ever#1644"),
                    el("p", "으르릉컹컹 컹컹컹컹")
                ),
                el(".card",
                    el("img", { src: "https://storage.googleapis.com/tteokmill/sparrows/f73d355f-f164-43b2-a6b2-f32676a8f406.png" }),
                    el(".title", "Medo#1282"),
                    el("p", "오늘 정신이 쏙 빠진다")
                ),
                el(".card",
                    el("img", { src: "https://storage.googleapis.com/tteokmill/sparrows/8ca7c7c9-b92b-4377-8eea-5870ab27ebea.png" }),
                    el(".title", "이학성#77"),
                    el("p", "나는 커서 영재가 될거야!")
                ),
                el(".card",
                    el("img", { src: "https://storage.googleapis.com/tteokmill/sparrows/ba2dbdc3-12ff-4eda-9726-34a1abe7a4b7.png" }),
                    el(".title", "영재사생팬#5653"),
                    el("p", "영재야 태어나줘서 고맙다")
                ),
                el(".card",
                    el("img", { src: "https://storage.googleapis.com/tteokmill/sparrows/b73b07ad-c43c-4f5e-ace9-fc01166c86fb.png" }),
                    el(".title", "초코#6612"),
                    el("p", "계약직 랭킹1위")
                ),
                el(".card",
                    el("img", { src: "https://storage.googleapis.com/tteokmill/sparrows/a342b011-d332-4b6e-8efa-29ce61f9b648.png" }),
                    el(".title", "전설의 프리젠테이터#412"),
                    el("p", "부끄러...")
                ),
                el(".card",
                    el("img", { src: "https://storage.googleapis.com/tteokmill/sparrows/749698ae-0386-45d4-bc9a-45828263f35e.png" }),
                    el(".title", "다람이와 메타버스#3030"),
                    el("p", "떡재 사랑해")
                )
            ),
            el("h3", "아기 참새"),
            el(".sparrow-container",
                el(".card",
                    el("img", { src: "https://storage.googleapis.com/tteokmill/sparrows/ae07903c-de6d-4188-abe5-dc45245ce5ef.png" }),
                    el(".title", "인절머리하고는#7243"),
                    el("p", "")
                ),
                el(".card",
                    el("img", { src: "https://storage.googleapis.com/tteokmill/sparrows/c81aeca3-7a8f-4c56-ae1c-4bf43cb0fe92.png" }),
                    el(".title", "mangoo#5169"),
                    el("p", "지금은 할망시대!")
                )
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}