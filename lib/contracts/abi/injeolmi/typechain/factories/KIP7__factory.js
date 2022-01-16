"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIP7__factory = void 0;
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
                name: "spender",
                type: "address",
            },
            {
                name: "value",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
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
        constant: false,
        inputs: [
            {
                name: "sender",
                type: "address",
            },
            {
                name: "recipient",
                type: "address",
            },
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "recipient",
                type: "address",
            },
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "safeTransfer",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "sender",
                type: "address",
            },
            {
                name: "recipient",
                type: "address",
            },
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
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
        constant: false,
        inputs: [
            {
                name: "recipient",
                type: "address",
            },
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "sender",
                type: "address",
            },
            {
                name: "recipient",
                type: "address",
            },
            {
                name: "amount",
                type: "uint256",
            },
            {
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "owner",
                type: "address",
            },
            {
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
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
        constant: false,
        inputs: [
            {
                name: "recipient",
                type: "address",
            },
            {
                name: "amount",
                type: "uint256",
            },
            {
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeTransfer",
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
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506100276301ffc9a760e01b61004260201b60201c565b61003d636578737160e01b61004260201b60201c565b610110565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156100d357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b610b3e8061011f6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806342842e0e1161007157806342842e0e1461019357806370a08231146101c9578063a9059cbb146101ef578063b88d4fde1461021b578063dd62ed3e146102e1578063eb7955491461030f576100a9565b806301ffc9a7146100ae578063095ea7b3146100e957806318160ddd1461011557806323b872dd1461012f578063423f6cef14610165575b600080fd5b6100d5600480360360208110156100c457600080fd5b50356001600160e01b0319166103ca565b604080519115158252519081900360200190f35b6100d5600480360360408110156100ff57600080fd5b506001600160a01b0381351690602001356103e9565b61011d6103ff565b60408051918252519081900360200190f35b6100d56004803603606081101561014557600080fd5b506001600160a01b03813581169160208101359091169060400135610405565b6101916004803603604081101561017b57600080fd5b506001600160a01b03813516906020013561045c565b005b610191600480360360608110156101a957600080fd5b506001600160a01b0381358116916020810135909116906040013561047a565b61011d600480360360208110156101df57600080fd5b50356001600160a01b031661049a565b6100d56004803603604081101561020557600080fd5b506001600160a01b0381351690602001356104b5565b6101916004803603608081101561023157600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561026c57600080fd5b82018360208201111561027e57600080fd5b803590602001918460018302840111640100000000831117156102a057600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506104c2945050505050565b61011d600480360360408110156102f757600080fd5b506001600160a01b038135811691602001351661051e565b6101916004803603606081101561032557600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561035557600080fd5b82018360208201111561036757600080fd5b8035906020019184600183028401116401000000008311171561038957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610549945050505050565b6001600160e01b03191660009081526020819052604090205460ff1690565b60006103f633848461059e565b50600192915050565b60035490565b6000610412848484610690565b6001600160a01b03841660009081526002602090815260408083203380855292529091205461045291869161044d908663ffffffff6107da16565b61059e565b5060019392505050565b610476828260405180602001604052806000815250610549565b5050565b610495838383604051806020016040528060008152506104c2565b505050565b6001600160a01b031660009081526001602052604090205490565b60006103f6338484610690565b6104cd848484610405565b506104da84848484610823565b61051857604051600160e51b62461bcd02815260040180806020018281038252602e815260200180610a7c602e913960400191505060405180910390fd5b50505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b61055383836104b5565b5061056033848484610823565b61049557604051600160e51b62461bcd02815260040180806020018281038252602e815260200180610a7c602e913960400191505060405180910390fd5b6001600160a01b0383166105e657604051600160e51b62461bcd028152600401808060200182810382526023815260200180610af06023913960400191505060405180910390fd5b6001600160a01b03821661062e57604051600160e51b62461bcd028152600401808060200182810382526021815260200180610a5b6021913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166106d857604051600160e51b62461bcd028152600401808060200182810382526024815260200180610acc6024913960400191505060405180910390fd5b6001600160a01b03821661072057604051600160e51b62461bcd028152600401808060200182810382526022815260200180610aaa6022913960400191505060405180910390fd5b6001600160a01b038316600090815260016020526040902054610749908263ffffffff6107da16565b6001600160a01b03808516600090815260016020526040808220939093559084168152205461077e908263ffffffff61095d16565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600061081c83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506109ba565b9392505050565b6000610837846001600160a01b0316610a54565b61084357506001610955565b604051600160e11b634e8c461102815233600482018181526001600160a01b03888116602485015260448401879052608060648501908152865160848601528651600095928a1694639d188c229490938c938b938b939260a4019060208501908083838e5b838110156108c05781810151838201526020016108a8565b50505050905090810190601f1680156108ed5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561090f57600080fd5b505af1158015610923573d6000803e3d6000fd5b505050506040513d602081101561093957600080fd5b50516001600160e01b031916600160e11b634e8c461102149150505b949350505050565b60008282018381101561081c5760408051600160e51b62461bcd02815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008184841115610a4c57604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610a115781810151838201526020016109f9565b50505050905090810190601f168015610a3e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b3b15159056fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e7465724b4950373a207472616e7366657220746f20746865207a65726f20616464726573734b4950373a207472616e736665722066726f6d20746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a723058205e867d0f8673f3508cd8bbafca0a239887a6d3ef9fa25fc46daa2e5d956b07c60029";
class KIP7__factory extends ethers_1.ContractFactory {
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
exports.KIP7__factory = KIP7__factory;
KIP7__factory.bytecode = _bytecode;
KIP7__factory.abi = _abi;
//# sourceMappingURL=KIP7__factory.js.map