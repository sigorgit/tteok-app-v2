import { BigNumber, ContractInterface } from "ethers";
import Contract from "../Contract";

export default class KIP17Contract extends Contract {

    constructor(address: string, abi: ContractInterface) {
        super(address, abi);
    }

    public async balanceOf(owner: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("balanceOf", owner));
    }
}
