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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface JettonHoldersAddressesInner
 */
export interface JettonHoldersAddressesInner {
    /**
     * 
     * @type {string}
     * @memberof JettonHoldersAddressesInner
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof JettonHoldersAddressesInner
     */
    balance: string;
}

/**
 * Check if a given object implements the JettonHoldersAddressesInner interface.
 */
export function instanceOfJettonHoldersAddressesInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "balance" in value;

    return isInstance;
}

export function JettonHoldersAddressesInnerFromJSON(json: any): JettonHoldersAddressesInner {
    return JettonHoldersAddressesInnerFromJSONTyped(json, false);
}

export function JettonHoldersAddressesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): JettonHoldersAddressesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'balance': json['balance'],
    };
}

export function JettonHoldersAddressesInnerToJSON(value?: JettonHoldersAddressesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'balance': value.balance,
    };
}

