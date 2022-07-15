/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface BountyV0Interface extends utils.Interface {
  functions: {
    "bountyClosedTime()": FunctionFragment;
    "bountyCreatedTime()": FunctionFragment;
    "bountyId()": FunctionFragment;
    "claimBalance(address,address)": FunctionFragment;
    "claimNft(address,bytes32)": FunctionFragment;
    "close(address,string)": FunctionFragment;
    "closer()": FunctionFragment;
    "closerData()": FunctionFragment;
    "depositTime(bytes32)": FunctionFragment;
    "deposits(uint256)": FunctionFragment;
    "expiration(bytes32)": FunctionFragment;
    "extendDeposit(bytes32,uint256,address)": FunctionFragment;
    "funder(bytes32)": FunctionFragment;
    "getDeposits()": FunctionFragment;
    "getERC20Balance(address)": FunctionFragment;
    "getNftDeposits()": FunctionFragment;
    "getTokenAddresses()": FunctionFragment;
    "getTokenAddressesCount()": FunctionFragment;
    "initialize(string,address,string,address)": FunctionFragment;
    "isNFT(bytes32)": FunctionFragment;
    "issuer()": FunctionFragment;
    "nftDepositLimit()": FunctionFragment;
    "nftDeposits(uint256)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "openQ()": FunctionFragment;
    "organization()": FunctionFragment;
    "payoutAddress(bytes32)": FunctionFragment;
    "receiveFunds(address,address,uint256,uint256)": FunctionFragment;
    "receiveNft(address,address,uint256,uint256)": FunctionFragment;
    "refundDeposit(bytes32,address)": FunctionFragment;
    "refunded(bytes32)": FunctionFragment;
    "status()": FunctionFragment;
    "tokenAddress(bytes32)": FunctionFragment;
    "tokenId(bytes32)": FunctionFragment;
    "volume(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bountyClosedTime"
      | "bountyCreatedTime"
      | "bountyId"
      | "claimBalance"
      | "claimNft"
      | "close"
      | "closer"
      | "closerData"
      | "depositTime"
      | "deposits"
      | "expiration"
      | "extendDeposit"
      | "funder"
      | "getDeposits"
      | "getERC20Balance"
      | "getNftDeposits"
      | "getTokenAddresses"
      | "getTokenAddressesCount"
      | "initialize"
      | "isNFT"
      | "issuer"
      | "nftDepositLimit"
      | "nftDeposits"
      | "onERC721Received"
      | "openQ"
      | "organization"
      | "payoutAddress"
      | "receiveFunds"
      | "receiveNft"
      | "refundDeposit"
      | "refunded"
      | "status"
      | "tokenAddress"
      | "tokenId"
      | "volume"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bountyClosedTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bountyCreatedTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "bountyId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimBalance",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "claimNft",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "close",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "closer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "closerData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositTime",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "deposits",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "expiration",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "extendDeposit",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "funder",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDeposits",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getERC20Balance",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNftDeposits",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenAddressesCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isNFT",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "issuer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nftDepositLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nftDeposits",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "openQ", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "organization",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "payoutAddress",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveFunds",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveNft",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "refundDeposit",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "refunded",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "status", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenAddress",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenId",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "volume",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "bountyClosedTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bountyCreatedTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bountyId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimNft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "close", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "closer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "closerData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "expiration", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "extendDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "funder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDeposits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getERC20Balance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNftDeposits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenAddressesCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "issuer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nftDepositLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nftDeposits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "openQ", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "organization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "payoutAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "receiveNft", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "refundDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "refunded", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "status", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "volume", data: BytesLike): Result;

  events: {};
}

