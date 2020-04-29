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
    },
};
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
    },
};