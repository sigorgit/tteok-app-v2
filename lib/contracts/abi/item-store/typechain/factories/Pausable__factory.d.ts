import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Pausable, PausableInterface } from "../Pausable";
export declare class Pausable__factory {
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
        inputs: never[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
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
    static createInterface(): PausableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Pausable;
}
//# sourceMappingURL=Pausable__factory.d.ts.map