"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const FirstcomeAirdrop_json_1 = __importDefault(require("./abi/injeolmi/artifacts/contracts/FirstcomeAirdrop.sol/FirstcomeAirdrop.json"));
const Contract_1 = __importDefault(require("./Contract"));
class FirstcomeAirdropContract extends Contract_1.default {
    constructor() {
        super("0x7D197D87Aa79E27bcdc3a62f819329deC6F81Ec2", FirstcomeAirdrop_json_1.default.abi);
    }
    async airdropAmount() {
        return bignumber_1.BigNumber.from(await this.runMethod("airdropAmount"));
    }
    async season() {
        return bignumber_1.BigNumber.from(await this.runMethod("season"));
    }
    async dropped(season, address) {
        return await this.runMethod("dropped", season, address);
    }
    async airdrop() {
        await this.runWalletMethod("airdrop");
    }
}
exports.default = new FirstcomeAirdropContract();
//# sourceMappingURL=FirstcomeAirdropContract.js.map