import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFactory, IFactoryInterface } from "../IFactory";
export declare class IFactory__factory {
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
    static createInterface(): IFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFactory;
}
//# sourceMappingURL=IFactory__factory.d.ts.map