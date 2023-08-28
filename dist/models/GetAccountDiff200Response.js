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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccountDiff200ResponseToJSON = exports.GetAccountDiff200ResponseFromJSONTyped = exports.GetAccountDiff200ResponseFromJSON = exports.instanceOfGetAccountDiff200Response = void 0;
/**
 * Check if a given object implements the GetAccountDiff200Response interface.
 */
function instanceOfGetAccountDiff200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "balanceChange" in value;
    return isInstance;
}
exports.instanceOfGetAccountDiff200Response = instanceOfGetAccountDiff200Response;
function GetAccountDiff200ResponseFromJSON(json) {
    return GetAccountDiff200ResponseFromJSONTyped(json, false);
}
exports.GetAccountDiff200ResponseFromJSON = GetAccountDiff200ResponseFromJSON;
function GetAccountDiff200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'balanceChange': json['balance_change'],
    };
}
exports.GetAccountDiff200ResponseFromJSONTyped = GetAccountDiff200ResponseFromJSONTyped;
function GetAccountDiff200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'balance_change': value.balanceChange,
    };
}
exports.GetAccountDiff200ResponseToJSON = GetAccountDiff200ResponseToJSON;
