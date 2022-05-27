/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Account,
    AccountFromJSON,
    AccountToJSON,
    Block,
    BlockFromJSON,
    BlockToJSON,
    Transaction,
    TransactionFromJSON,
    TransactionToJSON,
    Transactions,
    TransactionsFromJSON,
    TransactionsToJSON,
} from '../models';

export interface GetAccountRequest {
    account: string;
}

export interface GetBlockByHashRequest {
    blockHash: string;
}

export interface GetTransactionRequest {
    hash: string;
}

export interface GetTransactionsRequest {
    account?: string;
    maxLt?: number;
    minLt?: number;
    limit?: number;
}

/**
 * RawBlockchainApi - interface
 * 
 * @export
 * @interface RawBlockchainApiInterface
 */
export interface RawBlockchainApiInterface {
    /**
     * Get all info about account address
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RawBlockchainApiInterface
     */
    getAccountRaw(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Account>>;

    /**
     * Get all info about account address
     */
    getAccount(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Account>;

    /**
     * Get block by root hash
     * @param {string} blockHash block root hash in hex (without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RawBlockchainApiInterface
     */
    getBlockByHashRaw(requestParameters: GetBlockByHashRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Block>>;

    /**
     * Get block by root hash
     */
    getBlockByHash(requestParameters: GetBlockByHashRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Block>;

    /**
     * Get transaction by hash
     * @param {string} hash transaction hash in hex (without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RawBlockchainApiInterface
     */
    getTransactionRaw(requestParameters: GetTransactionRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Transaction>>;

    /**
     * Get transaction by hash
     */
    getTransaction(requestParameters: GetTransactionRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Transaction>;

    /**
     * Get transactions by account address
     * @param {string} [account] address in raw (hex without 0x) or base64url format
     * @param {number} [maxLt] omit this parameter to get last transactions
     * @param {number} [minLt] omit this parameter to get last transactions
     * @param {number} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RawBlockchainApiInterface
     */
    getTransactionsRaw(requestParameters: GetTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Transactions>>;

    /**
     * Get transactions by account address
     */
    getTransactions(requestParameters: GetTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Transactions>;

}

/**
 * 
 */
export class RawBlockchainApi extends runtime.BaseAPI implements RawBlockchainApiInterface {

    /**
     * Get all info about account address
     */
    async getAccountRaw(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Account>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling getAccount.');
        }

        const queryParameters: any = {};

        if (requestParameters.account !== undefined) {
            queryParameters['account'] = requestParameters.account;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/blockchain/getAccount`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountFromJSON(jsonValue));
    }

    /**
     * Get all info about account address
     */
    async getAccount(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Account> {
        const response = await this.getAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get block by root hash
     */
    async getBlockByHashRaw(requestParameters: GetBlockByHashRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Block>> {
        if (requestParameters.blockHash === null || requestParameters.blockHash === undefined) {
            throw new runtime.RequiredError('blockHash','Required parameter requestParameters.blockHash was null or undefined when calling getBlockByHash.');
        }

        const queryParameters: any = {};

        if (requestParameters.blockHash !== undefined) {
            queryParameters['blockHash'] = requestParameters.blockHash;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/blockchain/getBlock`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BlockFromJSON(jsonValue));
    }

    /**
     * Get block by root hash
     */
    async getBlockByHash(requestParameters: GetBlockByHashRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Block> {
        const response = await this.getBlockByHashRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get transaction by hash
     */
    async getTransactionRaw(requestParameters: GetTransactionRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Transaction>> {
        if (requestParameters.hash === null || requestParameters.hash === undefined) {
            throw new runtime.RequiredError('hash','Required parameter requestParameters.hash was null or undefined when calling getTransaction.');
        }

        const queryParameters: any = {};

        if (requestParameters.hash !== undefined) {
            queryParameters['hash'] = requestParameters.hash;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/blockchain/getTransaction`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     * Get transaction by hash
     */
    async getTransaction(requestParameters: GetTransactionRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Transaction> {
        const response = await this.getTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get transactions by account address
     */
    async getTransactionsRaw(requestParameters: GetTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Transactions>> {
        const queryParameters: any = {};

        if (requestParameters.account !== undefined) {
            queryParameters['account'] = requestParameters.account;
        }

        if (requestParameters.maxLt !== undefined) {
            queryParameters['maxLt'] = requestParameters.maxLt;
        }

        if (requestParameters.minLt !== undefined) {
            queryParameters['minLt'] = requestParameters.minLt;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/blockchain/getTransactions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionsFromJSON(jsonValue));
    }

    /**
     * Get transactions by account address
     */
    async getTransactions(requestParameters: GetTransactionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Transactions> {
        const response = await this.getTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
