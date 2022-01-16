import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IKIP37Receiver, IKIP37ReceiverInterface } from "../IKIP37Receiver";
export declare class IKIP37Receiver__factory {
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
    static createInterface(): IKIP37ReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IKIP37Receiver;
}
//# sourceMappingURL=IKIP37Receiver__factory.d.ts.map