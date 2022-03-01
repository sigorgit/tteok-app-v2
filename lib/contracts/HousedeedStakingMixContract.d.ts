import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
declare class HousedeedStakingMixContract extends Contract {
    constructor();
    withdrawReward(ids: BigNumberish[]): Promise<void>;
    withdrawableReward(ids: BigNumberish[]): Promise<BigNumber>;
}
declare const _default: HousedeedStakingMixContract;
export default _default;
//# sourceMappingURL=HousedeedStakingMixContract.d.ts.map