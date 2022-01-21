"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const ethers_1 = require("ethers");
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const ItemStore_json_1 = __importDefault(require("./abi/item-store/artifacts/contracts/ItemStore.sol/ItemStore.json"));
const Contract_1 = __importDefault(require("./Contract"));
const InjeolmiContract_1 = __importDefault(require("./InjeolmiContract"));
class ItemStoreContract extends Contract_1.default {
    constructor() {
        super("0x1F7DD89aEd117F8F6390aA5d52f3dA098c1Cc4F8", ItemStore_json_1.default.abi);
    }
    async itemPrices(id) {
        return bignumber_1.BigNumber.from(await this.runMethod("itemPrices", id));
    }
    async nonces(address) {
        return bignumber_1.BigNumber.from(await this.runMethod("nonces", address));
    }
    async buyItems(id) {
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            const price = await this.itemPrices(id);
            if ((await InjeolmiContract_1.default.allowance(owner, this.address)).lt(price)) {
                await InjeolmiContract_1.default.approve(this.address, ethers_1.constants.MaxUint256);
                await new Promise((resolve) => {
                    setTimeout(async () => {
                        await this.runWalletMethod("buyItems", [id]);
                        resolve();
                    }, 2000);
                });
            }
            else {
                await this.runWalletMethod("buyItems", [id]);
            }
        }
    }
}
exports.default = new ItemStoreContract();
//# sourceMappingURL=ItemStoreContract.js.map