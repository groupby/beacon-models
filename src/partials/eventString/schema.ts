import {
    MAX_STR_LENGTH,
} from '../../constants';

export const sanitization = {
    type: 'string',
    optional: true,
    maxLength: MAX_STR_LENGTH,
    rules: ['trim'],
};

export const validation = {
    type: 'string',
    optional: true,
};
