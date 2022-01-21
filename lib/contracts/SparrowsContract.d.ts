import { BigNumber, BigNumberish } from "ethers";
import KIP17Contract from "./standard/KIP17Contract";
declare class SparrowsContract extends KIP17Contract {
    constructor();
    tokenOfOwnerByIndex(owner: string, index: number): Promise<BigNumber>;
    ments(id: BigNumberish): Promise<string>;
}
declare const _default: SparrowsContract;
export default _default;
//# sourceMappingURL=SparrowsContract.d.ts.map