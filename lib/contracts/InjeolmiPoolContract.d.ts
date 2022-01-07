import { BigNumber } from "@ethersproject/bignumber";
import Contract from "./Contract";
declare class InjeolmiPoolContract extends Contract {
    constructor();
    swapToIJM(value: BigNumber): Promise<void>;
    swapToKlay(amount: BigNumber): Promise<void>;
}
declare const _default: InjeolmiPoolContract;
export default _default;
//# sourceMappingURL=InjeolmiPoolContract.d.ts.map