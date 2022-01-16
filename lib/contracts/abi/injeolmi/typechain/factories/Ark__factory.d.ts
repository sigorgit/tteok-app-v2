import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { Ark } from "../Ark";
export declare class Ark__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_oldIjm: string, overrides?: Overrides): Promise<Ark>;
    getDeployTransaction(_oldIjm: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): Ark;
    connect(signer: Signer): Ark__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Ark;
}
//# sourceMappingURL=Ark__factory.d.ts.map