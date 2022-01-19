"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const SInjeolmi_json_1 = __importDefault(require("./abi/injeolmi-staking/artifacts/contracts/SInjeolmi.sol/SInjeolmi.json"));
const InjeolmiContract_1 = __importDefault(require("./InjeolmiContract"));
const KIP7Contract_1 = __importDefault(require("./standard/KIP7Contract"));
class SInjeolmiContract extends KIP7Contract_1.default {
    constructor() {
        super("0x485Ec445AD112aCc33909bc7918f9FE282a1c330", SInjeolmi_json_1.default.abi);
    }
    async stake(amount) {
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            if ((await InjeolmiContract_1.default.allowance(owner, this.address)).lt(amount)) {
                await InjeolmiContract_1.default.approve(this.address, ethers_1.constants.MaxUint256);
                await new Promise((resolve) => {
                    setTimeout(async () => {
                        await this.runWalletMethod("stake", amount);
                        resolve();
                    }, 2000);
                });
            }
            else {
                await this.runWalletMethod("stake", amount);
            }
        }
    }
    async unstake(amount) {
        await this.runWalletMethod("unstake", await this.runMethod("amountToWithdrawIJM", amount));
    }
    async withdrawableIJM(user) {
        return ethers_1.BigNumber.from(await this.runMethod("withdrawableIJM", user));
    }
}
exports.default = new SInjeolmiContract();
//# sourceMappingURL=SInjeolmiContract.js.map