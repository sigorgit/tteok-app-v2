import { BigNumber } from "ethers";
import Contract from "./Contract";
declare class KlayswapContract extends Contract {
    constructor();
    buy(amount: BigNumber): Promise<void>;
    sell(amount: BigNumber): Promise<void>;
}
declare const _default: KlayswapContract;
export default _default;
//# sourceMappingURL=KlayswapContract.d.ts.map