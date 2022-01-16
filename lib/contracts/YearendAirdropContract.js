"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const YearendAirdrop_json_1 = __importDefault(require("./abi/injeolmi-v2/artifacts/contracts/YearendAirdrop.sol/YearendAirdrop.json"));
const Contract_1 = __importDefault(require("./Contract"));
class YearendAirdropContract extends Contract_1.default {
    constructor() {
        super("0x8103Bf97Fa59210e30084442d7141e1a3e2D76c0", YearendAirdrop_json_1.default.abi);
    }
    async toReceive(address) {
        return await this.runMethod("toReceive", address);
    }
    async receiveNew() {
        await this.runWalletMethod("receiveNew");
    }
}
exports.default = new YearendAirdropContract();
//# sourceMappingURL=YearendAirdropContract.js.map