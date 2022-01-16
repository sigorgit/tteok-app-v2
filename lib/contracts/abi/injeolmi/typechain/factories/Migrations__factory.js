"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        constant: true,
        inputs: [],
        name: "last_completed_migration",
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
    {
        constant: true,
        inputs: [],
        name: "owner",
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
    {
        constant: false,
        inputs: [
            {
                name: "completed",
                type: "uint256",
            },
        ],
        name: "setCompleted",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163317905560f3806100316000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c8063445df0ac1460415780638da5cb5b146059578063fdacd57614607b575b600080fd5b60476097565b60408051918252519081900360200190f35b605f609d565b604080516001600160a01b039092168252519081900360200190f35b609560048036036020811015608f57600080fd5b503560ac565b005b60015481565b6000546001600160a01b031681565b6000546001600160a01b031633141560c45760018190555b5056fea165627a7a723058206729f8006a16334c038b3bc1bcf3db0e031a2d46f500a67af06c16613b5104a50029";
class Migrations__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Migrations__factory = Migrations__factory;
Migrations__factory.bytecode = _bytecode;
Migrations__factory.abi = _abi;
//# sourceMappingURL=Migrations__factory.js.map