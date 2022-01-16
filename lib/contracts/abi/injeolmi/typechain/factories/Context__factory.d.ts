import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Context, ContextInterface } from "../Context";
export declare class Context__factory {
    static readonly abi: {
        inputs: never[];
        payable: boolean;
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ContextInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Context;
}
//# sourceMappingURL=Context__factory.d.ts.map