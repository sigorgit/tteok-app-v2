"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const ethers_1 = require("ethers");
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const TteokmillSparrowsMentor_json_1 = __importDefault(require("./abi/sparrows/artifacts/contracts/TteokmillSparrowsMentor.sol/TteokmillSparrowsMentor.json"));
const Contract_1 = __importDefault(require("./Contract"));
const InjeolmiContract_1 = __importDefault(require("./InjeolmiContract"));
const TicketContract_1 = __importDefault(require("./TicketContract"));
class SparrowsMentorContract extends Contract_1.default {
    constructor() {
        super("0xF37229479d61F8e0fbB71b7AD542fc6EC7046375", TteokmillSparrowsMentor_json_1.default.abi);
    }
    async price() {
        return bignumber_1.BigNumber.from(await this.runMethod("price"));
    }
    async changeMent(id, ment) {
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            const price = await this.price();
            if ((await InjeolmiContract_1.default.allowance(owner, this.address)).lt(price)) {
                await InjeolmiContract_1.default.approve(this.address, ethers_1.constants.MaxUint256);
                await new Promise((resolve) => {
                    setTimeout(async () => {
                        await this.runWalletMethod("changeMent", id, ment);
                        resolve();
                    }, 2000);
                });
            }
            else {
                await this.runWalletMethod("changeMent", id, ment);
            }
        }
    }
    async changeMentUsingTicket(id, ment) {
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            if (await TicketContract_1.default.isApprovedForAll(owner, this.address) !== true) {
                await TicketContract_1.default.setApprovalForAll(this.address, true);
            }
            await this.runWalletMethod("changeMentUsingTicket", id, ment);
        }
    }
}
exports.default = new SparrowsMentorContract();
//# sourceMappingURL=SparrowsMentorContract.js.map