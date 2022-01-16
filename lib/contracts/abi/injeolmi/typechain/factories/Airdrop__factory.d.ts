import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { Airdrop } from "../Airdrop";
export declare class Airdrop__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Airdrop>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Airdrop;
    connect(signer: Signer): Airdrop__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Airdrop;
}
//# sourceMappingURL=Airdrop__factory.d.ts.map