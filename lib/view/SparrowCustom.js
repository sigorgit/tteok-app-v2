"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const SparrowPreview_1 = __importDefault(require("../component/SparrowPreview"));
const InjeolmiContract_1 = __importDefault(require("../contracts/InjeolmiContract"));
const ItemStoreContract_1 = __importDefault(require("../contracts/ItemStoreContract"));
const SparrowsContract_1 = __importDefault(require("../contracts/SparrowsContract"));
const SparrowsMentorContract_1 = __importDefault(require("../contracts/SparrowsMentorContract"));
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
        let preview;
        let input;
        this.container.append((0, skynode_1.el)("main", preview = new SparrowPreview_1.default(metadata.attributes, ment), (0, skynode_1.el)(".form", (0, skynode_1.el)(".change-ment", (0, skynode_1.el)("p", "말풍선을 변경하는데는 100 IJM이 필요합니다."), input = (0, skynode_1.el)("input", {
            placeholder: "말풍선 멘트",
            value: ment,
            keyup: () => {
                preview.changeMent(input.domElement.value);
            },
        }), (0, skynode_1.el)("button", "변경하기", {
            click: async () => {
                const owner = await Wallet_1.default.loadAddress();
                if (owner !== undefined) {
                    if ((await InjeolmiContract_1.default.balanceOf(owner)).lte(await SparrowsMentorContract_1.default.price())) {
                        alert("절미 부족");
                    }
                    else {
                        await SparrowsMentorContract_1.default.changeMent(id, input.domElement.value);
                        KlubsLoader_1.default.refreshMetadata(SparrowsContract_1.default.address, id);
                        ViewUtil_1.default.waitTransactionAndRefresh();
                    }
                }
            },
        })), (0, skynode_1.el)(".change-parts", (0, skynode_1.el)("p", "모습을 변경하는데는 100 IJM이 필요합니다."), ...parts_json_1.default.map((p) => (0, skynode_1.el)(".select-wrapper", (0, skynode_1.el)("span", p.name), (0, skynode_1.el)("select", {
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
                        break;
                    }
                }
            },
        }, ...p.parts.map((part) => {
            if (p.name === "Back" && part.name === "JOKER") {
                return undefined;
            }
            return (0, skynode_1.el)("option", part.name, { value: part.name });
        })))), (0, skynode_1.el)("button", "변경하기", {
            click: async () => {
                const owner = await Wallet_1.default.loadAddress();
                if (owner !== undefined) {
                    if ((await InjeolmiContract_1.default.balanceOf(owner)).lte(await ItemStoreContract_1.default.itemPrices(0))) {
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
                            await fetch(`https://api.tteok.org/sparrows/${id}/change`, {
                                method: "POST",
                                body: JSON.stringify({
                                    address: owner,
                                    nonce: nonce.toNumber(),
                                    itemId: 0,
                                    attributes: metadata.attributes,
                                }),
                            });
                            KlubsLoader_1.default.refreshMetadata(SparrowsContract_1.default.address, id);
                            ViewUtil_1.default.waitTransactionAndRefresh();
                        }
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