"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISparrowNFTs__factory = void 0;
const ethers_1 = require("ethers");
class ISparrowNFTs__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ISparrowNFTs__factory = ISparrowNFTs__factory;
const _abi = [
    {
        constant: false,
        inputs: [
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];
//# sourceMappingURL=ISparrowNFTs__factory.js.map