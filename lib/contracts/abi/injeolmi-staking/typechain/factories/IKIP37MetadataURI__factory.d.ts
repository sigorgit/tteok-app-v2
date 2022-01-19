import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IKIP37MetadataURI, IKIP37MetadataURIInterface } from "../IKIP37MetadataURI";
export declare class IKIP37MetadataURI__factory {
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
    static createInterface(): IKIP37MetadataURIInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IKIP37MetadataURI;
}
//# sourceMappingURL=IKIP37MetadataURI__factory.d.ts.map