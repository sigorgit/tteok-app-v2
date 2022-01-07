import { BigNumber } from "@ethersproject/bignumber";
import Contract from "./Contract";
declare class InitialSaleContract extends Contract {
    constructor();
    total(): Promise<BigNumber>;
    bought(address: string): Promise<BigNumber>;
    buy(value: BigNumber): Promise<void>;
}
declare const _default: InitialSaleContract;
export default _default;
//# sourceMappingURL=InitialSaleContract.d.ts.map