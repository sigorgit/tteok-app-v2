import { BigNumber, BigNumberish } from "ethers";
import SparrowsArtifact from "./abi/sparrows/artifacts/contracts/TteokmillSparrows.sol/TteokmillSparrows.json";
import KIP17Contract from "./standard/KIP17Contract";

class SparrowsContract extends KIP17Contract {

    constructor() {
        super("0x17c4758C973d0F850A8E1910BD9649699e056cb6", SparrowsArtifact.abi);
    }

    public async tokenOfOwnerByIndex(owner: string, index: number): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("tokenOfOwnerByIndex", owner, index));
    }

    public async ments(id: BigNumberish): Promise<string> {
        return await this.runMethod("ments", id);
    }
}

export default new SparrowsContract();
