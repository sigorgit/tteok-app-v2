import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IKIP7Receiver, IKIP7ReceiverInterface } from "../IKIP7Receiver";
export declare class IKIP7Receiver__factory {
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
    static createInterface(): IKIP7ReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IKIP7Receiver;
}
//# sourceMappingURL=IKIP7Receiver__factory.d.ts.map