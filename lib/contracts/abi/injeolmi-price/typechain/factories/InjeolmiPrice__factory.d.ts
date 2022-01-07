import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { InjeolmiPrice } from "../InjeolmiPrice";
export declare class InjeolmiPrice__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_ijm: string, _pool: string, overrides?: Overrides): Promise<InjeolmiPrice>;
    getDeployTransaction(_ijm: string, _pool: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): InjeolmiPrice;
    connect(signer: Signer): InjeolmiPrice__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): InjeolmiPrice;
}
//# sourceMappingURL=InjeolmiPrice__factory.d.ts.map