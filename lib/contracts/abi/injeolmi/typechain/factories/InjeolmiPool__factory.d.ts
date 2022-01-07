import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { InjeolmiPool } from "../InjeolmiPool";
export declare class InjeolmiPool__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_ijm: string, overrides?: Overrides): Promise<InjeolmiPool>;
    getDeployTransaction(_ijm: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): InjeolmiPool;
    connect(signer: Signer): InjeolmiPool__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): InjeolmiPool;
}
//# sourceMappingURL=InjeolmiPool__factory.d.ts.map