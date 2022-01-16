import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC1155Receiver, IERC1155ReceiverInterface } from "../IERC1155Receiver";
export declare class IERC1155Receiver__factory {
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
    static createInterface(): IERC1155ReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC1155Receiver;
}
//# sourceMappingURL=IERC1155Receiver__factory.d.ts.map