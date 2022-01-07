import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import Contract from "./Contract";
declare class FirstcomeAirdropContract extends Contract {
    constructor();
    airdropAmount(): Promise<BigNumber>;
    season(): Promise<BigNumber>;
    dropped(season: BigNumberish, address: string): Promise<boolean>;
    airdrop(): Promise<void>;
}
declare const _default: FirstcomeAirdropContract;
export default _default;
//# sourceMappingURL=FirstcomeAirdropContract.d.ts.map