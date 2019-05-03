import {
    MAX_ARRAY_LENGTH,
    MAX_STR_LENGTH,
} from '../../constants';

export const sanitization = {
    type: 'object',
    strict: true,
    properties: {
        raw: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
        version: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'], optional: true },
        prerelease: {
            type: 'array',
            maxLength: MAX_ARRAY_LENGTH,
            items: {
                maxLength: MAX_STR_LENGTH,
                rules: ['trim', 'lower'],
            },
            optional: true,
        },
        build: {
            type: 'array',
            maxLength: MAX_ARRAY_LENGTH,
            items: {
                maxLength: MAX_STR_LENGTH,
                rules: ['trim', 'lower'],
            },
            optional: true,
        },
        major: { type: 'integer', optional: true },
        minor: { type: 'integer', optional: true },
        patch: { type: 'integer', optional: true },
    },
};

export const validation = {
    type: 'object',
    strict: true,
    properties: {
        raw: { type: 'string' },
        version: { type: 'string', optional: true },
        prerelease: { type: 'array', optional: true, items: { type: 'string' } },
        build: { type: 'array', optional: true, items: { type: 'string' } },
        major: { type: 'integer', optional: true },
        minor: { type: 'integer', optional: true },
        patch: { type: 'integer', optional: true },
    },
};
