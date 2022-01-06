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
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MigrationsInterface extends ethers.utils.Interface {
  functions: {
    "last_completed_migration()": FunctionFragment;
    "owner()": FunctionFragment;
    "setCompleted(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "last_completed_migration",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setCompleted",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "last_completed_migration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCompleted",
    data: BytesLike
  ): Result;

  events: {};
}

export class Migrations extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MigrationsInterface;

  functions: {
    last_completed_migration(overrides?: CallOverrides): Promise<[BigNumber]>;

    "last_completed_migration()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    setCompleted(
      completed: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setCompleted(uint256)"(
      completed: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  last_completed_migration(overrides?: CallOverrides): Promise<BigNumber>;

  "last_completed_migration()"(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  setCompleted(
    completed: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setCompleted(uint256)"(
    completed: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    last_completed_migration(overrides?: CallOverrides): Promise<BigNumber>;

    "last_completed_migration()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    setCompleted(
      completed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setCompleted(uint256)"(
      completed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    last_completed_migration(overrides?: CallOverrides): Promise<BigNumber>;

    "last_completed_migration()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    setCompleted(
      completed: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setCompleted(uint256)"(
      completed: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    last_completed_migration(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "last_completed_migration()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setCompleted(
      completed: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setCompleted(uint256)"(
      completed: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
