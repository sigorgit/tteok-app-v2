import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { TteokmillSparrowsWhitelist } from "../TteokmillSparrowsWhitelist";
export declare class TteokmillSparrowsWhitelist__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<TteokmillSparrowsWhitelist>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): TteokmillSparrowsWhitelist;
    connect(signer: Signer): TteokmillSparrowsWhitelist__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TteokmillSparrowsWhitelist;
}
//# sourceMappingURL=TteokmillSparrowsWhitelist__factory.d.ts.map