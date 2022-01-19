import { BigNumber, BigNumberish, constants } from "ethers";
import Wallet from "../klaytn/Wallet";
import SInjeolmiArtifact from "./abi/injeolmi-staking/artifacts/contracts/SInjeolmi.sol/SInjeolmi.json";
import InjeolmiContract from "./InjeolmiContract";
import KIP7Contract from "./standard/KIP7Contract";

class SInjeolmiContract extends KIP7Contract {

    constructor() {
        super("0x485Ec445AD112aCc33909bc7918f9FE282a1c330", SInjeolmiArtifact.abi);
    }

    public async stake(amount: BigNumberish) {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            if ((await InjeolmiContract.allowance(owner, this.address)).lt(amount)) {
                await InjeolmiContract.approve(this.address, constants.MaxUint256);
                await new Promise<void>((resolve) => {
                    setTimeout(async () => {
                        await this.runWalletMethod("stake", amount);
                        resolve();
                    }, 2000);
                });
            } else {
                await this.runWalletMethod("stake", amount);
            }
        }
    }

    public async unstake(amount: BigNumberish) {
        await this.runWalletMethod("unstake", await this.runMethod("amountToWithdrawIJM", amount));
    }

    public async withdrawableIJM(user: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("withdrawableIJM", user));
    }
}

export default new SInjeolmiContract();
