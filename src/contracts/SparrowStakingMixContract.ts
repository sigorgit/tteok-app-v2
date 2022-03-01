import { BigNumber, BigNumberish } from "ethers";
import SparrowStakingMixArtifact from "./abi/injeolmi-staking/artifacts/contracts/SparrowStakingMix.sol/SparrowStakingMix.json";
import Contract from "./Contract";

class SparrowStakingMixContract extends Contract {

    constructor() {
        super("0xf11E3FEE02236A57657c92963F4187D6ad92807b", SparrowStakingMixArtifact.abi);
    }

    public async withdrawReward(ids: BigNumberish[]) {
        await this.runWalletMethod("withdrawReward", ids);
    }

    public async withdrawableReward(ids: BigNumberish[]): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("withdrawableReward", ids));
    }
}

export default new SparrowStakingMixContract();
