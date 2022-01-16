import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { KIP7Metadata, KIP7MetadataInterface } from "../KIP7Metadata";
export declare class KIP7Metadata__factory {
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
        inputs: {
            name: string;
            type: string;
        }[];
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
    static createInterface(): KIP7MetadataInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP7Metadata;
}
//# sourceMappingURL=KIP7Metadata__factory.d.ts.map