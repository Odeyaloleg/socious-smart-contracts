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
  PopulatedTransaction,
  Signer,
  utils
} from 'ethers'
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from '../common'

export declare namespace Escrow {
  export type EscrowDataStruct = {
    organization: PromiseOrValue<string>
    contributor: PromiseOrValue<string>
    jobId: PromiseOrValue<string>
    amount: PromiseOrValue<BigNumberish>
    fee: PromiseOrValue<BigNumberish>
    status: PromiseOrValue<BigNumberish>
    token: PromiseOrValue<string>
  }

  export type EscrowDataStructOutput = [string, string, string, BigNumber, BigNumber, number, string] & {
    organization: string
    contributor: string
    jobId: string
    amount: BigNumber
    fee: BigNumber
    status: number
    token: string
  }
}

export interface EscrowInterface extends utils.Interface {
  functions: {
    'addEscrowData(address,address,string,uint256,uint256,uint8,address)': FunctionFragment
    'addToken(address)': FunctionFragment
    'collectIncomeValue(address)': FunctionFragment
    'escrowDecision(uint256,bool,bool)': FunctionFragment
    'escrowHistory(uint256)': FunctionFragment
    'getDecisionRetentionFee()': FunctionFragment
    'getEscrow(uint256)': FunctionFragment
    'getEscrowId(address,address,string,uint256)': FunctionFragment
    'getImpactContFee()': FunctionFragment
    'getImpactOrgFee()': FunctionFragment
    'getNoImpactContFee()': FunctionFragment
    'getNoImpactOrgFee()': FunctionFragment
    'getTokens()': FunctionFragment
    'newEscrow(address,string,uint256,bool,address)': FunctionFragment
    'owner()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'setDecisionRetentionFee(uint256)': FunctionFragment
    'setImpactContFee(uint256)': FunctionFragment
    'setImpactOrgFee(uint256)': FunctionFragment
    'setNoImpactContFee(uint256)': FunctionFragment
    'setNoImpactOrgFee(uint256)': FunctionFragment
    'transactionsHistory(address,uint256)': FunctionFragment
    'transferAssets(address,address)': FunctionFragment
    'transferOwnership(address)': FunctionFragment
    'validTokens(uint256)': FunctionFragment
    'version()': FunctionFragment
    'withrawn(uint256,bool)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'addEscrowData'
      | 'addToken'
      | 'collectIncomeValue'
      | 'escrowDecision'
      | 'escrowHistory'
      | 'getDecisionRetentionFee'
      | 'getEscrow'
      | 'getEscrowId'
      | 'getImpactContFee'
      | 'getImpactOrgFee'
      | 'getNoImpactContFee'
      | 'getNoImpactOrgFee'
      | 'getTokens'
      | 'newEscrow'
      | 'owner'
      | 'renounceOwnership'
      | 'setDecisionRetentionFee'
      | 'setImpactContFee'
      | 'setImpactOrgFee'
      | 'setNoImpactContFee'
      | 'setNoImpactOrgFee'
      | 'transactionsHistory'
      | 'transferAssets'
      | 'transferOwnership'
      | 'validTokens'
      | 'version'
      | 'withrawn'
  ): FunctionFragment

