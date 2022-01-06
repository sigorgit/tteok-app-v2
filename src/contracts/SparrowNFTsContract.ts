import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import SparrowNFTsArtifact from "./abi/sparrow-nfts/artifacts/contracts/SparrowNFTs.sol/SparrowNFTs.json";
import KIP37Contract from "./standard/KIP37Contract";
import KIP7Contract from "./standard/KIP7Contract";

class SparrowNFTsContract extends KIP37Contract {

    constructor() {
        super("0xfe1970e7fBa02C2ab7721840eCA0277d5eE6b482", SparrowNFTsArtifact.abi);
    }

    public async current(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("current"));
    }

    public async minters(id: BigNumberish): Promise<string> {
        return await this.runMethod("minters", id);
    }

    public async extnames(id: BigNumberish): Promise<string> {
        return await this.runMethod("extnames", id);
    }

    public async titles(id: BigNumberish): Promise<string> {
        return await this.runMethod("titles", id);
    }

    public async descriptions(id: BigNumberish): Promise<string> {
        return await this.runMethod("descriptions", id);
    }

    public async mint(extname: string, title: string, description: string, amount: BigNumberish) {
        await this.runWalletMethod("mint", extname, title, description, amount);
    }
}

export default new SparrowNFTsContract();
