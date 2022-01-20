import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { TteokmillSparrowsMinter } from "../TteokmillSparrowsMinter";
export declare class TteokmillSparrowsMinter__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_nft: string, _whitelist: string, _ijm: string, overrides?: Overrides): Promise<TteokmillSparrowsMinter>;
    getDeployTransaction(_nft: string, _whitelist: string, _ijm: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): TteokmillSparrowsMinter;
    connect(signer: Signer): TteokmillSparrowsMinter__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TteokmillSparrowsMinter;
}
//# sourceMappingURL=TteokmillSparrowsMinter__factory.d.ts.map