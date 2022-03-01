import { BigNumber, BigNumberish } from "ethers";
import SparrowsArtifact from "./abi/sparrows/artifacts/contracts/TteokmillSparrows.sol/TteokmillSparrows.json";
import KIP17Contract from "./standard/KIP17Contract";

class HousedeedsContract extends KIP17Contract {

    constructor() {
        super("0x29d05593116C443da54DaBFB4e5322DEA2fff8Cd", SparrowsArtifact.abi);
    }

    public async tokenOfOwnerByIndex(owner: string, index: number): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("tokenOfOwnerByIndex", owner, index));
    }

    public async ments(id: BigNumberish): Promise<string> {
        return await this.runMethod("ments", id);
    }
}

export default new HousedeedsContract();
