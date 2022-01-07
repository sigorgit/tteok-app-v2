"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Ark_json_1 = __importDefault(require("./abi/injeolmi-v2/artifacts/contracts/Ark.sol/Ark.json"));
const Contract_1 = __importDefault(require("./Contract"));
const InjeolmiContract_1 = __importDefault(require("./InjeolmiContract"));
class ArkContract extends Contract_1.default {
    constructor() {
        super("0xb532a6A7a5Fbf64DA0FDc1333FBB0EfA83D913D1", Ark_json_1.default.abi);
    }
    async records(address) {
        return ethers_1.BigNumber.from(await this.runMethod("records", address));
    }
    async sendOld() {
        await InjeolmiContract_1.default.approve(this.address, ethers_1.constants.MaxUint256);
        setTimeout(async () => {
            await this.runWalletMethod("sendOld");
            setTimeout(() => {
                alert("이전 완료 ㅊㅋㅊㅋㅊ 7일부터 언제라도 뉴 인절미를 받아갈 수 있어~~ 천천히왕 ㅎㅎ");
            }, 2000);
        }, 2000);
    }
}
exports.default = new ArkContract();
//# sourceMappingURL=ArkContract.js.map