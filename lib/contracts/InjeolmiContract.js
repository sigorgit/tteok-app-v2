"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Injeolmi_json_1 = __importDefault(require("./abi/injeolmi/artifacts/contracts/Injeolmi.sol/Injeolmi.json"));
const KIP7Contract_1 = __importDefault(require("./standard/KIP7Contract"));
class InjeolmiContract extends KIP7Contract_1.default {
    constructor() {
        super("0x0268dbed3832b87582B1FA508aCF5958cbb1cd74", Injeolmi_json_1.default.abi);
    }
}
exports.default = new InjeolmiContract();
//# sourceMappingURL=InjeolmiContract.js.map