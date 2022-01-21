import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Migrations, MigrationsInterface } from "../Migrations";
export declare class Migrations__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Migrations>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Migrations;
    connect(signer: Signer): Migrations__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163317905560f3806100316000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c8063445df0ac1460415780638da5cb5b146059578063fdacd57614607b575b600080fd5b60476097565b60408051918252519081900360200190f35b605f609d565b604080516001600160a01b039092168252519081900360200190f35b609560048036036020811015608f57600080fd5b503560ac565b005b60015481565b6000546001600160a01b031681565b6000546001600160a01b031633141560c45760018190555b5056fea165627a7a723058206729f8006a16334c038b3bc1bcf3db0e031a2d46f500a67af06c16613b5104a50029";
    static readonly abi: ({
        constant: boolean;
        inputs: never[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
    } | {
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
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
    static createInterface(): MigrationsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Migrations;
}
//# sourceMappingURL=Migrations__factory.d.ts.map