import {
    MAX_STR_LENGTH,
} from '../../constants';

import {
    querySanitizationXSS,
} from '../../utils';

export const sanitization = {
    type: 'object',
    optional: true,
    strict: true,
    properties: {
        collection: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
        area: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
        sessionId: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
        visitorId: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
        biasingProfile: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
        language: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
        customUrlParams: {
            type: 'array',
            items: {
                type: 'object',
                strict: true,
                properties: {
                    key: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                    value: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                },
            },
        },
        query: {
            type: 'string',
            maxLength: MAX_STR_LENGTH,
            rules: ['trim', 'lower'],
            exec: querySanitizationXSS,
        },
        refinementQuery: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
        matchStrategyName: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
        matchStrategy: {
            type: 'object',
            strict: true,
            properties: {
                name: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                rules: {
                    type: 'array',
                    items: {
                        type: 'object',
                        strict: true,
                        properties: {
                            terms: { type: 'integer' },
                            termsGreaterThan: { type: 'integer' },
                            mustMatch: { type: 'integer' },
                            percentage: { type: 'boolean' },
                        },
                    },
                },
            },
        },
        biasing: {
            type: 'object',
            strict: true,
            properties: {
                bringToTop: { type: 'array', items: { maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] } },
                augmentBiases: { type: 'boolean' },
                influence: { type: 'number' },
                biases: {
                    type: 'array',
                    items: {
                        type: 'object',
                        strict: true,
                        properties: {
                            name: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                            content: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                            strength: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                        },
                    },
                },
            },
        },
        skip: { type: 'integer' },
        pageSize: { type: 'integer' },
        returnBinary: { type: 'boolean' },
        disableAutocorrection: { type: 'boolean' },
        pruneRefinements: { type: 'boolean' },
        sort: {
            type: 'array',
            items: {
                type: 'object',
                strict: true,
                properties: {
                    field: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                    order: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                },
            },
        },
        fields: { type: 'array', items: { maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] } },
        orFields: { type: 'array', items: { maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] } },
        wildcardSearchEnabled: { type: 'boolean' },
        restrictNavigation: {
            type: 'object',
            strict: true,
            properties: {
                name: { type: 'string', maxLength: MAX_STR_LENGTH, rules: [] },
                count: { type: 'integer' },
            },
        },
        includedNavigations: { type: 'array', items: { maxLength: MAX_STR_LENGTH, rules: [] } },
        excludedNavigations: { type: 'array', items: { maxLength: MAX_STR_LENGTH, rules: [] } },
        refinements: {
            type: 'array',
            items: {
                type: 'object',
                strict: true,
                properties: {
                    navigationName: { type: 'string', maxLength: MAX_STR_LENGTH, rules: [] },
                    type: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                    _id: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                    exclude: { type: 'boolean' },
                    value: { type: 'string', maxLength: MAX_STR_LENGTH, rules: [] },
                    high: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                    low: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                },
            },
        },
    },
};

export const validation = {
    type: 'object',
    optional: true,
    strict: true,
    properties: {
        collection: { type: 'string', optional: true },
        area: { type: 'string', optional: true },
        sessionId: { type: 'string', optional: true },
        visitorId: { type: 'string', optional: true },
        biasingProfile: { type: 'string', optional: true },
        language: { type: 'string', optional: true },
        customUrlParams: {
            type: 'array',
            optional: true,
            items: {
                type: 'object',
                strict: true,
                properties: {
                    key: { type: 'string', optional: true },
                    value: { type: 'string', optional: true },
                },
            },
        },
        query: { type: 'string', optional: true },
        refinementQuery: { type: 'string', optional: true },
        matchStrategyName: { type: 'string', optional: true },
        matchStrategy: {
            type: 'object',
            optional: true,
            strict: true,
            properties: {
                name: { type: 'string', optional: true },
                rules: {
                    type: 'array',
                    items: {
                        type: 'object',
                        optional: true,
                        strict: true,
                        properties: {
                            terms: { type: 'integer', optional: true },
                            termsGreaterThan: { type: 'integer', optional: true },
                            mustMatch: { type: 'integer', optional: true },
                            percentage: { type: 'boolean', optional: true },
                        },
                    },
                },
            },
        },
        biasing: {
            type: 'object',
            optional: true,
            strict: true,
            properties: {
                bringToTop: {
                    type: 'array',
                    items: { type: 'string' },
                    optional: true,
                },
                augmentBiases: { type: 'boolean', optional: true },
                influence: { type: 'number', optional: true },
                biases: {
                    type: 'array',
                    optional: true,
                    items: {
                        type: 'object',
                        strict: true,
                        properties: {
                            name: { type: 'string', optional: true },
                            content: { type: 'string', optional: true },
                            strength: { type: 'string', optional: true },
                        },
                    },
                },
            },
        },
        skip: { type: 'integer', optional: true },
        pageSize: { type: 'integer', optional: true },
        returnBinary: { type: 'boolean', optional: true },
        disableAutocorrection: { type: 'boolean', optional: true },
        pruneRefinements: { type: 'boolean', optional: true },
        sort: {
            type: 'array',
            optional: true,
            items: {
                type: 'object',
                strict: true,
                properties: {
                    field: { type: 'string', optional: true },
                    order: { type: 'string', optional: true },
                },
            },
        },
        fields: {
            type: 'array',
            optional: true,
            items: { type: 'string' },
        },
        orFields: {
            type: 'array',
            optional: true,
            items: { type: 'string' },
        },
        wildcardSearchEnabled: { type: 'boolean', optional: true },
        restrictNavigation: {
            type: 'object',
            optional: true,
            strict: true,
            properties: {
                name: { type: 'string', optional: true },
                count: { type: 'integer', optional: true },
            },
        },
        includedNavigations: {
            type: 'array',
            optional: true,
            items: { type: 'string' },
        },
        excludedNavigations: {
            type: 'array',
            optional: true,
            items: { type: 'string' },
        },
        refinements: {
            type: 'array',
            optional: true,
            items: {
                type: 'object',
                strict: true,
                properties: {
                    navigationName: { type: 'string', optional: true },
                    type: { type: 'string', optional: true },
                    _id: { type: 'string', optional: true },
                    exclude: { type: 'boolean', optional: true },
                    value: { type: 'string', optional: true },
                    high: { type: 'string', optional: true },
                    low: { type: 'string', optional: true },
                },
            },
        },
    },
};
