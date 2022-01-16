import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IKIP17Full, IKIP17FullInterface } from "../IKIP17Full";
export declare class IKIP17Full__factory {
    static readonly abi: ({
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
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    })[];
    static createInterface(): IKIP17FullInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IKIP17Full;
}
//# sourceMappingURL=IKIP17Full__factory.d.ts.map