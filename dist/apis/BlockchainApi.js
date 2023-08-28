"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockchainApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class BlockchainApi extends runtime.BaseAPI {
    /**
     * Blockchain account inspect
     */
    blockchainAccountInspectRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling blockchainAccountInspect.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/blockchain/accounts/{account_id}/inspect`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.BlockchainAccountInspectFromJSON)(jsonValue));
        });
    }
    /**
     * Blockchain account inspect
     */
    blockchainAccountInspect(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.blockchainAccountInspectRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Execute get method for account
     */
    execGetMethodForBlockchainAccountRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling execGetMethodForBlockchainAccount.');
            }
            if (requestParameters.methodName === null || requestParameters.methodName === undefined) {
                throw new runtime.RequiredError('methodName', 'Required parameter requestParameters.methodName was null or undefined when calling execGetMethodForBlockchainAccount.');
            }
            const queryParameters = {};
            if (requestParameters.args) {
                queryParameters['args'] = requestParameters.args;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/blockchain/accounts/{account_id}/methods/{method_name}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"method_name"}}`, encodeURIComponent(String(requestParameters.methodName))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MethodExecutionResultFromJSON)(jsonValue));
        });
    }
    /**
     * Execute get method for account
     */
    execGetMethodForBlockchainAccount(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.execGetMethodForBlockchainAccountRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get account transactions
     */
    getBlockchainAccountTransactionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getBlockchainAccountTransactions.');
            }
            const queryParameters = {};
            if (requestParameters.afterLt !== undefined) {
                queryParameters['after_lt'] = requestParameters.afterLt;
            }
            if (requestParameters.beforeLt !== undefined) {
                queryParameters['before_lt'] = requestParameters.beforeLt;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/blockchain/accounts/{account_id}/transactions`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TransactionsFromJSON)(jsonValue));
        });
    }
    /**
     * Get account transactions
     */
    getBlockchainAccountTransactions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getBlockchainAccountTransactionsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get blockchain block data
     */
    getBlockchainBlockRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.blockId === null || requestParameters.blockId === undefined) {
                throw new runtime.RequiredError('blockId', 'Required parameter requestParameters.blockId was null or undefined when calling getBlockchainBlock.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/blockchain/blocks/{block_id}`.replace(`{${"block_id"}}`, encodeURIComponent(String(requestParameters.blockId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.BlockchainBlockFromJSON)(jsonValue));
        });
    }
    /**
     * Get blockchain block data
     */
    getBlockchainBlock(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getBlockchainBlockRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get transactions from block
     */
    getBlockchainBlockTransactionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.blockId === null || requestParameters.blockId === undefined) {
                throw new runtime.RequiredError('blockId', 'Required parameter requestParameters.blockId was null or undefined when calling getBlockchainBlockTransactions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/blockchain/blocks/{block_id}/transactions`.replace(`{${"block_id"}}`, encodeURIComponent(String(requestParameters.blockId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TransactionsFromJSON)(jsonValue));
        });
    }
    /**
     * Get transactions from block
     */
    getBlockchainBlockTransactions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getBlockchainBlockTransactionsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get blockchain config
     */
    getBlockchainConfigRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/blockchain/config`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.BlockchainConfigFromJSON)(jsonValue));
        });
    }
    /**
     * Get blockchain config
     */
    getBlockchainConfig(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getBlockchainConfigRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get last known masterchain block
     */
    getBlockchainMasterchainHeadRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/blockchain/masterchain-head`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.BlockchainBlockFromJSON)(jsonValue));
        });
    }
    /**
     * Get last known masterchain block
     */
    getBlockchainMasterchainHead(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getBlockchainMasterchainHeadRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get low-level information about an account taken directly from the blockchain.
     */
    getBlockchainRawAccountRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getBlockchainRawAccount.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/blockchain/accounts/{account_id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.BlockchainRawAccountFromJSON)(jsonValue));
        });
    }
    /**
     * Get low-level information about an account taken directly from the blockchain.
     */
    getBlockchainRawAccount(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getBlockchainRawAccountRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get transaction data
     */
    getBlockchainTransactionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
                throw new runtime.RequiredError('transactionId', 'Required parameter requestParameters.transactionId was null or undefined when calling getBlockchainTransaction.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/blockchain/transactions/{transaction_id}`.replace(`{${"transaction_id"}}`, encodeURIComponent(String(requestParameters.transactionId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TransactionFromJSON)(jsonValue));
        });
    }
    /**
     * Get transaction data
     */
    getBlockchainTransaction(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getBlockchainTransactionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get transaction data by message hash
     */
    getBlockchainTransactionByMessageHashRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.msgId === null || requestParameters.msgId === undefined) {
                throw new runtime.RequiredError('msgId', 'Required parameter requestParameters.msgId was null or undefined when calling getBlockchainTransactionByMessageHash.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/blockchain/messages/{msg_id}/transaction`.replace(`{${"msg_id"}}`, encodeURIComponent(String(requestParameters.msgId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TransactionFromJSON)(jsonValue));
        });
    }
    /**
     * Get transaction data by message hash
     */
    getBlockchainTransactionByMessageHash(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getBlockchainTransactionByMessageHashRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get blockchain validators
     */
    getBlockchainValidatorsRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/blockchain/validators`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ValidatorsFromJSON)(jsonValue));
        });
    }
    /**
     * Get blockchain validators
     */
    getBlockchainValidators(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getBlockchainValidatorsRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Send message to blockchain
     */
    sendBlockchainMessageRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.sendBlockchainMessageRequest === null || requestParameters.sendBlockchainMessageRequest === undefined) {
                throw new runtime.RequiredError('sendBlockchainMessageRequest', 'Required parameter requestParameters.sendBlockchainMessageRequest was null or undefined when calling sendBlockchainMessage.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/v2/blockchain/message`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.SendBlockchainMessageRequestToJSON)(requestParameters.sendBlockchainMessageRequest),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Send message to blockchain
     */
    sendBlockchainMessage(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sendBlockchainMessageRaw(requestParameters, initOverrides);
        });
    }
}
exports.BlockchainApi = BlockchainApi;
