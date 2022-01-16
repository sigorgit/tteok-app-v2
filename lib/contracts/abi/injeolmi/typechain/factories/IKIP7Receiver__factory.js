"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IKIP7Receiver__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        constant: false,
        inputs: [
            {
                name: "_operator",
                type: "address",
            },
            {
                name: "_from",
                type: "address",
            },
            {
                name: "_amount",
                type: "uint256",
            },
            {
                name: "_data",
                type: "bytes",
            },
        ],
        name: "onKIP7Received",
        outputs: [
            {
                name: "",
                type: "bytes4",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IKIP7Receiver__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IKIP7Receiver__factory = IKIP7Receiver__factory;
IKIP7Receiver__factory.abi = _abi;
//# sourceMappingURL=IKIP7Receiver__factory.js.map