import {
    sanitization as searchNavigationSanitization,
    validation as searchNavigationValidation,
} from '../searchNavigation/schema';

export const sanitization = {
    type: 'array',
    optional: true,
    strict: true,
    items: searchNavigationSanitization,
};

export const validation = {
    type: 'array',
    optional: true,
    strict: true,
    items: searchNavigationValidation,
};
