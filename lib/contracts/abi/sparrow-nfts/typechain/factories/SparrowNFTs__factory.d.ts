import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { SparrowNFTs } from "../SparrowNFTs";
export declare class SparrowNFTs__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<SparrowNFTs>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): SparrowNFTs;
    connect(signer: Signer): SparrowNFTs__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SparrowNFTs;
}
//# sourceMappingURL=SparrowNFTs__factory.d.ts.map