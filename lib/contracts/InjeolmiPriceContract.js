"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const InjeolmiPrice_json_1 = __importDefault(require("./abi/injeolmi-price/artifacts/contracts/InjeolmiPrice.sol/InjeolmiPrice.json"));
const Contract_1 = __importDefault(require("./Contract"));
class InjeolmiPriceContract extends Contract_1.default {
    constructor() {
        super("0x6E22cd771d0BBC18501F3113e01fD95947299Ca1", InjeolmiPrice_json_1.default.abi);
    }
    async price() {
        return bignumber_1.BigNumber.from(await this.runMethod("price"));
    }
}
exports.default = new InjeolmiPriceContract();
//# sourceMappingURL=InjeolmiPriceContract.js.map