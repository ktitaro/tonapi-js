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
 * @interface PoolImplementation
 */
export interface PoolImplementation {
    /**
     * 
     * @type {string}
     * @memberof PoolImplementation
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PoolImplementation
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof PoolImplementation
     */
    url: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PoolImplementation
     */
    socials: Array<string>;
}

/**
 * Check if a given object implements the PoolImplementation interface.
 */
export function instanceOfPoolImplementation(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "socials" in value;

    return isInstance;
}

export function PoolImplementationFromJSON(json: any): PoolImplementation {
    return PoolImplementationFromJSONTyped(json, false);
}

export function PoolImplementationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PoolImplementation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'url': json['url'],
        'socials': json['socials'],
    };
}

export function PoolImplementationToJSON(value?: PoolImplementation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'url': value.url,
        'socials': value.socials,
    };
}

