import {
    MAX_STR_LENGTH,
} from '../../constants';

import {
    sanitization as metadataSan,
    validation as metadataVal,
} from '../metadata/schema';

export const sanitization = {
    type: 'object',
    strict: true,
    properties: {
        category: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'], optional: true },
        collection: {
            type: 'string',
            maxLength: MAX_STR_LENGTH,
            rules: ['trim'],
            optional: false,
            def: 'default',
        },
        title: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
        sku: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim'], optional: true },
        productId: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim'] },
        parentId: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim'], optional: true },
        margin: { type: 'number', optional: true },
        price: { type: 'number', optional: true },
        quantity: { type: 'integer' },
        metadata: metadataSan,
    },
};

export const validation = {
    type: 'object',
    strict: true,
    properties: {
        category: { type: 'string', optional: true },
        collection: { type: 'string', optional: false },
        title: { type: 'string', optional: false },
        sku: { type: 'string', optional: true },
        productId: { type: 'string', optional: false },
        parentId: { type: 'string', optional: true },
        margin: { type: 'number', optional: true },
        price: { type: 'number', optional: true },
        quantity: { type: 'integer', optional: false },
        metadata: metadataVal,
    },
};


