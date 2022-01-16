"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const InjeolmiPriceEstimator_json_1 = __importDefault(require("./abi/injeolmi/artifacts/contracts/InjeolmiPriceEstimator.sol/InjeolmiPriceEstimator.json"));
const Contract_1 = __importDefault(require("./Contract"));
class InjeolmiPriceEstimatorContract extends Contract_1.default {
    constructor() {
        super("0xf8d9616D4AF2C895D43D69847a64b27f3B827Cb7", InjeolmiPriceEstimator_json_1.default.abi);
    }
    async estimatePos(amountIn) {
        return bignumber_1.BigNumber.from(await this.runMethod("estimatePos", amountIn));
    }
}
exports.default = new InjeolmiPriceEstimatorContract();
//# sourceMappingURL=InjeolmiPriceEstimatorContract.js.map