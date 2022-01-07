import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { Injeolmi } from "../Injeolmi";
export declare class Injeolmi__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Injeolmi>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Injeolmi;
    connect(signer: Signer): Injeolmi__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Injeolmi;
}
//# sourceMappingURL=Injeolmi__factory.d.ts.map