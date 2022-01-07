import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import KIP37Contract from "./standard/KIP37Contract";
declare class SparrowNFTsContract extends KIP37Contract {
    constructor();
    current(): Promise<BigNumber>;
    minters(id: BigNumberish): Promise<string>;
    extnames(id: BigNumberish): Promise<string>;
    titles(id: BigNumberish): Promise<string>;
    descriptions(id: BigNumberish): Promise<string>;
    mint(extname: string, title: string, description: string, amount: BigNumberish): Promise<void>;
}
declare const _default: SparrowNFTsContract;
export default _default;
//# sourceMappingURL=SparrowNFTsContract.d.ts.map