"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventcontainer_1 = __importDefault(require("eventcontainer"));
const ExtWallet_1 = __importDefault(require("./ExtWallet"));
class Wallet extends eventcontainer_1.default {
    constructor() {
        super();
        this.checkConnected();
    }
    async checkConnected() {
        if (await this.connected() === true) {
            this.fireEvent("connect");
        }
    }
    async loadAddress() {
        if (ExtWallet_1.default.installed === true) {
            return await ExtWallet_1.default.loadAddress();
        }
    }
    async loadBalance() {
        if (ExtWallet_1.default.installed === true) {
            return await ExtWallet_1.default.loadBalance();
        }
    }
    async balanceOf(address) {
        if (ExtWallet_1.default.installed === true) {
            return await ExtWallet_1.default.balanceOf(address);
        }
    }
    async connected() {
        return await this.loadAddress() !== undefined;
    }
    async connect() {
        if (ExtWallet_1.default.installed === true) {
            return await ExtWallet_1.default.connect();
        }
        else {
            if (confirm("카이카스가 필요합니다. 카이카스를 설치하시겠습니까?")) {
                location.href = "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi";
            }
        }
    }
    async addToken(address, symbol, decimals, image) {
        if (ExtWallet_1.default.installed === true) {
            ExtWallet_1.default.addToken(address, symbol, decimals, image);
        }
    }
    async signMessage(message) {
        if (ExtWallet_1.default.installed === true) {
            return await ExtWallet_1.default.signMessage(message);
        }
    }
}
exports.default = new Wallet();
//# sourceMappingURL=Wallet.js.map