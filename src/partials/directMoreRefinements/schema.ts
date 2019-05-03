import {
    MAX_STR_LENGTH,
} from '../../constants';

import {
    sanitization as idSan,
    validation as idVal,
} from '../id/schema';
import {
    sanitization as searchNavigationSan,
    validation as searchNavigationVal,
} from '../searchNavigation/schema';
import {
    sanitization as searchQuerySan,
    validation as searchQueryVal,
} from '../searchQuery/schema';

export const sanitization = {
    type: 'object',
    strict: true,
    properties: {
        id: idSan,
        navigation: searchNavigationSan,
        originalRequest: {
            type: 'object',
            strict: true,
            properties: {
                navigationName: { maxLength: MAX_STR_LENGTH, rules: ['trim', 'lower'] },
                originalQuery: searchQuerySan,
            },
        },
    },
};

export const validation = {
    type: 'object',
    strict: true,
    properties: {
        id: idVal,
        navigation: searchNavigationVal,
        originalRequest: {
            type: 'object',
            strict: true,
            properties: {
                navigationName: { type: 'string' },
                originalQuery: searchQueryVal,
            },
        },
    },
};
