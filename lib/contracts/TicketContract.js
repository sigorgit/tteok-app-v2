"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SparrowChangeMentTickets_json_1 = __importDefault(require("./abi/ticket/artifacts/contracts/SparrowChangeMentTickets.sol/SparrowChangeMentTickets.json"));
const KIP37Contract_1 = __importDefault(require("./standard/KIP37Contract"));
class TicketContract extends KIP37Contract_1.default {
    constructor() {
        super("0x27d533d6fcc846ed00e11be4289ae79db750f299", SparrowChangeMentTickets_json_1.default.abi);
    }
}
exports.default = new TicketContract();
//# sourceMappingURL=TicketContract.js.map