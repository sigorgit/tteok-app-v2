"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const TteokmillSparrows_json_1 = __importDefault(require("./abi/sparrows/artifacts/contracts/TteokmillSparrows.sol/TteokmillSparrows.json"));
const KIP17Contract_1 = __importDefault(require("./standard/KIP17Contract"));
class SparrowsContract extends KIP17Contract_1.default {
    constructor() {
        super("0x17c4758C973d0F850A8E1910BD9649699e056cb6", TteokmillSparrows_json_1.default.abi);
    }
    async tokenOfOwnerByIndex(owner, index) {
        return ethers_1.BigNumber.from(await this.runMethod("tokenOfOwnerByIndex", owner, index));
    }
    async ments(id) {
        return await this.runMethod("ments", id);
    }
}
exports.default = new SparrowsContract();
//# sourceMappingURL=SparrowsContract.js.map