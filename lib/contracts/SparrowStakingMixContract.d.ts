import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
declare class SparrowStakingMixContract extends Contract {
    constructor();
    withdrawReward(ids: BigNumberish[]): Promise<void>;
    withdrawableReward(ids: BigNumberish[]): Promise<BigNumber>;
}
declare const _default: SparrowStakingMixContract;
export default _default;
//# sourceMappingURL=SparrowStakingMixContract.d.ts.map