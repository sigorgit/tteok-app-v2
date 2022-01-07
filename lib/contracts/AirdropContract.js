"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Airdrop_json_1 = __importDefault(require("./abi/injeolmi/artifacts/contracts/Airdrop.sol/Airdrop.json"));
const Contract_1 = __importDefault(require("./Contract"));
class AirdropContract extends Contract_1.default {
    constructor() {
        super("0x1dA9E7adfB6817D42b1c9a5321992B1EF97701Ab", Airdrop_json_1.default.abi);
    }
}
exports.default = new AirdropContract();
//# sourceMappingURL=AirdropContract.js.map