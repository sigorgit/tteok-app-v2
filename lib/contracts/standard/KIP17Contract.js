"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Contract_1 = __importDefault(require("../Contract"));
class KIP17Contract extends Contract_1.default {
    constructor(address, abi) {
        super(address, abi);
    }
    async balanceOf(owner) {
        return ethers_1.BigNumber.from(await this.runMethod("balanceOf", owner));
    }
}
exports.default = KIP17Contract;
//# sourceMappingURL=KIP17Contract.js.map