"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const SparrowStaking_json_1 = __importDefault(require("./abi/injeolmi-staking/artifacts/contracts/SparrowStaking.sol/SparrowStaking.json"));
const Contract_1 = __importDefault(require("./Contract"));
const InjeolmiContract_1 = __importDefault(require("./InjeolmiContract"));
class SparrowStakingContract extends Contract_1.default {
    constructor() {
        super("0xE93c6A2A537773479A49A27563Eb0975C690440E", SparrowStaking_json_1.default.abi);
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
    async withdrawReward(ids) {
        const amounts = [];
        for (const id of ids) {
            amounts.push(ethers_1.constants.MaxUint256);
        }
        await this.runWalletMethod("withdrawReward", ids, amounts);
    }
    async withdrawableReward(ids) {
        return ethers_1.BigNumber.from(await this.runMethod("withdrawableReward", ids));
    }
}
exports.default = new SparrowStakingContract();
//# sourceMappingURL=SparrowStakingContract%20copy.js.map