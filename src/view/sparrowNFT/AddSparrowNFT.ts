import { DomNode, el } from "@hanul/skynode";
import { SkyRouter, View, ViewParams } from "skyrouter";
import Layout from "../Layout";
import CommonUtil from "../../CommonUtil";
import SparrowNFTsContract from "../../contracts/SparrowNFTsContract";
import Wallet from "../../klaytn/Wallet";
import ViewUtil from "../ViewUtil";

export default class AddSparrowNFT implements View {

    private container: DomNode;

    private extnameInput: DomNode<HTMLInputElement>;
    private nameInput: DomNode<HTMLInputElement>;
    private descriptionInput: DomNode<HTMLInputElement>;
    private amountInput: DomNode<HTMLInputElement>;
    private nftList: DomNode;

    private dataURL: string | undefined;

    constructor() {
        Layout.current.title = "참새 NFT";
        Layout.current.content.append(this.container = el(".add-sparrow-nft-view",
            el(".gnb",
                el(".inner-gnb",
                    el("a", { click: () => ViewUtil.go("/") },
                        el("img", { src: "/images/injeolmi.png", height: "40px" })
                    ),
                    el("h1", "참새 NFT"),
                )
            ),
            el("h2", "참새 NFT 만들기"),
            el(".form",
                this.extnameInput = el("input", { placeholder: "파일 확장자 (png 등, 점 빼고)" }),
                this.nameInput = el("input", { placeholder: "NFT 이름" }),
                this.descriptionInput = el("input", { placeholder: "NFT 설명" }),
                this.amountInput = el("input", { placeholder: "발행 개수 (숫자로만)" }),
                el("input", {
                    type: "file",
                    change: (event) => {
                        const file = event.target.files[0];
                        const reader = new FileReader();
                        reader.addEventListener("load", () => {
                            this.dataURL = reader.result as string;
                        }, false);
                        if (file) {
                            reader.readAsDataURL(file);
                        }
                    },
                }),
            ),
            el("button", "만들기", {
                click: () => ViewUtil.go("/")
            }),
            this.nftList = el("ul.nft-list"),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}