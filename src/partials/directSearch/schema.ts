import {
    MAX_STR_LENGTH,
} from '../../constants';

import {
    sanitization as idSan,
    validation as idVal,
} from '../id/schema';
import {
    sanitization as searchNavigationListSan,
    validation as searchNavigationListVal,
} from '../searchNavigationList/schema';
import {
    sanitization as searchQuerySan,
    validation as searchQueryVal,
} from '../searchQuery/schema';

import {
    querySanitizationXSS,
} from '../../utils';

export const sanitization = {
    type: 'object',
    optional: false,
    strict: true,
    properties: {
        id: idSan,
        totalRecordCount: { type: 'integer' },
        area: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim'] },
        biasingProfile: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
        query: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'], exec: querySanitizationXSS },
        originalQuery: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'], exec: querySanitizationXSS },
        correctedQuery: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'], exec: querySanitizationXSS },
        warnings: {
            type: 'array',
            items: {
                type: 'string',
                maxLength: MAX_STR_LENGTH,
                rules: ['trim', 'lower'],
            },
        },
        errors: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
        template: {
            type: 'object',
            strict: true,
            properties: {
                name: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                ruleName: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                _id: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
            },
        },
        pageInfo: {
            type: 'object',
            strict: true,
            properties: {
                recordStart: { type: 'integer' },
                recordEnd: { type: 'integer' },
            },
        },
        relatedQueries: { type: 'array', items: { maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] } },
        rewrites: { type: 'array', items: { maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] } },
        redirect: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
        siteParams: {
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
        availableNavigation: searchNavigationListSan,
        selectedNavigation: searchNavigationListSan,
        records: {
            type: 'array',
            items: {
                type: 'object',
                strict: true,
                properties: {
                    allMeta: {
                        type: 'object',
                        strict: true,
                        properties: {
                            sku: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                            productId: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                        },
                    },
                    refinementMatches: {
                        type: 'array',
                        items: {
                            type: 'object',
                            strict: true,
                            properties: {
                                name: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                                values: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        strict: true,
                                        properties: {
                                            value: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                                            count: { type: 'integer' },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    _id: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                    _u: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                    _t: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                    collection: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                },

            },
        },
        didYouMean: { type: 'array', items: { maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] } },
        originalRequest: searchQuerySan,
    },
};

export const validation = {
    type: 'object',
    optional: false,
    strict: true,
    properties: {
        id: idVal,
        totalRecordCount: { type: 'integer', optional: false },
        area: { type: 'string', optional: true },
        biasingProfile: { type: 'string', optional: true },
        query: { type: 'string', optional: false },
        originalQuery: { type: 'string', optional: true },
        correctedQuery: { type: 'string', optional: true },
        warnings: { type: 'array', items: { type: 'string' }, optional: true },
        errors: { type: 'string', optional: true },
        template: {
            type: 'object',
            optional: true,
            strict: true,
            properties: {
                name: { type: 'string', optional: true },
                ruleName: { type: 'string', optional: true },
                _id: { type: 'string', optional: true },
            },
        },
        pageInfo: {
            type: 'object',
            optional: false,
            strict: true,
            properties: {
                recordStart: { type: 'integer', optional: false },
                recordEnd: { type: 'integer', optional: false },
            },
        },
        relatedQueries: { type: 'array', items: { type: 'string' }, optional: true },
        rewrites: { type: 'array', items: { type: 'string' }, optional: true },
        redirect: { type: 'string', optional: true },
        siteParams: {
            type: 'array',
            optional: true,
            strict: true,
            items: {
                type: 'object',
                properties: {
                    key: { type: 'string', optional: true },
                    value: { type: 'string', optional: true },
                },
            },
        },
        availableNavigation: searchNavigationListVal,
        selectedNavigation: searchNavigationListVal,
        matchStrategy: {
            type: 'object',
            optional: true,
            strict: true,
            properties: {
                name: { type: 'string', optional: true },
                rules: {
                    type: 'array',
                    optional: true,
                    items: {
                        type: 'object',
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
        records: {
            type: 'array',
            optional: true,
            items: {
                type: 'object',
                strict: true,
                properties: {
                    allMeta: {
                        type: 'object',
                        optional: true,
                        strict: true,
                        properties: {
                            sku: { type: 'string', optional: true },
                            productId: { type: 'string', optional: true },
                        },
                    },
                    refinementMatches: {
                        type: 'array',
                        optional: true,
                        items: {
                            type: 'object',
                            strict: true,
                            properties: {
                                name: { type: 'string', optional: true },
                                values: {
                                    type: 'array',
                                    optional: true,
                                    items: {
                                        type: 'object',
                                        strict: true,
                                        properties: {
                                            value: { type: 'string', optional: true },
                                            count: { type: 'integer', optional: true },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    _id: { type: 'string', optional: true },
                    _u: { type: 'string', optional: true },
                    _t: { type: 'string', optional: true },
                    collection: { type: 'string', optional: true },
                },
            },
        },
        didYouMean: { type: 'array', items: { type: 'string' }, optional: true },
        originalRequest: searchQueryVal,
    },
};
