import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { InitialSaleReceiver } from "../InitialSaleReceiver";
export declare class InitialSaleReceiver__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<InitialSaleReceiver>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): InitialSaleReceiver;
    connect(signer: Signer): InitialSaleReceiver__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): InitialSaleReceiver;
}
//# sourceMappingURL=InitialSaleReceiver__factory.d.ts.map