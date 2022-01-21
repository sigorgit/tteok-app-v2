import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import Contract from "./Contract";
declare class ItemStoreContract extends Contract {
    constructor();
    itemPrices(id: BigNumberish): Promise<BigNumber>;
    nonces(address: string): Promise<BigNumber>;
    buyItems(id: BigNumberish): Promise<void>;
}
declare const _default: ItemStoreContract;
export default _default;
//# sourceMappingURL=ItemStoreContract.d.ts.map