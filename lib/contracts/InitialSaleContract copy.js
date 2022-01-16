"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const InitialSaleReceiver_json_1 = __importDefault(require("./abi/injeolmi-v2/artifacts/contracts/InitialSaleReceiver.sol/InitialSaleReceiver.json"));
const Contract_1 = __importDefault(require("./Contract"));
class InitialSaleReceiverContract extends Contract_1.default {
    constructor() {
        super("0x3483B88A4874c257e87324CBC8Edeb99e75E6902", InitialSaleReceiver_json_1.default.abi);
    }
    async total() {
        return bignumber_1.BigNumber.from(await this.runMethod("total"));
    }
    async bought(address) {
        return bignumber_1.BigNumber.from(await this.runMethod("bought", address));
    }
    async buy(value) {
        const amount = value.mul("1000000000000000000").div("144374553246136709");
        await this.runWalletMethodWithValue(amount.mul("144374553246136709").div("1000000000000000000"), "buy", amount);
    }
}
exports.default = new InitialSaleReceiverContract();
//# sourceMappingURL=InitialSaleContract%20copy.js.map