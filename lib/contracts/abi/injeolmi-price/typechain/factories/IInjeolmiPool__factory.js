"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IInjeolmiPool__factory = void 0;
const ethers_1 = require("ethers");
class IInjeolmiPool__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IInjeolmiPool__factory = IInjeolmiPool__factory;
const _abi = [
    {
        constant: false,
        inputs: [],
        name: "swapToIJM",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "swapToKlay",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "user",
                type: "address",
            },
            {
                indexed: false,
                name: "amount",
                type: "uint256",
            },
        ],
        name: "SwapToIJM",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "user",
                type: "address",
            },
            {
                indexed: false,
                name: "amount",
                type: "uint256",
            },
        ],
        name: "SwapToKlay",
        type: "event",
    },
];
//# sourceMappingURL=IInjeolmiPool__factory.js.map