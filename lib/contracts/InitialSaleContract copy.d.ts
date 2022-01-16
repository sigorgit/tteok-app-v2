import { BigNumber } from "@ethersproject/bignumber";
import Contract from "./Contract";
declare class InitialSaleReceiverContract extends Contract {
    constructor();
    total(): Promise<BigNumber>;
    bought(address: string): Promise<BigNumber>;
    buy(value: BigNumber): Promise<void>;
}
declare const _default: InitialSaleReceiverContract;
export default _default;
//# sourceMappingURL=InitialSaleContract%20copy.d.ts.map