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

import { exists, mapValues } from '../runtime';
import {
    AccountAddress,
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';

/**
 * 
 * @export
 * @interface NftCollection
 */
export interface NftCollection {
    /**
     * 
     * @type {string}
     * @memberof NftCollection
     */
    address: string;
    /**
     * 
     * @type {any}
     * @memberof NftCollection
     */
    metadata?: any | null;
    /**
     * 
     * @type {number}
     * @memberof NftCollection
     */
    nextItemIndex: number;
    /**
     * 
     * @type {AccountAddress}
     * @memberof NftCollection
     */
    owner?: AccountAddress;
    /**
     * 
     * @type {string}
     * @memberof NftCollection
     */
    rawCollectionContent: string;
}

export function NftCollectionFromJSON(json: any): NftCollection {
    return NftCollectionFromJSONTyped(json, false);
}

export function NftCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): NftCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'nextItemIndex': json['next_item_index'],
        'owner': !exists(json, 'owner') ? undefined : AccountAddressFromJSON(json['owner']),
        'rawCollectionContent': json['raw_collection_content'],
    };
}

export function NftCollectionToJSON(value?: NftCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'metadata': value.metadata,
        'next_item_index': value.nextItemIndex,
        'owner': AccountAddressToJSON(value.owner),
        'raw_collection_content': value.rawCollectionContent,
    };
}

