"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Contract_1 = __importDefault(require("./Contract"));
const InjeolmiContract_1 = __importDefault(require("./InjeolmiContract"));
const InjeolmiPriceEstimatorContract_1 = __importDefault(require("./InjeolmiPriceEstimatorContract"));
class KlayswapContract extends Contract_1.default {
    constructor() {
        super("0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654", require("./KlayswapContractABI.json"));
    }
    async buy(amount) {
        const klay = (await InjeolmiPriceEstimatorContract_1.default.estimatePos(amount)).mul(100).div(99);
        await this.runWalletMethodWithValue(klay, "exchangeKlayNeg", "0x0268dbed3832b87582B1FA508aCF5958cbb1cd74", amount, []);
    }
    async sell(amount) {
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            if ((await InjeolmiContract_1.default.allowance(owner, this.address)).lt(amount)) {
                await InjeolmiContract_1.default.approve(this.address, amount);
                await new Promise((resolve) => {
                    setTimeout(async () => {
                        const klay = await InjeolmiPriceEstimatorContract_1.default.estimatePos(amount);
                        await this.runWalletMethod("exchangeKctPos", "0x0268dbed3832b87582B1FA508aCF5958cbb1cd74", amount, ethers_1.constants.AddressZero, klay.mul(99).div(100), []);
                        resolve();
                    }, 2000);
                });
            }
            else {
                const klay = await InjeolmiPriceEstimatorContract_1.default.estimatePos(amount);
                await this.runWalletMethod("exchangeKctPos", "0x0268dbed3832b87582B1FA508aCF5958cbb1cd74", amount, ethers_1.constants.AddressZero, klay.mul(99).div(100), []);
            }
        }
    }
}
exports.default = new KlayswapContract();
//# sourceMappingURL=KlayswapContract.js.map