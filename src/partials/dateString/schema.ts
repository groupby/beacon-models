import {
    isValidDate,
    toDateString,
} from '../../utils';

export const sanitization = {
    type: 'string',
    exec: (schema: any, value: any) => toDateString(value),
};

export const validation = {
    type: 'string',
    exec: isValidDate,
};
