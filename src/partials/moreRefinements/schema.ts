import merge from 'lodash/merge';

import {
    sanitization as autoMoreRefinementsSan,
    validation as autoMoreRefinementsVal,
} from '../autoMoreRefinements/schema';

import {
    sanitization as directMoreRefinementsSan,
    validation as directMoreRefinementsVal,
} from '../directMoreRefinements/schema';

export const sanitization = {};
merge(sanitization, autoMoreRefinementsSan, directMoreRefinementsSan);

export const validation = {};
merge(validation, autoMoreRefinementsVal, directMoreRefinementsVal);

// For a manual more refinements, the morerefinements id will be optional
(sanitization as typeof directMoreRefinementsSan).properties.id.optional = true;
(validation as typeof directMoreRefinementsSan).properties.id.optional = true;
