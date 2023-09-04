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
exports.JettonBurnActionToJSON = exports.JettonBurnActionFromJSONTyped = exports.JettonBurnActionFromJSON = exports.instanceOfJettonBurnAction = void 0;
const AccountAddress_1 = require("./AccountAddress");
const JettonPreview_1 = require("./JettonPreview");
/**
 * Check if a given object implements the JettonBurnAction interface.
 */
function instanceOfJettonBurnAction(value) {
    let isInstance = true;
    isInstance = isInstance && "sender" in value;
    isInstance = isInstance && "sendersWallet" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "jetton" in value;
    return isInstance;
}
exports.instanceOfJettonBurnAction = instanceOfJettonBurnAction;
function JettonBurnActionFromJSON(json) {
    return JettonBurnActionFromJSONTyped(json, false);
}
exports.JettonBurnActionFromJSON = JettonBurnActionFromJSON;
function JettonBurnActionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'sender': (0, AccountAddress_1.AccountAddressFromJSON)(json['sender']),
        'sendersWallet': json['senders_wallet'],
        'amount': json['amount'],
        'jetton': (0, JettonPreview_1.JettonPreviewFromJSON)(json['jetton']),
    };
}
exports.JettonBurnActionFromJSONTyped = JettonBurnActionFromJSONTyped;
function JettonBurnActionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'sender': (0, AccountAddress_1.AccountAddressToJSON)(value.sender),
        'senders_wallet': value.sendersWallet,
        'amount': value.amount,
        'jetton': (0, JettonPreview_1.JettonPreviewToJSON)(value.jetton),
    };
}
exports.JettonBurnActionToJSON = JettonBurnActionToJSON;
