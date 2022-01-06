import { BigNumber, BigNumberish, ContractInterface } from "ethers";
import Contract from "../Contract";

export default abstract class KIP37Contract extends Contract {

    constructor(address: string, abi: ContractInterface) {
        super(address, abi);
    }

    public async getTotalSupply(id: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalSupply", id));
    }
}
