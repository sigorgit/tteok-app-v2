import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SupportsInterfaceWithLookupMock, SupportsInterfaceWithLookupMockInterface } from "../SupportsInterfaceWithLookupMock";
export declare class SupportsInterfaceWithLookupMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SupportsInterfaceWithLookupMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SupportsInterfaceWithLookupMock;
    connect(signer: Signer): SupportsInterfaceWithLookupMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506100276301ffc9a760e01b61002c60201b60201c565b6100e4565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156100a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806101dd602e913960400191505060405180910390fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b60eb806100f26000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806301ffc9a7146037578063d81037cd14606f575b600080fd5b605b60048036036020811015604b57600080fd5b50356001600160e01b0319166092565b604080519115158252519081900360200190f35b607560b1565b604080516001600160e01b03199092168252519081900360200190f35b6001600160e01b03191660009081526020819052604090205460ff1690565b600160e01b6301ffc9a7028156fea165627a7a723058203649a71047ca1bd7b151e39a8f64b18cdeb1138e2d399972cc3899a928ed21cc00294b49503133496e7465726661636573537570706f727465643a20696e76616c696420696e74657266616365206964";
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
    } | {
        inputs: never[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): SupportsInterfaceWithLookupMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SupportsInterfaceWithLookupMock;
}
//# sourceMappingURL=SupportsInterfaceWithLookupMock__factory.d.ts.map