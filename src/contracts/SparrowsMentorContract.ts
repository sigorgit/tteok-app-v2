import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { constants } from "ethers";
import Wallet from "../klaytn/Wallet";
import SparrowsMentorArtifact from "./abi/sparrows/artifacts/contracts/TteokmillSparrowsMentor.sol/TteokmillSparrowsMentor.json";
import Contract from "./Contract";
import InjeolmiContract from "./InjeolmiContract";
import TicketContract from "./TicketContract";

class SparrowsMentorContract extends Contract {

    constructor() {
        super("0x51BdD69128e591375C2b9f7395422EB1cb74356F", SparrowsMentorArtifact.abi);
    }

    public async price(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("price"));
    }

    public async changeMent(id: BigNumberish, ment: string) {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            const price = await this.price();
            if ((await InjeolmiContract.allowance(owner, this.address)).lt(price)) {
                await InjeolmiContract.approve(this.address, constants.MaxUint256);
                await new Promise<void>((resolve) => {
                    setTimeout(async () => {
                        await this.runWalletMethod("changeMent", id, ment);
                        resolve();
                    }, 2000);
                });
            } else {
                await this.runWalletMethod("changeMent", id, ment);
            }
        }
    }

    public async changeMentUsingTicket(id: BigNumberish, ment: string) {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            if (await TicketContract.isApprovedForAll(owner, this.address) !== true) {
                await TicketContract.setApprovalForAll(this.address, true);
            }
            await this.runWalletMethod("changeMentUsingTicket", id, ment);
        }
    }
}

export default new SparrowsMentorContract();
