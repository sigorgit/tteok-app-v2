import { BigNumber } from "@ethersproject/bignumber";
import Wallet from "../klaytn/Wallet";
import InjeolmiPoolArtifact from "./abi/injeolmi/artifacts/contracts/InjeolmiPool.sol/InjeolmiPool.json";
import Contract from "./Contract";
import InjeolmiContract from "./InjeolmiContract";

class InjeolmiPoolContract extends Contract {

    constructor() {
        super("0xcefaBd4B6544422D74a4645CDd0a3624E36661AA", InjeolmiPoolArtifact.abi);
    }

    public async swapToIJM(value: BigNumber) {
        await this.runWalletMethodWithValue(value, "swapToIJM");
    }

    public async swapToKlay(amount: BigNumber) {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            if ((await InjeolmiContract.allowance(owner, this.address)).lt(amount)) {
                await InjeolmiContract.approve(this.address, amount);
                await new Promise<void>((resolve) => {
                    setTimeout(async () => {
                        await this.runWalletMethod("swapToKlay", amount);
                        resolve();
                    }, 2000);
                });
            } else {
                await this.runWalletMethod("swapToKlay", amount);
            }
        }
    }
}

export default new InjeolmiPoolContract();
