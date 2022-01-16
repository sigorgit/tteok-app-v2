"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IExchange__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        constant: true,
        inputs: [
            {
                name: "tokenIn",
                type: "address",
            },
            {
                name: "amountIn",
                type: "uint256",
            },
        ],
        name: "estimatePos",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
];
class IExchange__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IExchange__factory = IExchange__factory;
IExchange__factory.abi = _abi;
//# sourceMappingURL=IExchange__factory.js.map