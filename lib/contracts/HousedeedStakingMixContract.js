"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const SparrowStakingMix_json_1 = __importDefault(require("./abi/injeolmi-staking/artifacts/contracts/SparrowStakingMix.sol/SparrowStakingMix.json"));
const Contract_1 = __importDefault(require("./Contract"));
class HousedeedStakingMixContract extends Contract_1.default {
    constructor() {
        super("0x052e7df5868dF854571880FC4DEF7F80622F80E8", SparrowStakingMix_json_1.default.abi);
    }
    async withdrawReward(ids) {
        await this.runWalletMethod("withdrawReward", ids);
    }
    async withdrawableReward(ids) {
        return ethers_1.BigNumber.from(await this.runMethod("withdrawableReward", ids));
    }
}
exports.default = new HousedeedStakingMixContract();
//# sourceMappingURL=HousedeedStakingMixContract.js.map