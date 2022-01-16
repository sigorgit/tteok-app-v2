import Contract from "./Contract";
declare class YearendAirdropContract extends Contract {
    constructor();
    toReceive(address: string): Promise<boolean>;
    receiveNew(): Promise<void>;
}
declare const _default: YearendAirdropContract;
export default _default;
//# sourceMappingURL=YearendAirdropContract.d.ts.map