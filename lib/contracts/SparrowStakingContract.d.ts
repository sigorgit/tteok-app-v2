import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
declare class SparrowStakingContract extends Contract {
    constructor();
    withdrawReward(ids: BigNumberish[]): Promise<void>;
    withdrawableReward(ids: BigNumberish[]): Promise<BigNumber>;
}
declare const _default: SparrowStakingContract;
export default _default;
//# sourceMappingURL=SparrowStakingContract.d.ts.map