import { BigNumber, ContractInterface } from "ethers";
import Contract from "../Contract";
export default class KIP17Contract extends Contract {
    constructor(address: string, abi: ContractInterface);
    balanceOf(owner: string): Promise<BigNumber>;
}
//# sourceMappingURL=KIP17Contract.d.ts.map