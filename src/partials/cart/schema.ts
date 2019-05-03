import {
    MAX_STR_LENGTH,
} from '../../constants';

import {
    sanitization as itemSan,
    validation as itemVal,
} from '../item/schema';
import {
    sanitization as metadataSan,
    validation as metadataVal,
} from '../metadata/schema';

export const sanitization = {
    type: 'object',
    strict: true,
    properties: {
        id: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'], optional: true },
        items: { type: 'array', items: itemSan },
        metadata: metadataSan,
    },
};

export const validation = {
    type: 'object',
    strict: true,
    properties: {
        id: { type: 'string', optional: true },
        items: { type: 'array', items: itemVal },
        metadata: metadataVal,
    },
};
