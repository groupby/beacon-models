import {
    sanitization as idSan,
    validation as idVal,
} from '../id/schema';

export const sanitization = {
    type: 'object',
    strict: true,
    properties: {
        origin: {
            type: 'object',
            strict: true,
            properties: {
                autosearch: { type: 'boolean', optional: false, def: false },
                collectionSwitcher: { type: 'boolean', optional: false, def: false },
                dym: { type: 'boolean', optional: false, def: false },
                navigation: { type: 'boolean', optional: false, def: false },
                recommendations: { type: 'boolean', optional: false, def: false },
                sayt: { type: 'boolean', optional: false, def: false },
                search: { type: 'boolean', optional: false, def: false },
            },
        },
        id: idSan,
    },
};

export const validation = {
    type: 'object',
    optional: false,
    strict: true,
    properties: {
        origin: {
            type: 'object',
            optional: false,
            strict: true,
            properties: {
                autosearch: { type: 'boolean', optional: false },
                collectionSwitcher: { type: 'boolean', optional: false },
                dym: { type: 'boolean', optional: false },
                navigation: { type: 'boolean', optional: false },
                recommendations: { type: 'boolean', optional: false },
                sayt: { type: 'boolean', optional: false },
                search: { type: 'boolean', optional: false },
            },
        },
        id: idVal,
    },
};
