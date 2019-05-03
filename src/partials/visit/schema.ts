import merge from 'lodash/merge';

import {
    MAX_STR_LENGTH,
} from '../../constants';

import {
    sanitization as dateStringSan,
    validation as dateStringVal,
} from '../dateString/schema';

export const sanitizationPrototype = {
    type: 'object',
    strict: true,
    properties: {
        customerData: {
            type: 'object',
            strict: true,
            properties: {
                visitorId: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                sessionId: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                loginId: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
            },
        },
        generated: {
            type: 'object',
            strict: true,
            properties: {
                deviceType: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                referer: { type: 'object' },
                serverTime: dateStringSan,
                parsedUri: {
                    type: 'object',
                    strict: true,
                    properties: {
                        protocol: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                        slashes: { rules: ['trim'] },
                        host: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                        hostname: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                        pathname: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim'] },
                        path: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim'] },
                        hash: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim'] },
                        href: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim'] },
                        domain: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                        query: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim'] },
                        search: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim'] },
                        subdomain: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                        tld: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                    },
                },
                geo: {
                    strict: true,
                    properties: {
                        location: {
                            type: 'object',
                            strict: true,
                            properties: {
                                lat: { type: 'double' },
                                lon: { type: 'double' },
                            },
                        },
                        city: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                        country: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                        region: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                    },
                },
            },
        },
    },
};

export const sanitization = merge(sanitizationPrototype, {
    type: 'object',
    strict: true,
    properties: {
        generated: {
            type: 'object',
            strict: true,
            properties: {
                visitorCookieId: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                sessionCookieId: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                userAgentString: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim'] },
                parsedUserAgent: { type: 'object' },
                ip: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                uri: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim'] },
                localTime: dateStringSan,
                timezoneOffset: { type: 'integer' },
                language: {
                    type: 'array',
                    items: {
                        type: 'object',
                        strict: true,
                        properties: {
                            value: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                            language: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                            region: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                            quality: { type: 'number' },
                        },
                    },
                },
            },
        },
    },
});

export const validationPrototype = {
    type: 'object',
    strict: true,
    properties: {
        customerData: {
            type: 'object',
            strict: true,
            properties: {
                visitorId: { type: 'string' },
                sessionId: { type: 'string' },
                loginId: { type: 'string', optional: true },
            },
        },
        generated: {
            type: 'object',
            strict: true,
            properties: {
                deviceType: { type: 'string', optional: true },
                referer: { type: 'object', optional: true },
                serverTime: dateStringVal,
                parsedUri: {
                    type: 'object',
                    strict: true,
                    optional: true,
                    properties: {
                        protocol: { type: 'string', optional: true },
                        slashes: { type: 'boolean', optional: true },
                        host: { type: 'string', optional: true },
                        hostname: { type: 'string', optional: true },
                        pathname: { type: 'string', optional: true },
                        path: { type: 'string', optional: true },
                        hash: { type: 'string', optional: true },
                        href: { type: 'string', optional: true },
                        domain: { type: 'string', optional: true },
                        query: { type: 'string', optional: true },
                        search: { type: 'string', optional: true },
                        subdomain: { type: 'string', optional: true },
                        tld: { type: 'string', optional: true },
                    },
                },
                geo: {
                    type: 'object',
                    strict: true,
                    optional: true,
                    properties: {
                        location: {
                            strict: true,
                            properties: {
                                lat: { type: 'double' },
                                lon: { type: 'double' },
                            },
                        },
                        city: { type: 'string', optional: true },
                        country: { type: 'string', optional: true },
                        region: { type: 'string', optional: true },
                    },
                },
            },
        },
    },
};

export const validation = merge(validationPrototype, {
    type: 'object',
    strict: true,
    properties: {
        generated: {
            type: 'object',
            strict: true,
            properties: {
                visitorCookieId: { type: 'string', optional: true },
                sessionCookieId: { type: 'string', optional: true },
                userAgentString: { type: 'string', optional: true },
                parsedUserAgent: { type: 'object', optional: true },
                ip: { type: 'string', optional: true },
                uri: { type: 'string', optional: true },
                localTime: dateStringVal,
                timezoneOffset: { type: 'integer', optional: true },
                language: {
                    type: 'array',
                    optional: true,
                    items: {
                        type: 'object',
                        strict: true,
                        properties: {
                            value: { type: 'string', optional: true },
                            language: { type: 'string', optional: true },
                            region: { type: 'string', optional: true },
                            quality: { type: 'number', optional: true },
                        },
                    },
                },
            },
        },
    },
});
