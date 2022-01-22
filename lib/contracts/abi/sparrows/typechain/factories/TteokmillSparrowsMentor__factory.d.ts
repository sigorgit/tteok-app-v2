import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { TteokmillSparrowsMentor } from "../TteokmillSparrowsMentor";
export declare class TteokmillSparrowsMentor__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_nft: string, _ijm: string, _ticket: string, _feeTo: string, overrides?: Overrides): Promise<TteokmillSparrowsMentor>;
    getDeployTransaction(_nft: string, _ijm: string, _ticket: string, _feeTo: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): TteokmillSparrowsMentor;
    connect(signer: Signer): TteokmillSparrowsMentor__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TteokmillSparrowsMentor;
}
//# sourceMappingURL=TteokmillSparrowsMentor__factory.d.ts.map