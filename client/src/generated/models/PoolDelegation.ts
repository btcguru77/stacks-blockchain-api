/* tslint:disable */
/* eslint-disable */
/**
 * Stacks Blockchain API
 * Welcome to the API reference overview for the <a href=\"https://docs.hiro.so/get-started/stacks-blockchain-api\">Stacks Blockchain API</a>.  <a href=\"https://hirosystems.github.io/stacks-blockchain-api/collection.json\" download=\"stacks-api-collection.json\">Download Postman collection</a> 
 *
 * The version of the OpenAPI document: STACKS_API_VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PoolDelegation
 */
export interface PoolDelegation {
    /**
     * The principal of the pool member that issued the delegation
     * @type {string}
     * @memberof PoolDelegation
     */
    stacker: string;
    /**
     * The pox-addr value specified by the stacker in the delegation operation
     * @type {string}
     * @memberof PoolDelegation
     */
    pox_addr?: string;
    /**
     * The amount of uSTX delegated by the stacker
     * @type {string}
     * @memberof PoolDelegation
     */
    amount_ustx: string;
    /**
     * The optional burnchain block unlock height that the stacker may have specified
     * @type {number}
     * @memberof PoolDelegation
     */
    burn_block_unlock_height?: number;
    /**
     * The block height at which the stacker delegation transaction was mined at
     * @type {number}
     * @memberof PoolDelegation
     */
    block_height: number;
    /**
     * The tx_id of the stacker delegation operation
     * @type {string}
     * @memberof PoolDelegation
     */
    tx_id: string;
}

export function PoolDelegationFromJSON(json: any): PoolDelegation {
    return PoolDelegationFromJSONTyped(json, false);
}

export function PoolDelegationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PoolDelegation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stacker': json['stacker'],
        'pox_addr': !exists(json, 'pox_addr') ? undefined : json['pox_addr'],
        'amount_ustx': json['amount_ustx'],
        'burn_block_unlock_height': !exists(json, 'burn_block_unlock_height') ? undefined : json['burn_block_unlock_height'],
        'block_height': json['block_height'],
        'tx_id': json['tx_id'],
    };
}

export function PoolDelegationToJSON(value?: PoolDelegation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stacker': value.stacker,
        'pox_addr': value.pox_addr,
        'amount_ustx': value.amount_ustx,
        'burn_block_unlock_height': value.burn_block_unlock_height,
        'block_height': value.block_height,
        'tx_id': value.tx_id,
    };
}
