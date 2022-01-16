import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { InitialSale } from "../InitialSale";
export declare class InitialSale__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<InitialSale>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): InitialSale;
    connect(signer: Signer): InitialSale__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): InitialSale;
}
//# sourceMappingURL=InitialSale__factory.d.ts.map