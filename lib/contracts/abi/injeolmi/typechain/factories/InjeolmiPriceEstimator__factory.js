"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjeolmiPriceEstimator__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        constant: true,
        inputs: [
            {
                name: "amountIn",
                type: "uint256",
            },
        ],
        name: "estimatePos",
        outputs: [
            {
                name: "amountOut",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x6080604052600080546001600160a01b03191673c6a2ad8cc6e4a7e08fc37cc5954be07d499e765417905534801561003657600080fd5b506101bb806100466000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806321d9589114610030575b600080fd5b61004d6004803603602081101561004657600080fd5b503561005f565b60408051918252519081900360200190f35b6000805460408051600160e01b63fd435cb9028152730268dbed3832b87582b1fa508acf5958cbb1cd74600482015260248101849052905183926001600160a01b03169163fd435cb9916044808301926020929190829003018186803b1580156100c857600080fd5b505afa1580156100dc573d6000803e3d6000fd5b505050506040513d60208110156100f257600080fd5b505160408051600160e01b63e4161181028152730268dbed3832b87582b1fa508acf5958cbb1cd7460048201526024810186905290519192506001600160a01b0383169163e416118191604480820192602092909190829003018186803b15801561015c57600080fd5b505afa158015610170573d6000803e3d6000fd5b505050506040513d602081101561018657600080fd5b5051939250505056fea165627a7a72305820b2492f4d0d802ef26d4dd9144f929bc16e8af5d3855ce978ae8271c156e5577d0029";
class InjeolmiPriceEstimator__factory extends ethers_1.ContractFactory {
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
exports.InjeolmiPriceEstimator__factory = InjeolmiPriceEstimator__factory;
InjeolmiPriceEstimator__factory.bytecode = _bytecode;
InjeolmiPriceEstimator__factory.abi = _abi;
//# sourceMappingURL=InjeolmiPriceEstimator__factory.js.map