/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface KIP13CheckerMockInterface extends ethers.utils.Interface {
  functions: {
    "supportsAllInterfaces(address,bytes4[])": FunctionFragment;
    "supportsKIP13(address)": FunctionFragment;
    "supportsInterface(address,bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "supportsAllInterfaces",
    values: [string, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsKIP13",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "supportsAllInterfaces",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsKIP13",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {};
}

export class KIP13CheckerMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: KIP13CheckerMockInterface;

  functions: {
    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    supportsKIP13(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  supportsAllInterfaces(
    account: string,
    interfaceIds: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  supportsKIP13(account: string, overrides?: CallOverrides): Promise<boolean>;

  supportsInterface(
    account: string,
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    supportsKIP13(account: string, overrides?: CallOverrides): Promise<boolean>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsKIP13(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsKIP13(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