export interface BountyV0 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BountyV0Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bountyClosedTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    bountyCreatedTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    bountyId(overrides?: CallOverrides): Promise<[string]>;

    claimBalance(
      _payoutAddress: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimNft(
      _payoutAddress: PromiseOrValue<string>,
      _depositId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    close(
      _payoutAddress: PromiseOrValue<string>,
      _closerData: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    closer(overrides?: CallOverrides): Promise<[string]>;

    closerData(overrides?: CallOverrides): Promise<[string]>;

    depositTime(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    deposits(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    expiration(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    extendDeposit(
      _depositId: PromiseOrValue<BytesLike>,
      _seconds: PromiseOrValue<BigNumberish>,
      _funder: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    funder(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getDeposits(overrides?: CallOverrides): Promise<[string[]]>;

    getERC20Balance(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    getNftDeposits(overrides?: CallOverrides): Promise<[string[]]>;

    getTokenAddresses(overrides?: CallOverrides): Promise<[string[]]>;

    getTokenAddressesCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _bountyId: PromiseOrValue<string>,
      _issuer: PromiseOrValue<string>,
      _organization: PromiseOrValue<string>,
      _openQ: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isNFT(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    issuer(overrides?: CallOverrides): Promise<[string]>;

    nftDepositLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    nftDeposits(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    openQ(overrides?: CallOverrides): Promise<[string]>;

    organization(overrides?: CallOverrides): Promise<[string]>;

    payoutAddress(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    receiveFunds(
      _funder: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _volume: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    receiveNft(
      _sender: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    refundDeposit(
      _depositId: PromiseOrValue<BytesLike>,
      _funder: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    refunded(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    status(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenAddress(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    tokenId(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    volume(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  bountyClosedTime(overrides?: CallOverrides): Promise<BigNumber>;

  bountyCreatedTime(overrides?: CallOverrides): Promise<BigNumber>;

  bountyId(overrides?: CallOverrides): Promise<string>;

  claimBalance(
    _payoutAddress: PromiseOrValue<string>,
    _tokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimNft(
    _payoutAddress: PromiseOrValue<string>,
    _depositId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  close(
    _payoutAddress: PromiseOrValue<string>,
    _closerData: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  closer(overrides?: CallOverrides): Promise<string>;

  closerData(overrides?: CallOverrides): Promise<string>;

  depositTime(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deposits(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  expiration(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  extendDeposit(
    _depositId: PromiseOrValue<BytesLike>,
    _seconds: PromiseOrValue<BigNumberish>,
    _funder: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  funder(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  getDeposits(overrides?: CallOverrides): Promise<string[]>;

  getERC20Balance(
    _tokenAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getNftDeposits(overrides?: CallOverrides): Promise<string[]>;

  getTokenAddresses(overrides?: CallOverrides): Promise<string[]>;

  getTokenAddressesCount(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _bountyId: PromiseOrValue<string>,
    _issuer: PromiseOrValue<string>,
    _organization: PromiseOrValue<string>,
    _openQ: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isNFT(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  issuer(overrides?: CallOverrides): Promise<string>;

  nftDepositLimit(overrides?: CallOverrides): Promise<BigNumber>;

  nftDeposits(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  onERC721Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  openQ(overrides?: CallOverrides): Promise<string>;

  organization(overrides?: CallOverrides): Promise<string>;

  payoutAddress(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  receiveFunds(
    _funder: PromiseOrValue<string>,
    _tokenAddress: PromiseOrValue<string>,
    _volume: PromiseOrValue<BigNumberish>,
    _expiration: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  receiveNft(
    _sender: PromiseOrValue<string>,
    _tokenAddress: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _expiration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  refundDeposit(
    _depositId: PromiseOrValue<BytesLike>,
    _funder: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  refunded(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  status(overrides?: CallOverrides): Promise<BigNumber>;

  tokenAddress(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  tokenId(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  volume(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    bountyClosedTime(overrides?: CallOverrides): Promise<BigNumber>;

    bountyCreatedTime(overrides?: CallOverrides): Promise<BigNumber>;

    bountyId(overrides?: CallOverrides): Promise<string>;

    claimBalance(
      _payoutAddress: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimNft(
      _payoutAddress: PromiseOrValue<string>,
      _depositId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    close(
      _payoutAddress: PromiseOrValue<string>,
      _closerData: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    closer(overrides?: CallOverrides): Promise<string>;

    closerData(overrides?: CallOverrides): Promise<string>;

    depositTime(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposits(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    expiration(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    extendDeposit(
      _depositId: PromiseOrValue<BytesLike>,
      _seconds: PromiseOrValue<BigNumberish>,
      _funder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    funder(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getDeposits(overrides?: CallOverrides): Promise<string[]>;

    getERC20Balance(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNftDeposits(overrides?: CallOverrides): Promise<string[]>;

    getTokenAddresses(overrides?: CallOverrides): Promise<string[]>;

    getTokenAddressesCount(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _bountyId: PromiseOrValue<string>,
      _issuer: PromiseOrValue<string>,
      _organization: PromiseOrValue<string>,
      _openQ: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    isNFT(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    issuer(overrides?: CallOverrides): Promise<string>;

    nftDepositLimit(overrides?: CallOverrides): Promise<BigNumber>;

    nftDeposits(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    openQ(overrides?: CallOverrides): Promise<string>;

    organization(overrides?: CallOverrides): Promise<string>;

    payoutAddress(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    receiveFunds(
      _funder: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _volume: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    receiveNft(
      _sender: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    refundDeposit(
      _depositId: PromiseOrValue<BytesLike>,
      _funder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    refunded(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    status(overrides?: CallOverrides): Promise<BigNumber>;

    tokenAddress(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    tokenId(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    volume(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    bountyClosedTime(overrides?: CallOverrides): Promise<BigNumber>;

    bountyCreatedTime(overrides?: CallOverrides): Promise<BigNumber>;

    bountyId(overrides?: CallOverrides): Promise<BigNumber>;

    claimBalance(
      _payoutAddress: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimNft(
      _payoutAddress: PromiseOrValue<string>,
      _depositId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    close(
      _payoutAddress: PromiseOrValue<string>,
      _closerData: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    closer(overrides?: CallOverrides): Promise<BigNumber>;

    closerData(overrides?: CallOverrides): Promise<BigNumber>;

    depositTime(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposits(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    expiration(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    extendDeposit(
      _depositId: PromiseOrValue<BytesLike>,
      _seconds: PromiseOrValue<BigNumberish>,
      _funder: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    funder(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDeposits(overrides?: CallOverrides): Promise<BigNumber>;

    getERC20Balance(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNftDeposits(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenAddressesCount(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _bountyId: PromiseOrValue<string>,
      _issuer: PromiseOrValue<string>,
      _organization: PromiseOrValue<string>,
      _openQ: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isNFT(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    issuer(overrides?: CallOverrides): Promise<BigNumber>;

    nftDepositLimit(overrides?: CallOverrides): Promise<BigNumber>;

    nftDeposits(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    openQ(overrides?: CallOverrides): Promise<BigNumber>;

    organization(overrides?: CallOverrides): Promise<BigNumber>;

    payoutAddress(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveFunds(
      _funder: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _volume: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    receiveNft(
      _sender: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    refundDeposit(
      _depositId: PromiseOrValue<BytesLike>,
      _funder: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    refunded(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    status(overrides?: CallOverrides): Promise<BigNumber>;

    tokenAddress(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenId(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    volume(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bountyClosedTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bountyCreatedTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bountyId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimBalance(
      _payoutAddress: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimNft(
      _payoutAddress: PromiseOrValue<string>,
      _depositId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    close(
      _payoutAddress: PromiseOrValue<string>,
      _closerData: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    closer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    closerData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositTime(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposits(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    expiration(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    extendDeposit(
      _depositId: PromiseOrValue<BytesLike>,
      _seconds: PromiseOrValue<BigNumberish>,
      _funder: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    funder(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDeposits(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getERC20Balance(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNftDeposits(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenAddressesCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _bountyId: PromiseOrValue<string>,
      _issuer: PromiseOrValue<string>,
      _organization: PromiseOrValue<string>,
      _openQ: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isNFT(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    issuer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nftDepositLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nftDeposits(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    openQ(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    organization(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payoutAddress(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveFunds(
      _funder: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _volume: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    receiveNft(
      _sender: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    refundDeposit(
      _depositId: PromiseOrValue<BytesLike>,
      _funder: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    refunded(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    status(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenAddress(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenId(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    volume(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}