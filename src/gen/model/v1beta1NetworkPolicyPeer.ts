/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1LabelSelector } from './v1LabelSelector';
import { V1beta1IPBlock } from './v1beta1IPBlock';

/**
* DEPRECATED 1.9 - This group version of NetworkPolicyPeer is deprecated by networking/v1/NetworkPolicyPeer.
*/
export class V1beta1NetworkPolicyPeer {
    'ipBlock'?: V1beta1IPBlock;
    'namespaceSelector'?: V1LabelSelector;
    'podSelector'?: V1LabelSelector;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ipBlock",
            "baseName": "ipBlock",
            "type": "V1beta1IPBlock"
        },
        {
            "name": "namespaceSelector",
            "baseName": "namespaceSelector",
            "type": "V1LabelSelector"
        },
        {
            "name": "podSelector",
            "baseName": "podSelector",
            "type": "V1LabelSelector"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1NetworkPolicyPeer.attributeTypeMap;
    }
}
