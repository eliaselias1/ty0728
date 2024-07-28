(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ 3461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Fragment, Indexed, Interface, JsonFragment, Result } from \"@ethersproject/abi\";\nimport { Block, BlockTag, Listener, Log, Provider, TransactionReceipt, TransactionRequest, TransactionResponse } from \"@ethersproject/abstract-provider\";\nimport { Signer } from \"@ethersproject/abstract-signer\";\nimport { BigNumber, BigNumberish } from \"@ethersproject/bignumber\";\nimport { BytesLike } from \"@ethersproject/bytes\";\nimport { AccessList, AccessListish } from \"@ethersproject/transactions\";\nexport interface Overrides {\n    gasLimit?: BigNumberish | Promise<BigNumberish>;\n    gasPrice?: BigNumberish | Promise<BigNumberish>;\n    maxFeePerGas?: BigNumberish | Promise<BigNumberish>;\n    maxPriorityFeePerGas?: BigNumberish | Promise<BigNumberish>;\n    nonce?: BigNumberish | Promise<BigNumberish>;\n    type?: number;\n    accessList?: AccessListish;\n    customData?: Record<string, any>;\n}\nexport interface PayableOverrides extends Overrides {\n    value?: BigNumberish | Promise<BigNumberish>;\n}\nexport interface CallOverrides extends PayableOverrides {\n    blockTag?: BlockTag | Promise<BlockTag>;\n    from?: string | Promise<string>;\n}\nexport interface PopulatedTransaction {\n    to?: string;\n    from?: string;\n    nonce?: number;\n    gasLimit?: BigNumber;\n    gasPrice?: BigNumber;\n    data?: string;\n    value?: BigNumber;\n    chainId?: number;\n    type?: number;\n    accessList?: AccessList;\n    maxFeePerGas?: BigNumber;\n    maxPriorityFeePerGas?: BigNumber;\n    customData?: Record<string, any>;\n}\nexport declare type EventFilter = {\n    address?: string;\n    topics?: Array<string | Array<string>>;\n};\nexport declare type ContractFunction<T = any> = (...args: Array<any>) => Promise<T>;\nexport interface Event extends Log {\n    event?: string;\n    eventSignature?: string;\n    args?: Result;\n    decodeError?: Error;\n    decode?: (data: string, topics?: Array<string>) => any;\n    removeListener: () => void;\n    getBlock: () => Promise<Block>;\n    getTransaction: () => Promise<TransactionResponse>;\n    getTransactionReceipt: () => Promise<TransactionReceipt>;\n}\nexport interface ContractReceipt extends TransactionReceipt {\n    events?: Array<Event>;\n}\nexport interface ContractTransaction extends TransactionResponse {\n    wait(confirmations?: number): Promise<ContractReceipt>;\n}\ndeclare class RunningEvent {\n    readonly tag: string;\n    readonly filter: EventFilter;\n    private _listeners;\n    constructor(tag: string, filter: EventFilter);\n    addListener(listener: Listener, once: boolean): void;\n    removeListener(listener: Listener): void;\n    removeAllListeners(): void;\n    listeners(): Array<Listener>;\n    listenerCount(): number;\n    run(args: Array<any>): number;\n    prepareEvent(event: Event): void;\n    getEmit(event: Event): Array<any>;\n}\nexport declare type ContractInterface = string | ReadonlyArray<Fragment | JsonFragment | string> | Interface;\nexport declare class BaseContract {\n    readonly address: string;\n    readonly interface: Interface;\n    readonly signer: Signer;\n    readonly provider: Provider;\n    readonly functions: {\n        [name: string]: ContractFunction;\n    };\n    readonly callStatic: {\n        [name: string]: ContractFunction;\n    };\n    readonly estimateGas: {\n        [name: string]: ContractFunction<BigNumber>;\n    };\n    readonly populateTransaction: {\n        [name: string]: ContractFunction<PopulatedTransaction>;\n    };\n    readonly filters: {\n        [name: string]: (...args: Array<any>) => EventFilter;\n    };\n    readonly resolvedAddress: Promise<string>;\n    readonly deployTransaction: TransactionResponse;\n    _deployedPromise: Promise<Contract>;\n    _runningEvents: {\n        [eventTag: string]: RunningEvent;\n    };\n    _wrappedEmits: {\n        [eventTag: string]: (...args: Array<any>) => void;\n    };\n    constructor(addressOrName: string, contractInterface: ContractInterface, signerOrProvider?: Signer | Provider);\n    static getContractAddress(transaction: {\n        from: string;\n        nonce: BigNumberish;\n    }): string;\n    static getInterface(contractInterface: ContractInterface): Interface;\n    deployed(): Promise<Contract>;\n    _deployed(blockTag?: BlockTag): Promise<Contract>;\n    fallback(overrides?: TransactionRequest): Promise<TransactionResponse>;\n    connect(signerOrProvider: Signer | Provider | string): Contract;\n    attach(addressOrName: string): Contract;\n    static isIndexed(value: any): value is Indexed;\n    private _normalizeRunningEvent;\n    private _getRunningEvent;\n    _checkRunningEvents(runningEvent: RunningEvent): void;\n    _wrapEvent(runningEvent: RunningEvent, log: Log, listener: Listener): Event;\n    private _addEventListener;\n    queryFilter(event: EventFilter, fromBlockOrBlockhash?: BlockTag | string, toBlock?: BlockTag): Promise<Array<Event>>;\n    on(event: EventFilter | string, listener: Listener): this;\n    once(event: EventFilter | string, listener: Listener): this;\n    emit(eventName: EventFilter | string, ...args: Array<any>): boolean;\n    listenerCount(eventName?: EventFilter | string): number;\n    listeners(eventName?: EventFilter | string): Array<Listener>;\n    removeAllListeners(eventName?: EventFilter | string): this;\n    off(eventName: EventFilter | string, listener: Listener): this;\n    removeListener(eventName: EventFilter | string, listener: Listener): this;\n}\nexport declare class Contract extends BaseContract {\n    readonly [key: string]: ContractFunction | any;\n}\nexport declare class ContractFactory {\n    readonly interface: Interface;\n    readonly bytecode: string;\n    readonly signer: Signer;\n    constructor(contractInterface: ContractInterface, bytecode: BytesLike | {\n        object: string;\n    }, signer?: Signer);\n    getDeployTransaction(...args: Array<any>): TransactionRequest;\n    deploy(...args: Array<any>): Promise<Contract>;\n    attach(address: string): Contract;\n    connect(signer: Signer): ContractFactory;\n    static fromSolidity(compilerOutput: any, signer?: Signer): ContractFactory;\n    static getInterface(contractInterface: ContractInterface): Interface;\n    static getContractAddress(tx: {\n        from: string;\n        nonce: BytesLike | BigNumber | number;\n    }): string;\n    static getContract(address: string, contractInterface: ContractInterface, signer?: Signer): Contract;\n}\nexport {};\n//# sourceMappingURL=index.d.ts.map");

/***/ })

}]);
//# sourceMappingURL=raw-loader!-ethersproject-contracts-lib-index-d-ts.0.28.1.1668089849207.js.map
//# sourceMappingURL=raw-loader!-ethersproject-contracts-lib-index-d-ts.0.28.1.1668089849207.js.map