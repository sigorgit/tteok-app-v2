import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP17PausableMock, KIP17PausableMockInterface } from "../KIP17PausableMock";
export declare class KIP17PausableMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<KIP17PausableMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): KIP17PausableMock;
    connect(signer: Signer): KIP17PausableMock__factory;
    static readonly bytecode = "0x60806040526200001c6301ffc9a760e01b6200008760201b60201c565b620000346380ac58cd60e01b6200008760201b60201c565b62000045336200015660201b60201c565b6006805460ff19169055620000817f4d5507ff0000000000000000000000000000000000000000000000000000000062000087602090811b901c565b620002cf565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156200011957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b62000171816005620001a860201b620015db1790919060201c565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b620001ba82826200024c60201b60201c565b156200022757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b038216620002af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018062001d2f6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b611a5080620002df6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80634f558e79116100b857806370a082311161007c57806370a082311461033957806382dc1ec4146103715780638456cb5914610397578063a22cb4651461039f578063b88d4fde146103cd578063e985e9c51461049357610137565b80634f558e79146102c95780635c975abb146102e65780636352211e146102ee5780636b2c0f551461030b5780636ef8d66d1461033157610137565b80633f4ba83a116100ff5780633f4ba83a1461021c57806340c10f191461022457806342842e0e1461025057806342966c681461028657806346fbf68e146102a357610137565b806301ffc9a71461013c578063081812fc14610177578063095ea7b3146101b057806323b872dd146101de578063329daf9014610214575b600080fd5b6101636004803603602081101561015257600080fd5b50356001600160e01b0319166104c1565b604080519115158252519081900360200190f35b6101946004803603602081101561018d57600080fd5b50356104e0565b604080516001600160a01b039092168252519081900360200190f35b6101dc600480360360408110156101c657600080fd5b506001600160a01b038135169060200135610545565b005b6101dc600480360360608110156101f457600080fd5b506001600160a01b038135811691602081013590911690604001356105a4565b6101dc610605565b6101dc61064e565b6101dc6004803603604081101561023a57600080fd5b506001600160a01b03813516906020013561072e565b6101dc6004803603606081101561026657600080fd5b506001600160a01b03813581169160208101359091169060400135610738565b6101dc6004803603602081101561029c57600080fd5b5035610753565b610163600480360360208110156102b957600080fd5b50356001600160a01b031661075f565b610163600480360360208110156102df57600080fd5b5035610778565b610163610783565b6101946004803603602081101561030457600080fd5b503561078c565b6101dc6004803603602081101561032157600080fd5b50356001600160a01b03166107e3565b6101dc6107ec565b61035f6004803603602081101561034f57600080fd5b50356001600160a01b03166107f5565b60408051918252519081900360200190f35b6101dc6004803603602081101561038757600080fd5b50356001600160a01b0316610860565b6101dc6108b0565b6101dc600480360360408110156103b557600080fd5b506001600160a01b038135169060200135151561098a565b6101dc600480360360808110156103e357600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561041e57600080fd5b82018360208201111561043057600080fd5b8035906020019184600183028401116401000000008311171561045257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506109e5945050505050565b610163600480360360408110156104a957600080fd5b506001600160a01b0381358116916020013516610a40565b6001600160e01b03191660009081526020819052604090205460ff1690565b60006104eb82610a6e565b61052957604051600160e51b62461bcd02815260040180806020018281038252602b815260200180611998602b913960400191505060405180910390fd5b506000908152600260205260409020546001600160a01b031690565b60065460ff16156105965760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b6105a08282610a8b565b5050565b60065460ff16156105f55760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b610600838383610bb8565b505050565b61060e3361075f565b61064c57604051600160e51b62461bcd0281526004018080602001828103825260308152602001806118056030913960400191505060405180910390fd5b565b6106573361075f565b61069557604051600160e51b62461bcd0281526004018080602001828103825260308152602001806118056030913960400191505060405180910390fd5b60065460ff166106ef5760408051600160e51b62461bcd02815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015290519081900360640190fd5b6006805460ff191690556040805133815290517f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa9181900360200190a1565b6105a08282610c0b565b610600838383604051806020016040528060008152506109e5565b61075c81610d42565b50565b600061077260058363ffffffff610d5416565b92915050565b600061077282610a6e565b60065460ff1690565b6000818152600160205260408120546001600160a01b03168061077257604051600160e51b62461bcd0281526004018080602001828103825260288152602001806118796028913960400191505060405180910390fd5b61075c81610dbe565b61064c33610dbe565b60006001600160a01b03821661083f57604051600160e51b62461bcd0281526004018080602001828103825260298152602001806119236029913960400191505060405180910390fd5b6001600160a01b038216600090815260036020526040902061077290610dc7565b6108693361075f565b6108a757604051600160e51b62461bcd0281526004018080602001828103825260308152602001806118056030913960400191505060405180910390fd5b61075c81610dcb565b6108b93361075f565b6108f757604051600160e51b62461bcd0281526004018080602001828103825260308152602001806118056030913960400191505060405180910390fd5b60065460ff16156109485760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b6006805460ff191660011790556040805133815290517f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2589181900360200190a1565b60065460ff16156109db5760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b6105a08282610e13565b6109f08484846105a4565b6109fc84848484610ee2565b610a3a57604051600160e51b62461bcd0281526004018080602001828103825260308152602001806118f36030913960400191505060405180910390fd5b50505050565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6000908152600160205260409020546001600160a01b0316151590565b6000610a968261078c565b9050806001600160a01b0316836001600160a01b03161415610b025760408051600160e51b62461bcd02815260206004820181905260248201527f4b495031373a20617070726f76616c20746f2063757272656e74206f776e6572604482015290519081900360640190fd5b336001600160a01b0382161480610b1e5750610b1e8133610a40565b610b5c57604051600160e51b62461bcd0281526004018080602001828103825260378152602001806119c36037913960400191505060405180910390fd5b60008281526002602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b610bc233826112c7565b610c0057604051600160e51b62461bcd0281526004018080602001828103825260308152602001806118a16030913960400191505060405180910390fd5b610600838383611366565b6001600160a01b038216610c695760408051600160e51b62461bcd02815260206004820152601f60248201527f4b495031373a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610c7281610a6e565b15610cc75760408051600160e51b62461bcd02815260206004820152601b60248201527f4b495031373a20746f6b656e20616c7265616479206d696e7465640000000000604482015290519081900360640190fd5b600081815260016020908152604080832080546001600160a01b0319166001600160a01b038716908117909155835260039091529020610d06906114b0565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b61075c610d4e8261078c565b826114b9565b60006001600160a01b038216610d9e57604051600160e51b62461bcd0281526004018080602001828103825260228152602001806118d16022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61075c81611593565b5490565b610ddc60058263ffffffff6115db16565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b6001600160a01b038216331415610e745760408051600160e51b62461bcd02815260206004820152601860248201527f4b495031373a20617070726f766520746f2063616c6c65720000000000000000604482015290519081900360640190fd5b3360008181526004602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6000806060610ef9866001600160a01b031661165f565b610f08576001925050506112bf565b856001600160a01b031663150b7a0260e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610f94578181015183820152602001610f7c565b50505050905090810190601f168015610fc15780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b602083106110295780518252601f19909201916020918201910161100a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461108b576040519150601f19603f3d011682016040523d82523d6000602084013e611090565b606091505b5080519193509150158015906110d057508051600160e11b630a85bd010290602080840191908110156110c257600080fd5b50516001600160e01b031916145b156110e0576001925050506112bf565b856001600160a01b0316636745782b60e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561116c578181015183820152602001611154565b50505050905090810190601f1680156111995780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b602083106112015780518252601f1990920191602091820191016111e2565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611263576040519150601f19603f3d011682016040523d82523d6000602084013e611268565b606091505b5080519193509150158015906112a857508051600160e01b636745782b02906020808401919081101561129a57600080fd5b50516001600160e01b031916145b156112b8576001925050506112bf565b6000925050505b949350505050565b60006112d282610a6e565b61131057604051600160e51b62461bcd02815260040180806020018281038252602b8152602001806119fa602b913960400191505060405180910390fd5b600061131b8361078c565b9050806001600160a01b0316846001600160a01b031614806113565750836001600160a01b031661134b846104e0565b6001600160a01b0316145b806112bf57506112bf8185610a40565b826001600160a01b03166113798261078c565b6001600160a01b0316146113c157604051600160e51b62461bcd02815260040180806020018281038252602881526020018061194c6028913960400191505060405180910390fd5b6001600160a01b03821661140957604051600160e51b62461bcd0281526004018080602001828103825260238152602001806118356023913960400191505060405180910390fd5b61141281611665565b6001600160a01b0383166000908152600360205260409020611433906116a0565b6001600160a01b0382166000908152600360205260409020611454906114b0565b60008181526001602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b80546001019055565b816001600160a01b03166114cc8261078c565b6001600160a01b03161461151457604051600160e51b62461bcd0281526004018080602001828103825260248152602001806119746024913960400191505060405180910390fd5b61151d81611665565b6001600160a01b038216600090815260036020526040902061153e906116a0565b60008181526001602052604080822080546001600160a01b0319169055518291906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6115a460058263ffffffff6116b716565b6040516001600160a01b038216907fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90600090a250565b6115e58282610d54565b1561163a5760408051600160e51b62461bcd02815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b3b151590565b6000818152600260205260409020546001600160a01b03161561075c57600090815260026020526040902080546001600160a01b0319169055565b80546116b390600163ffffffff61172116565b9055565b6116c18282610d54565b6116ff57604051600160e51b62461bcd0281526004018080602001828103825260218152602001806118586021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19169055565b600061176383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061176a565b9392505050565b600081848411156117fc57604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b838110156117c15781810151838201526020016117a9565b50505050905090810190601f1680156117ee5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fe506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c654b495031373a207472616e7366657220746f20746865207a65726f2061646472657373526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b495031373a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b495031373a207472616e7366657220746f206e6f6e204b49503137526563656976657220696d706c656d656e7465724b495031373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495031373a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4b495031373a206275726e206f6620746f6b656e2074686174206973206e6f74206f776e4b495031373a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4b495031373a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656ea165627a7a723058202111d928772717acc57159b1cd339fb024b382bdbcf4ad7d07f425837e11f8b10029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";
    static readonly abi: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    })[];
    static createInterface(): KIP17PausableMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP17PausableMock;
}
//# sourceMappingURL=KIP17PausableMock__factory.d.ts.map