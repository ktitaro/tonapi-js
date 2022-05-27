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
 * @interface Annotation
 */
export interface Annotation {
    /**
     * 
     * @type {AccountAddress}
     * @memberof Annotation
     */
    address: AccountAddress;
    /**
     * annotation data struct
     * @type {any}
     * @memberof Annotation
     */
    data: any | null;
    /**
     * 
     * @type {string}
     * @memberof Annotation
     */
    hash: string;
    /**
     * 
     * @type {string}
     * @memberof Annotation
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Annotation
     */
    traceId?: string;
    /**
     * 
     * @type {number}
     * @memberof Annotation
     */
    utime: number;
}

export function AnnotationFromJSON(json: any): Annotation {
    return AnnotationFromJSONTyped(json, false);
}

export function AnnotationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Annotation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': AccountAddressFromJSON(json['address']),
        'data': json['data'],
        'hash': json['hash'],
        'name': json['name'],
        'traceId': !exists(json, 'trace_id') ? undefined : json['trace_id'],
        'utime': json['utime'],
    };
}

export function AnnotationToJSON(value?: Annotation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': AccountAddressToJSON(value.address),
        'data': value.data,
        'hash': value.hash,
        'name': value.name,
        'trace_id': value.traceId,
        'utime': value.utime,
    };
}

