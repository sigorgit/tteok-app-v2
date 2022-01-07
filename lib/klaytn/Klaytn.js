"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
class Klaytn {
    constructor() {
        this.caver = new window.Caver(new window.Caver.providers.WebsocketProvider("wss://klaytn-node.klu.bs:9091"));
    }
    createContract(address, abi) {
        return this.caver.contract.create(abi, address);
    }
    async balanceOf(address) {
        return bignumber_1.BigNumber.from(await this.caver.klay.getBalance(address));
    }
}
exports.default = new Klaytn();
//# sourceMappingURL=Klaytn.js.map