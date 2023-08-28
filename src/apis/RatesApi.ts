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


import * as runtime from '../runtime';
import type {
  GetBlockchainBlockDefaultResponse,
  GetChartRates200Response,
  GetRates200Response,
} from '../models/index';
import {
    GetBlockchainBlockDefaultResponseFromJSON,
    GetBlockchainBlockDefaultResponseToJSON,
    GetChartRates200ResponseFromJSON,
    GetChartRates200ResponseToJSON,
    GetRates200ResponseFromJSON,
    GetRates200ResponseToJSON,
} from '../models/index';

export interface GetChartRatesRequest {
    token: string;
    currency?: string;
    startDate?: number;
    endDate?: number;
}

export interface GetRatesRequest {
    tokens: string;
    currencies: string;
}

/**
 * RatesApi - interface
 * 
 * @export
 * @interface RatesApiInterface
 */
export interface RatesApiInterface {
    /**
     * Get chart by token
     * @param {string} token accept jetton master address
     * @param {string} [currency] 
     * @param {number} [startDate] 
     * @param {number} [endDate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RatesApiInterface
     */
    getChartRatesRaw(requestParameters: GetChartRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetChartRates200Response>>;

    /**
     * Get chart by token
     */
    getChartRates(requestParameters: GetChartRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetChartRates200Response>;

    /**
     * Get the token price to the currency
     * @param {string} tokens accept ton and jetton master addresses, separated by commas
     * @param {string} currencies accept ton and all possible fiat currencies, separated by commas
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RatesApiInterface
     */
    getRatesRaw(requestParameters: GetRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetRates200Response>>;

    /**
     * Get the token price to the currency
     */
    getRates(requestParameters: GetRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetRates200Response>;

}

/**
 * 
 */
export class RatesApi extends runtime.BaseAPI implements RatesApiInterface {

    /**
     * Get chart by token
     */
    async getChartRatesRaw(requestParameters: GetChartRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetChartRates200Response>> {
        if (requestParameters.token === null || requestParameters.token === undefined) {
            throw new runtime.RequiredError('token','Required parameter requestParameters.token was null or undefined when calling getChartRates.');
        }

        const queryParameters: any = {};

        if (requestParameters.token !== undefined) {
            queryParameters['token'] = requestParameters.token;
        }

        if (requestParameters.currency !== undefined) {
            queryParameters['currency'] = requestParameters.currency;
        }

        if (requestParameters.startDate !== undefined) {
            queryParameters['start_date'] = requestParameters.startDate;
        }

        if (requestParameters.endDate !== undefined) {
            queryParameters['end_date'] = requestParameters.endDate;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/rates/chart`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetChartRates200ResponseFromJSON(jsonValue));
    }

    /**
     * Get chart by token
     */
    async getChartRates(requestParameters: GetChartRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetChartRates200Response> {
        const response = await this.getChartRatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the token price to the currency
     */
    async getRatesRaw(requestParameters: GetRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetRates200Response>> {
        if (requestParameters.tokens === null || requestParameters.tokens === undefined) {
            throw new runtime.RequiredError('tokens','Required parameter requestParameters.tokens was null or undefined when calling getRates.');
        }

        if (requestParameters.currencies === null || requestParameters.currencies === undefined) {
            throw new runtime.RequiredError('currencies','Required parameter requestParameters.currencies was null or undefined when calling getRates.');
        }

        const queryParameters: any = {};

        if (requestParameters.tokens !== undefined) {
            queryParameters['tokens'] = requestParameters.tokens;
        }

        if (requestParameters.currencies !== undefined) {
            queryParameters['currencies'] = requestParameters.currencies;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/rates`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetRates200ResponseFromJSON(jsonValue));
    }

    /**
     * Get the token price to the currency
     */
    async getRates(requestParameters: GetRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetRates200Response> {
        const response = await this.getRatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
