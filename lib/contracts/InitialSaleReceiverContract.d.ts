import Contract from "./Contract";
declare class InitialSaleReceiverContract extends Contract {
    constructor();
    received(address: string): Promise<boolean>;
    receiveNew(): Promise<void>;
}
declare const _default: InitialSaleReceiverContract;
export default _default;
//# sourceMappingURL=InitialSaleReceiverContract.d.ts.map