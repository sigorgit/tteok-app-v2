"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IFactory__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        constant: true,
        inputs: [
            {
                name: "tokenA",
                type: "address",
            },
            {
                name: "tokenB",
                type: "address",
            },
        ],
        name: "tokenToPool",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
];
class IFactory__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IFactory__factory = IFactory__factory;
IFactory__factory.abi = _abi;
//# sourceMappingURL=IFactory__factory.js.map