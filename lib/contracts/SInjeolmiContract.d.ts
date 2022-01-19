import { BigNumber, BigNumberish } from "ethers";
import KIP7Contract from "./standard/KIP7Contract";
declare class SInjeolmiContract extends KIP7Contract {
    constructor();
    stake(amount: BigNumberish): Promise<void>;
    unstake(amount: BigNumberish): Promise<void>;
    withdrawableIJM(user: string): Promise<BigNumber>;
}
declare const _default: SInjeolmiContract;
export default _default;
//# sourceMappingURL=SInjeolmiContract.d.ts.map