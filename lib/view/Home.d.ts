import { View, ViewParams } from "skyrouter";
export default class Home implements View {
    private container;
    private interval;
    private priceDisplay;
    private balanceDisplay;
    private totalStakedDisplay;
    private withdrawableDisplay;
    private hardforkDisplay;
    private initialSaleDisplay;
    private yearendDisplay;
    private buyInput;
    private buyResult;
    private sellInput;
    private sellResult;
    private stakeInput;
    private unstakeInput;
    constructor();
    private refresh;
    private load;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=Home.d.ts.map