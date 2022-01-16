"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIP13InterfacesSupported__factory = void 0;
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
        constant: true,
        inputs: [],
        name: "INTERFACE_ID_KIP13",
        outputs: [
            {
                name: "",
                type: "bytes4",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                name: "interfaceIds",
                type: "bytes4[]",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506040516102b53803806102b58339810180604052602081101561003357600080fd5b81019080805164010000000081111561004b57600080fd5b8201602081018481111561005e57600080fd5b815185602082028301116401000000008211171561007b57600080fd5b50509291905050506100996301ffc9a760e01b6100d660201b60201c565b60005b81518110156100cf576100c78282815181106100b457fe5b60200260200101516100d660201b60201c565b60010161009c565b505061018e565b7fffffffff000000000000000000000000000000000000000000000000000000008082161415610151576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610287602e913960400191505060405180910390fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b60eb8061019c6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806301ffc9a7146037578063d81037cd14606f575b600080fd5b605b60048036036020811015604b57600080fd5b50356001600160e01b0319166092565b604080519115158252519081900360200190f35b607560b1565b604080516001600160e01b03199092168252519081900360200190f35b6001600160e01b03191660009081526020819052604090205460ff1690565b600160e01b6301ffc9a7028156fea165627a7a7230582046e3b66c82ce3ee2f5229612b3eabc4ec05fffd8aa1dc316ef0ccbc141ecd23700294b49503133496e7465726661636573537570706f727465643a20696e76616c696420696e74657266616365206964";
class KIP13InterfacesSupported__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(interfaceIds, overrides) {
        return super.deploy(interfaceIds, overrides || {});
    }
    getDeployTransaction(interfaceIds, overrides) {
        return super.getDeployTransaction(interfaceIds, overrides || {});
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
exports.KIP13InterfacesSupported__factory = KIP13InterfacesSupported__factory;
KIP13InterfacesSupported__factory.bytecode = _bytecode;
KIP13InterfacesSupported__factory.abi = _abi;
//# sourceMappingURL=KIP13InterfacesSupported__factory.js.map