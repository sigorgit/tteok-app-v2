import { BigNumber, BigNumberish } from "ethers";
import KIP17Contract from "./standard/KIP17Contract";
declare class HousedeedsContract extends KIP17Contract {
    constructor();
    tokenOfOwnerByIndex(owner: string, index: number): Promise<BigNumber>;
    ments(id: BigNumberish): Promise<string>;
}
declare const _default: HousedeedsContract;
export default _default;
//# sourceMappingURL=HousedeedsContract.d.ts.map