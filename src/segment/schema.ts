import {
    sanitization as customerSan,
    validation as customerVal,
} from '../partials/customer/schema';

export const sanitization = {
    type: 'object',
    strict: true,
    properties: {
        uuid: { type: 'string' },
        segment: { type: 'string' },
        id: { type: 'integer' },
        total: { type: 'integer' },
        customer: customerSan,
        clientVersion: { type: 'string' },
    },
};

export const validation = {
    type: 'object',
    strict: true,
    properties: {
        uuid: {
            type: 'string',
            minLength: 1,
        },
        segment: {
            type: 'string',
            minLength: 1,
        },
        id: {
            type: 'integer',
            gte: 0,
        },
        total: {
            type: 'integer',
            gte: 0,
        },
        customer: customerVal,
        clientVersion: {
            type: 'string',
            optional: true,
        },
    },
};
