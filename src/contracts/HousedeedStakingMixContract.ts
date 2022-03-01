import { BigNumber, BigNumberish } from "ethers";
import SparrowStakingMixArtifact from "./abi/injeolmi-staking/artifacts/contracts/SparrowStakingMix.sol/SparrowStakingMix.json";
import Contract from "./Contract";

class HousedeedStakingMixContract extends Contract {

    constructor() {
        super("0x052e7df5868dF854571880FC4DEF7F80622F80E8", SparrowStakingMixArtifact.abi);
    }

    public async withdrawReward(ids: BigNumberish[]) {
        await this.runWalletMethod("withdrawReward", ids);
    }

    public async withdrawableReward(ids: BigNumberish[]): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("withdrawableReward", ids));
    }
}

export default new HousedeedStakingMixContract();
