import {
    isValidDate,
    toDateString,
} from '../../utils';

export const sanitization = {
    type: 'string',
    exec: (schema: any, value: any) => toDateString(value, { optional: true }),
    minLength: 1,
    optional: true,
};

export const validation = {
    type: 'string',
    exec: isValidDate,
    optional: true,
};
