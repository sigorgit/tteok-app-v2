import { DomNode, el } from "@hanul/skynode";
import { SkyRouter, View, ViewParams } from "skyrouter";
import superagent from "superagent";
import SparrowPreview from "../component/SparrowPreview";
import InjeolmiContract from "../contracts/InjeolmiContract";
import ItemStoreContract from "../contracts/ItemStoreContract";
import SparrowsContract from "../contracts/SparrowsContract";
import SparrowsMentorContract from "../contracts/SparrowsMentorContract";
import TicketContract from "../contracts/TicketContract";
import Wallet from "../klaytn/Wallet";
import KlubsLoader from "../KlubsLoader";
import parts from "../parts.json";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class SparrowCustom implements View {

    private container: DomNode;

    constructor(params: ViewParams) {
        Layout.current.title = "참새 커스터마이징";
        Layout.current.content.append(this.container = el(".sparrow-custom-view",
            el(".gnb",
                el(".inner-gnb",
                    el("a", { click: () => ViewUtil.go("/") },
                        el("img", { src: "/images/injeolmi.png", height: "40px" })
                    ),
                    el("h1", "참새 커스터마이징"),
                ),
            ),
        ));
        this.load(parseInt(params.id, 10));
    }

    private async load(id: number) {

        const ment = await SparrowsContract.ments(id);
        const metadata = await KlubsLoader.loadMetadata(SparrowsContract.address, id);
        const pixel = (await superagent.get(`https://api.tteok.org/sparrows/${id}/checkpixel`)).body.pixel;

        let preview: SparrowPreview;
        let input: DomNode<HTMLInputElement>;
        let pixelatePreview: SparrowPreview;

        this.container.append(
            el("main",
                el("p.warning", "자산 사용 허락을 받기 위해 트랜잭션이 두번씩 발생할 수 있어!! \n 말풍선에 특수 문자는 깨질 수 있으니 주의해!!"),
                el("h2", "꾸미기 폼"),
                el(".form",
                    preview = new SparrowPreview(metadata.attributes, ment, pixel),
                    el(".change-parts",
                        el("p", "모습을 변경하는데는 100 IJM이 필요합니다."),
                        ...parts.map((p) => {
                            let select: DomNode;
                            const dom = el(".select-wrapper",
                                el("span", p.name),
                                select = el("select",
                                    {
                                        placeholder: p.name,
                                        change: (event, select) => {
                                            const value = (select.domElement as HTMLSelectElement).value;
                                            const a = metadata.attributes.find((a: any) => a.trait_type === p.name);
                                            const traits: any = p.parts.filter((part) => part.name === value);
                                            for (const trait of traits) {
                                                if (
                                                    trait.condition === undefined ||
                                                    metadata.attributes.find((d: any) => d.trait_type === trait.condition.trait && trait.condition.values.includes(d.value) === true) !== undefined
                                                ) {
                                                    if (a === undefined) {
                                                        metadata.attributes.push({ trait_type: p.name, value });
                                                    } else {
                                                        a.value = value;
                                                    }
                                                    preview.changeAttributes(metadata.attributes);
                                                    pixelatePreview.changeAttributes(metadata.attributes);
                                                    break;
                                                }
                                            }
                                        },
                                    },
                                    ...p.parts.map((part) => {
                                        // 특수 아이템
                                        if (p.name === "Back" && part.name === "JOKER") {
                                            return undefined;
                                        }
                                        return el("option", part.name, { value: part.name });
                                    }),
                                ),
                            );
                            const a = metadata.attributes.find((a: any) => a.trait_type === p.name);
                            if (a !== undefined) {
                                (select.domElement as HTMLSelectElement).value = a.value;
                            }
                            return dom;
                        }),
                        el("button", "100 절미로 파츠 변경하기", {
                            click: async () => {
                                const owner = await Wallet.loadAddress();
                                if (owner !== undefined) {
                                    if ((await InjeolmiContract.balanceOf(owner)).lt(await ItemStoreContract.itemPrices(0))) {
                                        alert("절미 부족");
                                    } else {
                                        const result = await fetch("https://api.tteok.org/sparrows/checkattributesexists", {
                                            method: "POST",
                                            body: JSON.stringify({
                                                attributes: metadata.attributes,
                                            }),
                                        })
                                        if ((await result.json()).exists === true) {
                                            alert("똑같이 생긴 참새 존재");
                                        } else {
                                            const nonce = await ItemStoreContract.nonces(owner);
                                            await ItemStoreContract.buyItems([0]);
                                            setTimeout(async () => {
                                                await fetch(`https://api.tteok.org/sparrows/${id}/change`, {
                                                    method: "POST",
                                                    body: JSON.stringify({
                                                        address: owner,
                                                        nonce: nonce.toNumber(),
                                                        itemId: 0,
                                                        attributes: metadata.attributes,
                                                    }),
                                                });
                                                await superagent.get(`https://api.tteok.org/sparrows/${id}/refresh`);
                                                await KlubsLoader.refreshMetadata(SparrowsContract.address, id);
                                                SkyRouter.refresh();
                                            }, 2000);
                                        }
                                    }
                                }
                            },
                        }),
                    ),
                ),
                el(".change-ment",
                    el("p", "말풍선을 변경하는데는 100 IJM이 필요합니다."),
                    input = el("input", {
                        placeholder: "말풍선 멘트",
                        value: ment,
                        keyup: () => {
                            preview.changeMent(input.domElement.value);
                            pixelatePreview.changeMent(input.domElement.value);
                        },
                    }),
                    el("button", "100 절미로 말풍선 변경하기", {
                        click: async () => {
                            const owner = await Wallet.loadAddress();
                            if (owner !== undefined) {
                                if ((await InjeolmiContract.balanceOf(owner)).lt(await SparrowsMentorContract.price())) {
                                    alert("절미 부족");
                                } else {
                                    await SparrowsMentorContract.changeMent(id, input.domElement.value);
                                    setTimeout(async () => {
                                        await superagent.get(`https://api.tteok.org/sparrows/${id}/refresh`);
                                        await KlubsLoader.refreshMetadata(SparrowsContract.address, id);
                                        SkyRouter.refresh();
                                    }, 2000);
                                }
                            }
                        },
                    }),
                    el("button", "티겟으로 변경하기", {
                        click: async () => {
                            const owner = await Wallet.loadAddress();
                            if (owner !== undefined) {
                                if ((await TicketContract.balanceOf(owner, 0)).lt(1)) {
                                    alert("티켓 부족");
                                } else {
                                    await SparrowsMentorContract.changeMentUsingTicket(id, input.domElement.value);
                                    setTimeout(async () => {
                                        await superagent.get(`https://api.tteok.org/sparrows/${id}/refresh`);
                                        await KlubsLoader.refreshMetadata(SparrowsContract.address, id);
                                        SkyRouter.refresh();
                                    }, 2000);
                                }
                            }
                        },
                    }),
                ),
                el("h2", "실제 이미지"),
                el(".real",
                    el(`img${pixel === true ? ".pixel" : ""}`, { src: metadata.image }),
                    el(".form",
                        el("p", "실제 이미지가 달라?"),
                        el("button", "실제 이미지 재생성", {
                            click: async () => {
                                await superagent.get(`https://api.tteok.org/sparrows/${id}/refresh`);
                                SkyRouter.refresh();
                            },
                        }),
                    ),
                ),
                el("h2", pixel !== true ? "도트화" : "비도트화"),
                el(".pixelate",
                    pixelatePreview = new SparrowPreview(metadata.attributes, ment, pixel !== true),
                    el(".form",
                        el("p", pixel !== true ? "도트화 하면 멘트는 숨겨짐 ㅠ" : ""),
                        el("p", "도트화/비도트화 하는데는 100 IJM이 필요합니다."),
                        el("button", pixel !== true ? "도트화" : "비도트화", {
                            click: async () => {
                                const owner = await Wallet.loadAddress();
                                if (owner !== undefined) {
                                    if ((await InjeolmiContract.balanceOf(owner)).lt(await ItemStoreContract.itemPrices(pixel !== true ? 1 : 2))) {
                                        alert("절미 부족");
                                    } else {
                                        const nonce = await ItemStoreContract.nonces(owner);
                                        await ItemStoreContract.buyItems([pixel !== true ? 1 : 2]);
                                        setTimeout(async () => {
                                            await fetch(`https://api.tteok.org/sparrows/${id}/${pixel !== true ? "pixelate" : "depixelate"}`, {
                                                method: "POST",
                                                body: JSON.stringify({
                                                    address: owner,
                                                    nonce: nonce.toNumber(),
                                                    itemId: pixel !== true ? 1 : 2,
                                                    attributes: metadata.attributes,
                                                }),
                                            });
                                            await superagent.get(`https://api.tteok.org/sparrows/${id}/refresh`);
                                            await KlubsLoader.refreshMetadata(SparrowsContract.address, id);
                                            SkyRouter.refresh();
                                        }, 2000);
                                    }
                                }
                            },
                        }),
                    ),
                ),
            ),
        );
    }

    public changeParams(params: ViewParams, uri: string): void {
        this.load(parseInt(params.id, 10));
    }

    public close(): void {
        this.container.delete();
    }
}