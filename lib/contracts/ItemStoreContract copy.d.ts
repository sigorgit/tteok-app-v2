import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import Contract from "./Contract";
declare class ItemStoreContract extends Contract {
    constructor();
    itemPrices(id: BigNumberish): Promise<BigNumber>;
    buyItems(ids: BigNumberish[]): Promise<void>;
}
declare const _default: ItemStoreContract;
export default _default;
//# sourceMappingURL=ItemStoreContract%20copy.d.ts.map