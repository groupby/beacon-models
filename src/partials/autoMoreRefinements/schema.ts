import {
    sanitization as idSan,
    validation as idVal,
} from '../id/schema';

export const sanitization = {
    type: 'object',
    strict: true,
    properties: {
        id: idSan,
    },
};

export const validation = {
    type: 'object',
    strict: true,
    properties: {
        id: idVal,
    },
};
