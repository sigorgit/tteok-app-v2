import { BigNumber } from "@ethersproject/bignumber";
import Contract from "../Contract";
declare class MixPriceEstimatorContract extends Contract {
    constructor();
    estimatePos(amountIn: BigNumber): Promise<BigNumber>;
}
declare const _default: MixPriceEstimatorContract;
export default _default;
//# sourceMappingURL=MixPriceEstimatorContract.d.ts.map