"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const InjeolmiPool_json_1 = __importDefault(require("./abi/injeolmi/artifacts/contracts/InjeolmiPool.sol/InjeolmiPool.json"));
const Contract_1 = __importDefault(require("./Contract"));
const InjeolmiContract_1 = __importDefault(require("./InjeolmiContract"));
class InjeolmiPoolContract extends Contract_1.default {
    constructor() {
        super("0xcefaBd4B6544422D74a4645CDd0a3624E36661AA", InjeolmiPool_json_1.default.abi);
    }
    async swapToIJM(value) {
        await this.runWalletMethodWithValue(value, "swapToIJM");
    }
    async swapToKlay(amount) {
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            if ((await InjeolmiContract_1.default.allowance(owner, this.address)).lt(amount)) {
                await InjeolmiContract_1.default.approve(this.address, amount);
                await new Promise((resolve) => {
                    setTimeout(async () => {
                        await this.runWalletMethod("swapToKlay", amount);
                        resolve();
                    }, 2000);
                });
            }
            else {
                await this.runWalletMethod("swapToKlay", amount);
            }
        }
    }
}
exports.default = new InjeolmiPoolContract();
//# sourceMappingURL=InjeolmiPoolContract.js.map