"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIP13Mock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        constant: true,
        inputs: [
            {
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                name: "",
                type: "bool",
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
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "registerInterface",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405261001a6301ffc9a760e01b61001f60201b60201c565b6100ed565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156100b057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b61017d806100fc6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b578063214cdb8014610076575b600080fd5b6100626004803603602081101561005157600080fd5b50356001600160e01b03191661009f565b604080519115158252519081900360200190f35b61009d6004803603602081101561008c57600080fd5b50356001600160e01b0319166100be565b005b6001600160e01b03191660009081526020819052604090205460ff1690565b6100c7816100ca565b50565b6001600160e01b0319808216141561012c5760408051600160e51b62461bcd02815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff1916600117905556fea165627a7a72305820c3a3943234faf4540f30c058449127f59fa8c06f24eb914332b7901c1e52cae10029";
class KIP13Mock__factory extends ethers_1.ContractFactory {
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
exports.KIP13Mock__factory = KIP13Mock__factory;
KIP13Mock__factory.bytecode = _bytecode;
KIP13Mock__factory.abi = _abi;
//# sourceMappingURL=KIP13Mock__factory.js.map