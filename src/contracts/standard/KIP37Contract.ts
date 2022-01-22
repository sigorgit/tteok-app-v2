import { BigNumber, BigNumberish, ContractInterface } from "ethers";
import Contract from "../Contract";

export default abstract class KIP37Contract extends Contract {

    constructor(address: string, abi: ContractInterface) {
        super(address, abi);
    }

    public async getTotalSupply(id: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalSupply", id));
    }

    public async balanceOf(owner: string, id: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("balanceOf", owner, id));
    }

    public async balanceOfBatch(owners: string[], ids: BigNumberish[]): Promise<BigNumber[]> {
        const _results = await this.runMethod("balanceOfBatch", owners, ids);
        const results: BigNumber[] = [];
        for (const result of _results) {
            results.push(BigNumber.from(result));
        }
        return results;
    }

    public async isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return await this.runMethod("isApprovedForAll", owner, operator);
    }

    public async setApprovalForAll(operator: string, approved: boolean) {
        await this.runWalletMethod("setApprovalForAll", operator, approved);
    }
}
