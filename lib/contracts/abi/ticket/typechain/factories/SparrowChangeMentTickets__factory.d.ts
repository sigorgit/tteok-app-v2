import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { SparrowChangeMentTickets } from "../SparrowChangeMentTickets";
export declare class SparrowChangeMentTickets__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<SparrowChangeMentTickets>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): SparrowChangeMentTickets;
    connect(signer: Signer): SparrowChangeMentTickets__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SparrowChangeMentTickets;
}
//# sourceMappingURL=SparrowChangeMentTickets__factory.d.ts.map