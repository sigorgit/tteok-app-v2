"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventcontainer_1 = __importDefault(require("eventcontainer"));
const ExtWallet_1 = __importDefault(require("../klaytn/ExtWallet"));
const Klaytn_1 = __importDefault(require("../klaytn/Klaytn"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
class Contract extends eventcontainer_1.default {
    constructor(address, abi) {
        super();
        this.address = address;
        this.abi = abi;
        this.contract = Klaytn_1.default.createContract(address, abi);
    }
    findMethodABI(name) {
        return this.abi.filter((abi) => abi.name === name && abi.type === "function")[0];
    }
    async loadExtWalletContract() {
        if (await ExtWallet_1.default.loadChainId() !== 8217) {
            this.fireEvent("wrongNetwork");
            console.error("Wrong Network");
        }
        else {
            if (await ExtWallet_1.default.connected() !== true) {
                await ExtWallet_1.default.connect();
            }
            if (this.walletContract === undefined) {
                this.walletContract = ExtWallet_1.default.createContract(this.address, this.abi);
            }
            return this.walletContract;
        }
    }
    async runMethod(methodName, ...params) {
        return await this.contract.methods[methodName](...params).call();
    }
    async runWalletMethod(methodName, ...params) {
        if (ExtWallet_1.default.installed === true) {
            const from = await Wallet_1.default.loadAddress();
            const contract = await this.loadExtWalletContract();
            await contract?.methods[methodName](...params).send({ from, gas: 1500000 });
        }
        else {
            alert("카이카스가 필요합니다. 카이카스를 설치해주시기 바랍니다.");
            return new Promise(() => { });
        }
    }
    async runWalletMethodWithValue(value, methodName, ...params) {
        if (ExtWallet_1.default.installed === true) {
            const from = await Wallet_1.default.loadAddress();
            const contract = await this.loadExtWalletContract();
            await contract?.methods[methodName](...params).send({ from, gas: 1500000, value });
        }
        else {
            alert("카이카스가 필요합니다. 카이카스를 설치해주시기 바랍니다.");
            return new Promise(() => { });
        }
    }
}
exports.default = Contract;
//# sourceMappingURL=Contract.js.map