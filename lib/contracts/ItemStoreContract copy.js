"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const ItemStore_json_1 = __importDefault(require("./abi/item-store/artifacts/contracts/ItemStore.sol/ItemStore.json"));
const Contract_1 = __importDefault(require("./Contract"));
class ItemStoreContract extends Contract_1.default {
    constructor() {
        super("0x1F7DD89aEd117F8F6390aA5d52f3dA098c1Cc4F8", ItemStore_json_1.default.abi);
    }
    async itemPrices(id) {
        return bignumber_1.BigNumber.from(await this.runMethod("itemPrices", id));
    }
    async buyItems(ids) {
        await this.runWalletMethod("buyItems", ids);
    }
}
exports.default = new ItemStoreContract();
//# sourceMappingURL=ItemStoreContract%20copy.js.map