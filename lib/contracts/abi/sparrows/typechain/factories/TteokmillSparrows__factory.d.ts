import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { TteokmillSparrows } from "../TteokmillSparrows";
export declare class TteokmillSparrows__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<TteokmillSparrows>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): TteokmillSparrows;
    connect(signer: Signer): TteokmillSparrows__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TteokmillSparrows;
}
//# sourceMappingURL=TteokmillSparrows__factory.d.ts.map