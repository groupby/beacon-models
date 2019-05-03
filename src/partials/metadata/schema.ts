import {
    MAX_STR_LENGTH,
} from '../../constants';

export const sanitization = {
    type: 'array',
    optional: true,
    items: {
        strict: true,
        type: 'object',
        properties: {
            key: { type: 'string', rules: ['trim', 'lower'], maxLength: MAX_STR_LENGTH },
            value: { type: 'string', rules: ['trim', 'lower'], maxLength: MAX_STR_LENGTH },
        },
    },
};

export const validation = {
    type: 'array',
    optional: true,
    items: {
        strict: true,
        type: 'object',
        properties: {
            key: { type: 'string' },
            value: { type: 'string' },
        },
    },
};
