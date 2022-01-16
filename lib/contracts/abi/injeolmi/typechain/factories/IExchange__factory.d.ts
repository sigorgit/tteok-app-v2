import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IExchange, IExchangeInterface } from "../IExchange";
export declare class IExchange__factory {
    static readonly abi: {
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IExchangeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IExchange;
}
//# sourceMappingURL=IExchange__factory.d.ts.map