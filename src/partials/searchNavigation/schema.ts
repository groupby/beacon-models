import {
    MAX_STR_LENGTH,
} from '../../constants';

import {
    sanitization as metadataSan,
    validation as metadataVal,
} from '../metadata/schema';

export const sanitization = {
    type: 'object',
    optional: true,
    strict: true,
    properties: {
        name: { type: 'string', maxLength: MAX_STR_LENGTH, rules: [] },
        displayName: { type: 'string', maxLength: MAX_STR_LENGTH, rules: [] },
        range: { type: 'boolean' },
        or: { type: 'boolean' },
        ignored: { type: 'boolean' },
        moreRefinements: { type: 'boolean' },
        _id: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
        type: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
        refinements: {
            type: 'array',
            items: {
                type: 'object',
                strict: true,
                properties: {
                    type: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                    _id: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                    count: { type: 'integer' },
                    exclude: { type: 'boolean' },
                    value: { type: 'string', maxLength: MAX_STR_LENGTH, rules: [] },
                    high: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                    low: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                },
            },
        },
        metadata: metadataSan,
    },
};

export const validation = {
    type: 'object',
    optional: true,
    strict: true,
    properties: {
        name: { type: 'string', optional: false },
        displayName: { type: 'string', optional: true },
        range: { type: 'boolean', optional: true },
        or: { type: 'boolean', optional: true },
        ignored: { type: 'boolean', optional: true },
        moreRefinements: { type: 'boolean', optional: true },
        _id: { type: 'string', optional: true },
        type: { type: 'string', optional: true },
        refinements: {
            type: 'array',
            optional: false,
            items: {
                type: 'object',
                strict: true,
                properties: {
                    type: { type: 'string', optional: false },
                    _id: { type: 'string', optional: true },
                    count: { type: 'integer', optional: true },
                    exclude: { type: 'boolean', optional: true },
                    value: { type: 'string', optional: true },
                    high: { type: 'string', optional: true },
                    low: { type: 'string', optional: true },
                },
            },
        },
        metadata: metadataVal,
    },
};
