"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyrouter_1 = require("skyrouter");
const superagent_1 = __importDefault(require("superagent"));
const SparrowPreview_1 = __importDefault(require("../component/SparrowPreview"));
const InjeolmiContract_1 = __importDefault(require("../contracts/InjeolmiContract"));
const ItemStoreContract_1 = __importDefault(require("../contracts/ItemStoreContract"));
const SparrowsContract_1 = __importDefault(require("../contracts/SparrowsContract"));
const SparrowsMentorContract_1 = __importDefault(require("../contracts/SparrowsMentorContract"));
const TicketContract_1 = __importDefault(require("../contracts/TicketContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const KlubsLoader_1 = __importDefault(require("../KlubsLoader"));
const parts_json_1 = __importDefault(require("../parts.json"));
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class SparrowCustom {
    constructor(params) {
        Layout_1.default.current.title = "참새 커스터마이징";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".sparrow-custom-view", (0, skynode_1.el)(".gnb", (0, skynode_1.el)(".inner-gnb", (0, skynode_1.el)("a", { click: () => ViewUtil_1.default.go("/") }, (0, skynode_1.el)("img", { src: "/images/injeolmi.png", height: "40px" })), (0, skynode_1.el)("h1", "참새 커스터마이징")))));
        this.load(parseInt(params.id, 10));
    }
    async load(id) {
        const ment = await SparrowsContract_1.default.ments(id);
        const metadata = await KlubsLoader_1.default.loadMetadata(SparrowsContract_1.default.address, id);
        const pixel = (await superagent_1.default.get(`https://api.tteok.org/sparrows/${id}/checkpixel`)).body.pixel;
        let preview;
        let input;
        let pixelatePreview;
        this.container.append((0, skynode_1.el)("main", (0, skynode_1.el)("p.warning", "자산 사용 허락을 받기 위해 트랜잭션이 두번씩 발생할 수 있어!! \n 말풍선에 특수 문자는 깨질 수 있으니 주의해!!"), (0, skynode_1.el)("h2", "꾸미기 폼"), (0, skynode_1.el)(".form", preview = new SparrowPreview_1.default(metadata.attributes, ment, pixel), (0, skynode_1.el)(".change-parts", (0, skynode_1.el)("p", "모습을 변경하는데는 100 IJM이 필요합니다."), ...parts_json_1.default.map((p) => {
            let select;
            const dom = (0, skynode_1.el)(".select-wrapper", (0, skynode_1.el)("span", p.name), select = (0, skynode_1.el)("select", {
                placeholder: p.name,
                change: (event, select) => {
                    const value = select.domElement.value;
                    const a = metadata.attributes.find((a) => a.trait_type === p.name);
                    const traits = p.parts.filter((part) => part.name === value);
                    for (const trait of traits) {
                        if (trait.condition === undefined ||
                            metadata.attributes.find((d) => d.trait_type === trait.condition.trait && trait.condition.values.includes(d.value) === true) !== undefined) {
                            if (a === undefined) {
                                metadata.attributes.push({ trait_type: p.name, value });
                            }
                            else {
                                a.value = value;
                            }
                            preview.changeAttributes(metadata.attributes);
                            pixelatePreview.changeAttributes(metadata.attributes);
                            break;
                        }
                    }
                },
            }, ...p.parts.map((part) => {
                if (p.name === "Back" && part.name === "JOKER") {
                    return undefined;
                }
                return (0, skynode_1.el)("option", part.name, { value: part.name });
            })));
            const a = metadata.attributes.find((a) => a.trait_type === p.name);
            if (a !== undefined) {
                select.domElement.value = a.value;
            }
            return dom;
        }), (0, skynode_1.el)("button", "변경하기", {
            click: async () => {
                const owner = await Wallet_1.default.loadAddress();
                if (owner !== undefined) {
                    if ((await InjeolmiContract_1.default.balanceOf(owner)).lt(await ItemStoreContract_1.default.itemPrices(0))) {
                        alert("절미 부족");
                    }
                    else {
                        const result = await fetch("https://api.tteok.org/sparrows/checkattributesexists", {
                            method: "POST",
                            body: JSON.stringify({
                                attributes: metadata.attributes,
                            }),
                        });
                        if ((await result.json()).exists === true) {
                            alert("똑같이 생긴 참새 존재");
                        }
                        else {
                            const nonce = await ItemStoreContract_1.default.nonces(owner);
                            await ItemStoreContract_1.default.buyItems([0]);
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
                                await superagent_1.default.get(`https://api.tteok.org/sparrows/${id}/refresh`);
                                await KlubsLoader_1.default.refreshMetadata(SparrowsContract_1.default.address, id);
                                skyrouter_1.SkyRouter.refresh();
                            }, 2000);
                        }
                    }
                }
            },
        }))), (0, skynode_1.el)(".change-ment", (0, skynode_1.el)("p", "말풍선을 변경하는데는 100 IJM이 필요합니다."), input = (0, skynode_1.el)("input", {
            placeholder: "말풍선 멘트",
            value: ment,
            keyup: () => {
                preview.changeMent(input.domElement.value);
                pixelatePreview.changeMent(input.domElement.value);
            },
        }), (0, skynode_1.el)("button", "100 절미로 변경하기", {
            click: async () => {
                const owner = await Wallet_1.default.loadAddress();
                if (owner !== undefined) {
                    if ((await InjeolmiContract_1.default.balanceOf(owner)).lt(await SparrowsMentorContract_1.default.price())) {
                        alert("절미 부족");
                    }
                    else {
                        await SparrowsMentorContract_1.default.changeMent(id, input.domElement.value);
                        setTimeout(async () => {
                            await superagent_1.default.get(`https://api.tteok.org/sparrows/${id}/refresh`);
                            await KlubsLoader_1.default.refreshMetadata(SparrowsContract_1.default.address, id);
                            skyrouter_1.SkyRouter.refresh();
                        }, 2000);
                    }
                }
            },
        }), (0, skynode_1.el)("button", "티겟으로 변경하기", {
            click: async () => {
                const owner = await Wallet_1.default.loadAddress();
                if (owner !== undefined) {
                    if ((await TicketContract_1.default.balanceOf(owner, 0)).lt(1)) {
                        alert("티켓 부족");
                    }
                    else {
                        await SparrowsMentorContract_1.default.changeMentUsingTicket(id, input.domElement.value);
                        setTimeout(async () => {
                            await superagent_1.default.get(`https://api.tteok.org/sparrows/${id}/refresh`);
                            await KlubsLoader_1.default.refreshMetadata(SparrowsContract_1.default.address, id);
                            skyrouter_1.SkyRouter.refresh();
                        }, 2000);
                    }
                }
            },
        })), (0, skynode_1.el)("h2", "실제 이미지"), (0, skynode_1.el)(".real", (0, skynode_1.el)(`img${pixel === true ? ".pixel" : ""}`, { src: metadata.image }), (0, skynode_1.el)(".form", (0, skynode_1.el)("p", "실제 이미지가 달라?"), (0, skynode_1.el)("button", "실제 이미지 재생성", {
            click: async () => {
                await superagent_1.default.get(`https://api.tteok.org/sparrows/${id}/refresh`);
                skyrouter_1.SkyRouter.refresh();
            },
        }))), (0, skynode_1.el)("h2", pixel !== true ? "도트화" : "비도트화"), (0, skynode_1.el)(".pixelate", pixelatePreview = new SparrowPreview_1.default(metadata.attributes, ment, pixel !== true), (0, skynode_1.el)(".form", (0, skynode_1.el)("p", pixel !== true ? "도트화 하면 멘트는 숨겨짐 ㅠ" : ""), (0, skynode_1.el)("p", "도트화/비도트화 하는데는 100 IJM이 필요합니다."), (0, skynode_1.el)("button", pixel !== true ? "도트화" : "비도트화", {
            click: async () => {
                const owner = await Wallet_1.default.loadAddress();
                if (owner !== undefined) {
                    if ((await InjeolmiContract_1.default.balanceOf(owner)).lt(await ItemStoreContract_1.default.itemPrices(pixel !== true ? 1 : 2))) {
                        alert("절미 부족");
                    }
                    else {
                        const nonce = await ItemStoreContract_1.default.nonces(owner);
                        await ItemStoreContract_1.default.buyItems([pixel !== true ? 1 : 2]);
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
                            await superagent_1.default.get(`https://api.tteok.org/sparrows/${id}/refresh`);
                            await KlubsLoader_1.default.refreshMetadata(SparrowsContract_1.default.address, id);
                            skyrouter_1.SkyRouter.refresh();
                        }, 2000);
                    }
                }
            },
        })))));
    }
    changeParams(params, uri) {
        this.load(parseInt(params.id, 10));
    }
    close() {
        this.container.delete();
    }
}
exports.default = SparrowCustom;
//# sourceMappingURL=SparrowCustom.js.map