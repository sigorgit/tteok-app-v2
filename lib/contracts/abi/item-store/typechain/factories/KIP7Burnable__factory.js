"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIP7Burnable__factory = void 0;
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
        constant: false,
        inputs: [
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "burn",
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
                name: "account",
                type: "address",
            },
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "burnFrom",
        outputs: [],
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
const _bytecode = "0x608060405234801561001057600080fd5b506100276301ffc9a760e01b61005860201b60201c565b61003d636578737160e01b61005860201b60201c565b610053633b5a0bf860e01b61005860201b60201c565b610126565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156100e957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b610cfd806101356000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c578063a9059cbb11610066578063a9059cbb1461025e578063b88d4fde1461028a578063dd62ed3e14610350578063eb7955491461037e576100cf565b806342966c68146101ef57806370a082311461020c57806379cc679014610232576100cf565b806301ffc9a7146100d4578063095ea7b31461010f57806318160ddd1461013b57806323b872dd14610155578063423f6cef1461018b57806342842e0e146101b9575b600080fd5b6100fb600480360360208110156100ea57600080fd5b50356001600160e01b031916610439565b604080519115158252519081900360200190f35b6100fb6004803603604081101561012557600080fd5b506001600160a01b038135169060200135610458565b61014361046e565b60408051918252519081900360200190f35b6100fb6004803603606081101561016b57600080fd5b506001600160a01b03813581169160208101359091169060400135610474565b6101b7600480360360408110156101a157600080fd5b506001600160a01b0381351690602001356104cb565b005b6101b7600480360360608110156101cf57600080fd5b506001600160a01b038135811691602081013590911690604001356104e9565b6101b76004803603602081101561020557600080fd5b5035610509565b6101436004803603602081101561022257600080fd5b50356001600160a01b0316610516565b6101b76004803603604081101561024857600080fd5b506001600160a01b038135169060200135610531565b6100fb6004803603604081101561027457600080fd5b506001600160a01b03813516906020013561053b565b6101b7600480360360808110156102a057600080fd5b6001600160a01b038235811692602081013590911691604082013591908101906080810160608201356401000000008111156102db57600080fd5b8201836020820111156102ed57600080fd5b8035906020019184600183028401116401000000008311171561030f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610548945050505050565b6101436004803603604081101561036657600080fd5b506001600160a01b03813581169160200135166105a4565b6101b76004803603606081101561039457600080fd5b6001600160a01b03823516916020810135918101906060810160408201356401000000008111156103c457600080fd5b8201836020820111156103d657600080fd5b803590602001918460018302840111640100000000831117156103f857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506105cf945050505050565b6001600160e01b03191660009081526020819052604090205460ff1690565b6000610465338484610624565b50600192915050565b60035490565b6000610481848484610716565b6001600160a01b0384166000908152600260209081526040808320338085529252909120546104c19186916104bc908663ffffffff61086016565b610624565b5060019392505050565b6104e58282604051806020016040528060008152506105cf565b5050565b61050483838360405180602001604052806000815250610548565b505050565b61051333826108a9565b50565b6001600160a01b031660009081526001602052604090205490565b6104e5828261099d565b6000610465338484610716565b610553848484610474565b50610560848484846109e2565b61059e57604051600160e51b62461bcd02815260040180806020018281038252602e815260200180610c3b602e913960400191505060405180910390fd5b50505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6105d9838361053b565b506105e6338484846109e2565b61050457604051600160e51b62461bcd02815260040180806020018281038252602e815260200180610c3b602e913960400191505060405180910390fd5b6001600160a01b03831661066c57604051600160e51b62461bcd028152600401808060200182810382526023815260200180610caf6023913960400191505060405180910390fd5b6001600160a01b0382166106b457604051600160e51b62461bcd028152600401808060200182810382526021815260200180610c1a6021913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b03831661075e57604051600160e51b62461bcd028152600401808060200182810382526024815260200180610c8b6024913960400191505060405180910390fd5b6001600160a01b0382166107a657604051600160e51b62461bcd028152600401808060200182810382526022815260200180610c696022913960400191505060405180910390fd5b6001600160a01b0383166000908152600160205260409020546107cf908263ffffffff61086016565b6001600160a01b038085166000908152600160205260408082209390935590841681522054610804908263ffffffff610b1c16565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60006108a283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610b79565b9392505050565b6001600160a01b0382166109075760408051600160e51b62461bcd02815260206004820181905260248201527f4b4950373a206275726e2066726f6d20746865207a65726f2061646472657373604482015290519081900360640190fd5b60035461091a908263ffffffff61086016565b6003556001600160a01b038216600090815260016020526040902054610946908263ffffffff61086016565b6001600160a01b0383166000818152600160209081526040808320949094558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35050565b6109a782826108a9565b6001600160a01b0382166000908152600260209081526040808320338085529252909120546104e59184916104bc908563ffffffff61086016565b60006109f6846001600160a01b0316610c13565b610a0257506001610b14565b604051600160e11b634e8c461102815233600482018181526001600160a01b03888116602485015260448401879052608060648501908152865160848601528651600095928a1694639d188c229490938c938b938b939260a4019060208501908083838e5b83811015610a7f578181015183820152602001610a67565b50505050905090810190601f168015610aac5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610ace57600080fd5b505af1158015610ae2573d6000803e3d6000fd5b505050506040513d6020811015610af857600080fd5b50516001600160e01b031916600160e11b634e8c461102149150505b949350505050565b6000828201838110156108a25760408051600160e51b62461bcd02815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008184841115610c0b57604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610bd0578181015183820152602001610bb8565b50505050905090810190601f168015610bfd5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b3b15159056fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e7465724b4950373a207472616e7366657220746f20746865207a65726f20616464726573734b4950373a207472616e736665722066726f6d20746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a723058209348309549b70101a29ccb12dc0e54c1c95865116d0fa315699091fae1ed496b0029";
class KIP7Burnable__factory extends ethers_1.ContractFactory {
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
exports.KIP7Burnable__factory = KIP7Burnable__factory;
KIP7Burnable__factory.bytecode = _bytecode;
KIP7Burnable__factory.abi = _abi;
//# sourceMappingURL=KIP7Burnable__factory.js.map