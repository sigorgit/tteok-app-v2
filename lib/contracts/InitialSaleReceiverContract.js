"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InitialSaleReceiver_json_1 = __importDefault(require("./abi/injeolmi-v2/artifacts/contracts/InitialSaleReceiver.sol/InitialSaleReceiver.json"));
const Contract_1 = __importDefault(require("./Contract"));
class InitialSaleReceiverContract extends Contract_1.default {
    constructor() {
        super("0x3483B88A4874c257e87324CBC8Edeb99e75E6902", InitialSaleReceiver_json_1.default.abi);
    }
    async received(address) {
        return await this.runMethod("received", address);
    }
    async receiveNew() {
        await this.runWalletMethod("receiveNew");
    }
}
exports.default = new InitialSaleReceiverContract();
//# sourceMappingURL=InitialSaleReceiverContract.js.map