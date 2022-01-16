import { BigNumber } from "@ethersproject/bignumber";
import Contract from "./Contract";
declare class InjeolmiPriceEstimatorContract extends Contract {
    constructor();
    estimatePos(amountIn: BigNumber): Promise<BigNumber>;
}
declare const _default: InjeolmiPriceEstimatorContract;
export default _default;
//# sourceMappingURL=InjeolmiPriceEstimatorContract.d.ts.map