import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import SparrowPreview from "../component/SparrowPreview";
import InjeolmiContract from "../contracts/InjeolmiContract";
import ItemStoreContract from "../contracts/ItemStoreContract";
import SparrowsContract from "../contracts/SparrowsContract";
import SparrowsMentorContract from "../contracts/SparrowsMentorContract";
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

        let preview: SparrowPreview;
        let input: DomNode<HTMLInputElement>;

        this.container.append(el("main",
            preview = new SparrowPreview(metadata.attributes, ment),
            el(".form",
                el(".change-ment",
                    el("p", "말풍선을 변경하는데는 100 IJM이 필요합니다."),
                    input = el("input", {
                        placeholder: "말풍선 멘트",
                        value: ment,
                        keyup: () => {
                            preview.changeMent(input.domElement.value);
                        },
                    }),
                    el("button", "변경하기", {
                        click: async () => {
                            const owner = await Wallet.loadAddress();
                            if (owner !== undefined) {
                                if ((await InjeolmiContract.balanceOf(owner)).lte(await SparrowsMentorContract.price())) {
                                    alert("절미 부족");
                                } else {
                                    await SparrowsMentorContract.changeMent(id, input.domElement.value);
                                    KlubsLoader.refreshMetadata(SparrowsContract.address, id);
                                    ViewUtil.waitTransactionAndRefresh();
                                }
                            }
                        },
                    }),
                ),
                el(".change-parts",
                    el("p", "모습을 변경하는데는 100 IJM이 필요합니다."),
                    ...parts.map((p) => el(".select-wrapper",
                        el("span", p.name),
                        el("select",
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
                    )),
                    el("button", "변경하기", {
                        click: async () => {
                            const owner = await Wallet.loadAddress();
                            if (owner !== undefined) {
                                if ((await InjeolmiContract.balanceOf(owner)).lte(await ItemStoreContract.itemPrices(0))) {
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
                                        await fetch(`https://api.tteok.org/sparrows/${id}/change`, {
                                            method: "POST",
                                            body: JSON.stringify({
                                                address: owner,
                                                nonce: nonce.toNumber(),
                                                itemId: 0,
                                                attributes: metadata.attributes,
                                            }),
                                        });
                                        KlubsLoader.refreshMetadata(SparrowsContract.address, id);
                                        ViewUtil.waitTransactionAndRefresh();
                                    }
                                }
                            }
                        },
                    }),
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void {
        this.load(parseInt(params.id, 10));
    }

    public close(): void {
        this.container.delete();
    }
}