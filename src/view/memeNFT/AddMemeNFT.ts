import { DomNode, el } from "@hanul/skynode";
import { SkyRouter, View, ViewParams } from "skyrouter";
import Layout from "../Layout";
import CommonUtil from "../../CommonUtil";
import SparrowNFTsContract from "../../contracts/SparrowNFTsContract";
import Wallet from "../../klaytn/Wallet";
import ViewUtil from "../ViewUtil";
import msg from "msg.js";

export default class AddMemeNFT implements View {

    private container: DomNode;

    private extnameInput: DomNode<HTMLInputElement>;
    private nameInput: DomNode<HTMLInputElement>;
    private descriptionInput: DomNode<HTMLInputElement>;
    private amountInput: DomNode<HTMLInputElement>;
    private nftList: DomNode;

    private dataURL: string | undefined;

    constructor() {
        Layout.current.title = msg("MEME_NFT");
        Layout.current.content.append(this.container = el(".add-sparrow-nft-view",
            el(".gnb",
                el(".inner-gnb",
                    el("a", { click: () => ViewUtil.go("/") },
                        el("img", { src: "/images/injeolmi.png", height: "40px" })
                    ),
                    el("h1", msg("MEME_NFT")),
                )
            ),
            el("h2", msg("CREATE_MEME_NFT_BUTTON")),
            el(".form",
                this.extnameInput = el("input", { placeholder: msg("NFT_EXT_NAME_INPUT") }),
                this.nameInput = el("input", { placeholder: msg("NFT_NAME_INPUT") }),
                this.descriptionInput = el("input", { placeholder: msg("NFT_DESC_INPUT") }),
                this.amountInput = el("input", { placeholder: msg("NFT_TOTAL_AMOUNT") }),
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
            el("button", msg("CREATE_MEME_NFT_BUTTON"), {
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