import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { FirstcomeAirdrop } from "../FirstcomeAirdrop";
export declare class FirstcomeAirdrop__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_ijm: string, overrides?: Overrides): Promise<FirstcomeAirdrop>;
    getDeployTransaction(_ijm: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): FirstcomeAirdrop;
    connect(signer: Signer): FirstcomeAirdrop__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): FirstcomeAirdrop;
}
//# sourceMappingURL=FirstcomeAirdrop__factory.d.ts.map