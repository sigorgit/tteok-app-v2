import { DomNode, el } from "@hanul/skynode";
import { SkyRouter, View, ViewParams } from "skyrouter";
import Layout from "../Layout";
import CommonUtil from "../../CommonUtil";
import SparrowNFTsContract from "../../contracts/SparrowNFTsContract";
import Wallet from "../../klaytn/Wallet";
import ViewUtil from "../ViewUtil";

export default class SparrowNFT implements View {

    private container: DomNode;
    private nftList: DomNode;

    constructor() {
        Layout.current.title = "참새 NFT";
        Layout.current.content.append(this.container = el(".sparrow-nft-view",
            el(".gnb",
                el(".inner-gnb",
                    el("a", { click: () => ViewUtil.go("/") },
                        el("img", { src: "/images/injeolmi.png", height: "40px" })
                    ),
                    el("h1", "참새 NFT"),
                )
            ),
            el("h2", "참새 NFT 목록"),
            el("button", "NFT 만들기", {
                click: () => ViewUtil.go("/sparrow-nft/add")
            }),
            el("button.outline", "참새 NFT 주소", {
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
                            el(".minter", `발행자: ${CommonUtil.shortenAddress(minter)}`),
                            el(".totalSupply", `총 발행량: ${totalSupply.toNumber()}`),
                        ),
                        minter !== address ? undefined : el(".reupload",
                            el("h6", "이미지 재업로드"),
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