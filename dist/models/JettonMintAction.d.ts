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
import type { AccountAddress } from './AccountAddress';
import type { JettonPreview } from './JettonPreview';
/**
 *
 * @export
 * @interface JettonMintAction
 */
export interface JettonMintAction {
    /**
     *
     * @type {AccountAddress}
     * @memberof JettonMintAction
     */
    recipient: AccountAddress;
    /**
     *
     * @type {string}
     * @memberof JettonMintAction
     */
    recipientsWallet: string;
    /**
     * amount in quanta of tokens
     * @type {string}
     * @memberof JettonMintAction
     */
    amount: string;
    /**
     *
     * @type {JettonPreview}
     * @memberof JettonMintAction
     */
    jetton: JettonPreview;
}
/**
 * Check if a given object implements the JettonMintAction interface.
 */
export declare function instanceOfJettonMintAction(value: object): boolean;
export declare function JettonMintActionFromJSON(json: any): JettonMintAction;
export declare function JettonMintActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): JettonMintAction;
export declare function JettonMintActionToJSON(value?: JettonMintAction | null): any;
