"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Contract_1 = __importDefault(require("../Contract"));
class KIP37Contract extends Contract_1.default {
    constructor(address, abi) {
        super(address, abi);
    }
    async getTotalSupply(id) {
        return ethers_1.BigNumber.from(await this.runMethod("totalSupply", id));
    }
    async balanceOf(owner, id) {
        return ethers_1.BigNumber.from(await this.runMethod("balanceOf", owner, id));
    }
    async balanceOfBatch(owners, ids) {
        const _results = await this.runMethod("balanceOfBatch", owners, ids);
        const results = [];
        for (const result of _results) {
            results.push(ethers_1.BigNumber.from(result));
        }
        return results;
    }
    async isApprovedForAll(owner, operator) {
        return await this.runMethod("isApprovedForAll", owner, operator);
    }
    async setApprovalForAll(operator, approved) {
        await this.runWalletMethod("setApprovalForAll", operator, approved);
    }
}
exports.default = KIP37Contract;
//# sourceMappingURL=KIP37Contract.js.map