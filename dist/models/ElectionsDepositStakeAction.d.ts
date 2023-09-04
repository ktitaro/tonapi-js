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
/**
 *
 * @export
 * @interface ElectionsDepositStakeAction
 */
export interface ElectionsDepositStakeAction {
    /**
     *
     * @type {number}
     * @memberof ElectionsDepositStakeAction
     */
    amount: number;
    /**
     *
     * @type {AccountAddress}
     * @memberof ElectionsDepositStakeAction
     */
    staker: AccountAddress;
}
/**
 * Check if a given object implements the ElectionsDepositStakeAction interface.
 */
export declare function instanceOfElectionsDepositStakeAction(value: object): boolean;
export declare function ElectionsDepositStakeActionFromJSON(json: any): ElectionsDepositStakeAction;
export declare function ElectionsDepositStakeActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ElectionsDepositStakeAction;
export declare function ElectionsDepositStakeActionToJSON(value?: ElectionsDepositStakeAction | null): any;