  encodeFunctionData(
    functionFragment: 'addEscrowData',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string
  encodeFunctionData(functionFragment: 'addToken', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'collectIncomeValue', values: [PromiseOrValue<string>]): string
  encodeFunctionData(
    functionFragment: 'escrowDecision',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>, PromiseOrValue<boolean>]
  ): string
  encodeFunctionData(functionFragment: 'escrowHistory', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'getDecisionRetentionFee', values?: undefined): string
  encodeFunctionData(functionFragment: 'getEscrow', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(
    functionFragment: 'getEscrowId',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(functionFragment: 'getImpactContFee', values?: undefined): string
  encodeFunctionData(functionFragment: 'getImpactOrgFee', values?: undefined): string
  encodeFunctionData(functionFragment: 'getNoImpactContFee', values?: undefined): string
  encodeFunctionData(functionFragment: 'getNoImpactOrgFee', values?: undefined): string
  encodeFunctionData(functionFragment: 'getTokens', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'newEscrow',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>,
      PromiseOrValue<string>
    ]
  ): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string
  encodeFunctionData(functionFragment: 'setDecisionRetentionFee', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'setImpactContFee', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'setImpactOrgFee', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'setNoImpactContFee', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'setNoImpactOrgFee', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(
    functionFragment: 'transactionsHistory',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'transferAssets',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'validTokens', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'version', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'withrawn',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]
  ): string

  decodeFunctionResult(functionFragment: 'addEscrowData', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'addToken', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'collectIncomeValue', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'escrowDecision', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'escrowHistory', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getDecisionRetentionFee', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getEscrow', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getEscrowId', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getImpactContFee', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getImpactOrgFee', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNoImpactContFee', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNoImpactOrgFee', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getTokens', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'newEscrow', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setDecisionRetentionFee', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setImpactContFee', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setImpactOrgFee', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setNoImpactContFee', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setNoImpactOrgFee', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transactionsHistory', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferAssets', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'validTokens', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'version', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'withrawn', data: BytesLike): Result

  events: {
    'EscrowAction(uint256,uint256,uint256,address,address,string,address)': EventFragment
    'OwnershipTransferred(address,address)': EventFragment
    'TransferAction(uint256,address,uint256,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'EscrowAction'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TransferAction'): EventFragment
}

export interface EscrowActionEventObject {
  id: BigNumber
  fee: BigNumber
  amount: BigNumber
  organization: string
  contributer: string
  jobId: string
  token: string
}
export type EscrowActionEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string, string, string, string],
  EscrowActionEventObject
>

export type EscrowActionEventFilter = TypedEventFilter<EscrowActionEvent>

export interface OwnershipTransferredEventObject {
  previousOwner: string
  newOwner: string
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>

export interface TransferActionEventObject {
  escrowId: BigNumber
  destination: string
  fee: BigNumber
  amount: BigNumber
}
export type TransferActionEvent = TypedEvent<[BigNumber, string, BigNumber, BigNumber], TransferActionEventObject>

export type TransferActionEventFilter = TypedEventFilter<TransferActionEvent>

export interface Escrow extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: EscrowInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    addEscrowData(
      _organization: PromiseOrValue<string>,
      _contributor: PromiseOrValue<string>,
      _jobId: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _fee: PromiseOrValue<BigNumberish>,
      _status: PromiseOrValue<BigNumberish>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    addToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    collectIncomeValue(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>

    escrowDecision(
      _escrowId: PromiseOrValue<BigNumberish>,
      _refund: PromiseOrValue<boolean>,
      _verifiedContributer: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    escrowHistory(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber, number, string] & {
        organization: string
        contributor: string
        jobId: string
        amount: BigNumber
        fee: BigNumber
        status: number
        token: string
      }
    >

    getDecisionRetentionFee(overrides?: CallOverrides): Promise<[BigNumber]>

    getEscrow(
      _escrowId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[Escrow.EscrowDataStructOutput]>

    getEscrowId(
      _organization: PromiseOrValue<string>,
      _contributor: PromiseOrValue<string>,
      _jobId: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    getImpactContFee(overrides?: CallOverrides): Promise<[BigNumber]>

    getImpactOrgFee(overrides?: CallOverrides): Promise<[BigNumber]>

    getNoImpactContFee(overrides?: CallOverrides): Promise<[BigNumber]>

    getNoImpactOrgFee(overrides?: CallOverrides): Promise<[BigNumber]>

    getTokens(overrides?: CallOverrides): Promise<[string[]]>

    newEscrow(
      _contributor: PromiseOrValue<string>,
      _jobId: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _verifiedOrg: PromiseOrValue<boolean>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    owner(overrides?: CallOverrides): Promise<[string]>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

    setDecisionRetentionFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setImpactContFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setImpactOrgFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setNoImpactContFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setNoImpactOrgFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    transactionsHistory(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        escrowId: BigNumber
        amount: BigNumber
        fee: BigNumber
      }
    >

    transferAssets(
      destination: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    validTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>

    version(overrides?: CallOverrides): Promise<[string]>

    withrawn(
      _escrowId: PromiseOrValue<BigNumberish>,
      _verifiedContributer: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>
  }

  addEscrowData(
    _organization: PromiseOrValue<string>,
    _contributor: PromiseOrValue<string>,
    _jobId: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _fee: PromiseOrValue<BigNumberish>,
    _status: PromiseOrValue<BigNumberish>,
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  addToken(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  collectIncomeValue(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

  escrowDecision(
    _escrowId: PromiseOrValue<BigNumberish>,
    _refund: PromiseOrValue<boolean>,
    _verifiedContributer: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  escrowHistory(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, BigNumber, number, string] & {
      organization: string
      contributor: string
      jobId: string
      amount: BigNumber
      fee: BigNumber
      status: number
      token: string
    }
  >

  getDecisionRetentionFee(overrides?: CallOverrides): Promise<BigNumber>

  getEscrow(_escrowId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Escrow.EscrowDataStructOutput>

  getEscrowId(
    _organization: PromiseOrValue<string>,
    _contributor: PromiseOrValue<string>,
    _jobId: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  getImpactContFee(overrides?: CallOverrides): Promise<BigNumber>

  getImpactOrgFee(overrides?: CallOverrides): Promise<BigNumber>

  getNoImpactContFee(overrides?: CallOverrides): Promise<BigNumber>

  getNoImpactOrgFee(overrides?: CallOverrides): Promise<BigNumber>

  getTokens(overrides?: CallOverrides): Promise<string[]>

  newEscrow(
    _contributor: PromiseOrValue<string>,
    _jobId: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _verifiedOrg: PromiseOrValue<boolean>,
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  owner(overrides?: CallOverrides): Promise<string>

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

  setDecisionRetentionFee(
    _newFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setImpactContFee(
    _newFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setImpactOrgFee(
    _newFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setNoImpactContFee(
    _newFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setNoImpactOrgFee(
    _newFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  transactionsHistory(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      escrowId: BigNumber
      amount: BigNumber
      fee: BigNumber
    }
  >

  transferAssets(
    destination: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  validTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>

  version(overrides?: CallOverrides): Promise<string>

  withrawn(
    _escrowId: PromiseOrValue<BigNumberish>,
    _verifiedContributer: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    addEscrowData(
      _organization: PromiseOrValue<string>,
      _contributor: PromiseOrValue<string>,
      _jobId: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _fee: PromiseOrValue<BigNumberish>,
      _status: PromiseOrValue<BigNumberish>,
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    addToken(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>

    collectIncomeValue(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    escrowDecision(
      _escrowId: PromiseOrValue<BigNumberish>,
      _refund: PromiseOrValue<boolean>,
      _verifiedContributer: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>

    escrowHistory(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber, number, string] & {
        organization: string
        contributor: string
        jobId: string
        amount: BigNumber
        fee: BigNumber
        status: number
        token: string
      }
    >

    getDecisionRetentionFee(overrides?: CallOverrides): Promise<BigNumber>

    getEscrow(
      _escrowId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Escrow.EscrowDataStructOutput>

    getEscrowId(
      _organization: PromiseOrValue<string>,
      _contributor: PromiseOrValue<string>,
      _jobId: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getImpactContFee(overrides?: CallOverrides): Promise<BigNumber>

    getImpactOrgFee(overrides?: CallOverrides): Promise<BigNumber>

    getNoImpactContFee(overrides?: CallOverrides): Promise<BigNumber>

    getNoImpactOrgFee(overrides?: CallOverrides): Promise<BigNumber>

    getTokens(overrides?: CallOverrides): Promise<string[]>

    newEscrow(
      _contributor: PromiseOrValue<string>,
      _jobId: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _verifiedOrg: PromiseOrValue<boolean>,
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<string>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    setDecisionRetentionFee(_newFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>

    setImpactContFee(_newFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>

    setImpactOrgFee(_newFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>

    setNoImpactContFee(_newFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>

    setNoImpactOrgFee(_newFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>

    transactionsHistory(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        escrowId: BigNumber
        amount: BigNumber
        fee: BigNumber
      }
    >

    transferAssets(
      destination: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    validTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>

    version(overrides?: CallOverrides): Promise<string>

    withrawn(
      _escrowId: PromiseOrValue<BigNumberish>,
      _verifiedContributer: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {
    'EscrowAction(uint256,uint256,uint256,address,address,string,address)'(
      id?: null,
      fee?: null,
      amount?: null,
      organization?: null,
      contributer?: null,
      jobId?: null,
      token?: null
    ): EscrowActionEventFilter
    EscrowAction(
      id?: null,
      fee?: null,
      amount?: null,
      organization?: null,
      contributer?: null,
      jobId?: null,
      token?: null
    ): EscrowActionEventFilter

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter

    'TransferAction(uint256,address,uint256,uint256)'(
      escrowId?: null,
      destination?: null,
      fee?: null,
      amount?: null
    ): TransferActionEventFilter
    TransferAction(escrowId?: null, destination?: null, fee?: null, amount?: null): TransferActionEventFilter
  }

  estimateGas: {
    addEscrowData(
      _organization: PromiseOrValue<string>,
      _contributor: PromiseOrValue<string>,
      _jobId: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _fee: PromiseOrValue<BigNumberish>,
      _status: PromiseOrValue<BigNumberish>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    addToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    collectIncomeValue(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    escrowDecision(
      _escrowId: PromiseOrValue<BigNumberish>,
      _refund: PromiseOrValue<boolean>,
      _verifiedContributer: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    escrowHistory(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

    getDecisionRetentionFee(overrides?: CallOverrides): Promise<BigNumber>

    getEscrow(_escrowId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

    getEscrowId(
      _organization: PromiseOrValue<string>,
      _contributor: PromiseOrValue<string>,
      _jobId: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getImpactContFee(overrides?: CallOverrides): Promise<BigNumber>

    getImpactOrgFee(overrides?: CallOverrides): Promise<BigNumber>

    getNoImpactContFee(overrides?: CallOverrides): Promise<BigNumber>

    getNoImpactOrgFee(overrides?: CallOverrides): Promise<BigNumber>

    getTokens(overrides?: CallOverrides): Promise<BigNumber>

    newEscrow(
      _contributor: PromiseOrValue<string>,
      _jobId: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _verifiedOrg: PromiseOrValue<boolean>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>

    setDecisionRetentionFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setImpactContFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setImpactOrgFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setNoImpactContFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setNoImpactOrgFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    transactionsHistory(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    transferAssets(
      destination: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    validTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

    version(overrides?: CallOverrides): Promise<BigNumber>

    withrawn(
      _escrowId: PromiseOrValue<BigNumberish>,
      _verifiedContributer: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    addEscrowData(
      _organization: PromiseOrValue<string>,
      _contributor: PromiseOrValue<string>,
      _jobId: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _fee: PromiseOrValue<BigNumberish>,
      _status: PromiseOrValue<BigNumberish>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    addToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    collectIncomeValue(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    escrowDecision(
      _escrowId: PromiseOrValue<BigNumberish>,
      _refund: PromiseOrValue<boolean>,
      _verifiedContributer: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    escrowHistory(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getDecisionRetentionFee(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getEscrow(_escrowId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getEscrowId(
      _organization: PromiseOrValue<string>,
      _contributor: PromiseOrValue<string>,
      _jobId: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getImpactContFee(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getImpactOrgFee(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getNoImpactContFee(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getNoImpactOrgFee(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>

    newEscrow(
      _contributor: PromiseOrValue<string>,
      _jobId: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _verifiedOrg: PromiseOrValue<boolean>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>

    setDecisionRetentionFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setImpactContFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setImpactOrgFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setNoImpactContFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setNoImpactOrgFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    transactionsHistory(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    transferAssets(
      destination: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    validTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>

    withrawn(
      _escrowId: PromiseOrValue<BigNumberish>,
      _verifiedContributer: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>
  }
}
