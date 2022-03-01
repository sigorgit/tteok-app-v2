import { BigNumber, BigNumberish, constants } from "ethers";
import SparrowStakingArtifact from "./abi/injeolmi-staking/artifacts/contracts/SparrowStaking.sol/SparrowStaking.json";
import Contract from "./Contract";

class HousedeedStakingContract extends Contract {

    constructor() {
        super("0xE93c6A2A537773479A49A27563Eb0975C690440E", SparrowStakingArtifact.abi);
    }

    public async withdrawReward(ids: BigNumberish[]) {
        const amounts: BigNumber[] = [];
        for (const id of ids) {
            amounts.push(constants.MaxUint256);
        }
        await this.runWalletMethod("withdrawReward", ids, amounts);
    }

    public async withdrawableReward(ids: BigNumberish[]): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("withdrawableReward", ids));
    }
}

export default new HousedeedStakingContract();
