"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const superagent_1 = __importDefault(require("superagent"));
class KlubsLoader {
    async loadMetadata(addr, id) {
        let result = await superagent_1.default.get(`https://api.klu.bs/v2/pfp/${addr}/${id}/metadata`);
        return result.body;
    }
}
exports.default = new KlubsLoader();
//# sourceMappingURL=KlubsLoader.js.map