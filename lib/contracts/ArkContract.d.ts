import { BigNumber } from "ethers";
import Contract from "./Contract";
declare class ArkContract extends Contract {
    constructor();
    records(address: string): Promise<BigNumber>;
    sendOld(): Promise<void>;
}
declare const _default: ArkContract;
export default _default;
//# sourceMappingURL=ArkContract.d.ts.map