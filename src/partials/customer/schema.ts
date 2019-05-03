import {
    MAX_STR_LENGTH,
} from '../../constants';

export const sanitization = {
    type: 'object',
    strict: true,
    properties: {
        id: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
        area: { type: 'string', maxLength: MAX_STR_LENGTH, rules: ['trim'], optional: false, def: 'Production' },
    },
};

export const validation = {
    type: 'object',
    strict: true,
    properties: {
        id: { type: 'string' },
        area: { type: 'string', optional: false },
    },
};
