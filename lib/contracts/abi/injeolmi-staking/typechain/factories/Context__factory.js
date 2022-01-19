"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
];
class Context__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Context__factory = Context__factory;
Context__factory.abi = _abi;
//# sourceMappingURL=Context__factory.js.map