import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
declare class SparrowStakingContract extends Contract {
    constructor();
    stake(amount: BigNumberish): Promise<void>;
    withdrawReward(ids: BigNumberish[]): Promise<void>;
    withdrawableReward(ids: BigNumberish[]): Promise<BigNumber>;
}
declare const _default: SparrowStakingContract;
export default _default;
//# sourceMappingURL=SparrowStakingContract%20copy.d.ts.map