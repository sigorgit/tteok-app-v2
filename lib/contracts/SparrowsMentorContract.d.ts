import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import Contract from "./Contract";
declare class SparrowsMentorContract extends Contract {
    constructor();
    price(): Promise<BigNumber>;
    changeMent(id: BigNumberish, ment: string): Promise<void>;
    changeMentUsingTicket(id: BigNumberish, ment: string): Promise<void>;
}
declare const _default: SparrowsMentorContract;
export default _default;
//# sourceMappingURL=SparrowsMentorContract.d.ts.map