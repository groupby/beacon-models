import merge from 'lodash/merge';

import {
    sanitization as autoSearchSan,
    validation as autoSearchVal,
  } from '../autoSearch/schema';

import {
  sanitization as directSearchSan,
  validation as directSearchVal,
} from '../directSearch/schema';

export const sanitization = {};
merge(sanitization, autoSearchSan, directSearchSan);

export const validation = {};
merge(validation, autoSearchVal, directSearchVal);

// For a manual search, the search id will be optional
(sanitization as typeof directSearchSan).properties.id.optional = true;
(validation as typeof directSearchSan).properties.id.optional = true;
