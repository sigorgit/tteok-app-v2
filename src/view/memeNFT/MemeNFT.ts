import { DomNode, el } from "@hanul/skynode";
import { SkyRouter, View, ViewParams } from "skyrouter";
import Layout from "../Layout";
import CommonUtil from "../../CommonUtil";
import SparrowNFTsContract from "../../contracts/SparrowNFTsContract";
import Wallet from "../../klaytn/Wallet";
import ViewUtil from "../ViewUtil";
import msg from "msg.js";

export default class MemeNFT implements View {

    private container: DomNode;
    private nftList: DomNode;

    constructor() {
        Layout.current.title = msg("MEME_NFT");
        Layout.current.content.append(this.container = el(".sparrow-nft-view",
            el(".gnb",
                el(".inner-gnb",
                    el("a", { click: () => ViewUtil.go("/") },
                        el("img", { src: "/images/injeolmi.png", height: "40px" })
                    ),
                    el("h1", msg("MEME_NFT")),
                )
            ),
            el("h2", msg("MEME_NFT_TITLE")),
            el("button", msg("CREATE_MEME_NFT_BUTTON"), {
                click: () => ViewUtil.go("/meme-nft/add")
            }),
            el("button.outline", msg("MEME_NFT_ADDRESS_BUTTON"), {
                click: () => window.open("https://opensea.io/collection/sparrow-nfts")
            }),
            this.nftList = el("ul.nft-list"),
        ));
        this.loadNFTs();
    }

    private async loadNFTs() {

        const current = await SparrowNFTsContract.current();
        const address = await Wallet.loadAddress();

        const promises: Promise<void>[] = [];
        for (let id = 0; id < current.toNumber(); id += 1) {
            const promise = async (index: number) => {

                const minter = await SparrowNFTsContract.minters(index);
                const extname = await SparrowNFTsContract.extnames(index);
                const title = await SparrowNFTsContract.titles(index);
                const description = await SparrowNFTsContract.descriptions(index);
                const totalSupply = await SparrowNFTsContract.getTotalSupply(index);

                el(".nft",
                    el(".content",
                        el("h3", title),
                        el("img", {
                            src: `https://storage.googleapis.com/sparrow-nfts/${id}.${extname}`,
                            onError: "this.src='/images/error.png'",
                            click: () => open(`https://opensea.io/assets/klaytn/0xfe1970e7fba02c2ab7721840eca0277d5ee6b482/${id}`),
                        }),
                        el(".description", description),
                        el(".info",
                            el(".minter", `${msg("ISSUER")}: ${CommonUtil.shortenAddress(minter)}`),
                            el(".totalSupply", `${msg("TOTAL_AMOUNT")}: ${totalSupply.toNumber()}`),
                        ),
                        minter !== address ? undefined : el(".reupload",
                            el("h6", msg("IMAGE_REUPLOAD")),
                            el("input.hidden", {
                                type: "file",
                                change: (event) => {
                                    const file = event.target.files[0];
                                    const reader = new FileReader();
                                    reader.addEventListener("load", async () => {
                                        let dataURL = reader.result as string;
                                        const signedMessage = await Wallet.signMessage("Upload SparrowNFT File");
                                        await fetch(`https://api.tteok.org/sparrow/nft/${id}/upload`, {
                                            method: "POST",
                                            body: JSON.stringify({
                                                dataURL,
                                                signedMessage,
                                            }),
                                        });
                                        SkyRouter.refresh();
                                    }, false);
                                    if (file) {
                                        reader.readAsDataURL(file);
                                    }
                                },
                            }),
                        ),
                    ),
                ).appendTo(this.nftList);
            };
            promises.push(promise(id));
        }
        await Promise.all(promises);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}