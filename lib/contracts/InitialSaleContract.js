"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const InitialSale_json_1 = __importDefault(require("./abi/injeolmi-v2/artifacts/contracts/InitialSale.sol/InitialSale.json"));
const Contract_1 = __importDefault(require("./Contract"));
class InitialSaleContract extends Contract_1.default {
    constructor() {
        super("0x4e911c7284981Bf6Fc0A6f4cb3d7790d7A43D413", InitialSale_json_1.default.abi);
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
exports.default = new InitialSaleContract();
//# sourceMappingURL=InitialSaleContract.js.map