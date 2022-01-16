import { BigNumber, constants } from "ethers";
import Wallet from "../klaytn/Wallet";
import Contract from "./Contract";
import InjeolmiContract from "./InjeolmiContract";
import InjeolmiPriceEstimatorContract from "./InjeolmiPriceEstimatorContract";

class KlayswapContract extends Contract {

    constructor() {
        super("0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654", require("./KlayswapContractABI.json"));
    }

    public async buy(amount: BigNumber) {
        const klay = (await InjeolmiPriceEstimatorContract.estimatePos(amount)).mul(100).div(99);
        await this.runWalletMethodWithValue(klay, "exchangeKlayNeg", "0x0268dbed3832b87582B1FA508aCF5958cbb1cd74", amount, []);
    }

    public async sell(amount: BigNumber) {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            if ((await InjeolmiContract.allowance(owner, this.address)).lt(amount)) {
                await InjeolmiContract.approve(this.address, amount);
                await new Promise<void>((resolve) => {
                    setTimeout(async () => {
                        const klay = await InjeolmiPriceEstimatorContract.estimatePos(amount);
                        await this.runWalletMethod("exchangeKctPos", "0x0268dbed3832b87582B1FA508aCF5958cbb1cd74", amount, constants.AddressZero, klay.mul(99).div(100), []);
                        resolve();
                    }, 2000);
                });
            } else {
                const klay = await InjeolmiPriceEstimatorContract.estimatePos(amount);
                await this.runWalletMethod("exchangeKctPos", "0x0268dbed3832b87582B1FA508aCF5958cbb1cd74", amount, constants.AddressZero, klay.mul(99).div(100), []);
            }
        }
    }
}

export default new KlayswapContract();
