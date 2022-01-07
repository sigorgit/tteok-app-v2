"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Injeolmi_json_1 = __importDefault(require("./abi/injeolmi/artifacts/contracts/Injeolmi.sol/Injeolmi.json"));
const KIP7Contract_1 = __importDefault(require("./standard/KIP7Contract"));
class InjeolmiContract extends KIP7Contract_1.default {
    constructor() {
        super("0x9CFc059F64D664F92f3d0329844B8ccca4E5215B", Injeolmi_json_1.default.abi);
    }
}
exports.default = new InjeolmiContract();
//# sourceMappingURL=InjeolmiContract.js.map