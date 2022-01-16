"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const Config_1 = __importDefault(require("../../Config"));
const Contract_1 = __importDefault(require("../Contract"));
class MixPriceEstimatorContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.MixPriceEstimator, require("./MixPriceEstimatorContractABI.json"));
    }
    async estimatePos(amountIn) {
        return bignumber_1.BigNumber.from(await this.runMethod("estimatePos", amountIn));
    }
}
exports.default = new MixPriceEstimatorContract();
//# sourceMappingURL=MixPriceEstimatorContract.js.map