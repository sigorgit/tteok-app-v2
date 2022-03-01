import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
declare class HousedeedStakingContract extends Contract {
    constructor();
    withdrawReward(ids: BigNumberish[]): Promise<void>;
    withdrawableReward(ids: BigNumberish[]): Promise<BigNumber>;
}
declare const _default: HousedeedStakingContract;
export default _default;
//# sourceMappingURL=HousedeedStakingContract.d.ts.map