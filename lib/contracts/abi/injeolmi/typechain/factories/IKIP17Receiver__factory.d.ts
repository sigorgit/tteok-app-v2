import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IKIP17Receiver, IKIP17ReceiverInterface } from "../IKIP17Receiver";
export declare class IKIP17Receiver__factory {
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
    static createInterface(): IKIP17ReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IKIP17Receiver;
}
//# sourceMappingURL=IKIP17Receiver__factory.d.ts.map