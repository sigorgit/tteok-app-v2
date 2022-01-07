import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { YearendAirdrop } from "../YearendAirdrop";
export declare class YearendAirdrop__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<YearendAirdrop>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): YearendAirdrop;
    connect(signer: Signer): YearendAirdrop__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): YearendAirdrop;
}
//# sourceMappingURL=YearendAirdrop__factory.d.ts.map