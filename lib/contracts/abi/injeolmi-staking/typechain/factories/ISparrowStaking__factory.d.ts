import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISparrowStaking, ISparrowStakingInterface } from "../ISparrowStaking";
export declare class ISparrowStaking__factory {
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
    static createInterface(): ISparrowStakingInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISparrowStaking;
}
//# sourceMappingURL=ISparrowStaking__factory.d.ts.map