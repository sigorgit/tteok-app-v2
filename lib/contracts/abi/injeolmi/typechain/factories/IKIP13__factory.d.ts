import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IKIP13, IKIP13Interface } from "../IKIP13";
export declare class IKIP13__factory {
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
    static createInterface(): IKIP13Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IKIP13;
}
//# sourceMappingURL=IKIP13__factory.d.ts.map