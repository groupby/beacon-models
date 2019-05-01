import defaults from 'lodash/defaults';
import isArray from 'lodash/isArray';
import isNumber from 'lodash/isNumber';
import isObject from 'lodash/isObject';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';

import moment from 'moment';

import regexRewritePattern from 'regexpu-core';

/**
 * Use as 'exec' for schema-inspector.
 */
export function isValidDate(this: any, schema: any, post: any) {
    if (post === undefined)
        return;
    const d = new Date(post);
    if (/invalid date/i.test(d.toString()))
        this.report(`Invalid date: ${post}`);
}

export function toDateString(value: any, options?: { optional?: true }): string;
export function toDateString(value: any, options?: { optional?: false }): string | undefined;
export function toDateString(value: any, options?: { optional?: boolean }) {
    const { optional } = defaults(options, { optional: false });
    const INVALID = optional
        ? value
        : 'invalid date';

    if (!isString(value) && !isNumber(value) && !isObject(value)) {
        return INVALID;
    } else if (isArray(value) || isPlainObject(value)) {
        return INVALID;
    }

    const numericValue = +value;
    const isNumeric = !isNaN(numericValue);

    const date = isNumeric
        ? moment(numericValue)
        : moment(value);

    const stringDate = date.toISOString();

    return stringDate
        ? stringDate
        : INVALID;
}

// Absolute minimum to limit XSS
// \p{Me} - a character that encloses the character is is combined with (circle, square, keycap, etc.).
// \p{C} - invisible control characters and unused code points.
// likely XSS charactesr: <>=;(){}[]?
const BLACKLIST_STRIPING_REGEX = new RegExp(regexRewritePattern('[\\p{Me}\\p{C}<>=;(){}\\[\\]?]', 'u', {
    unicodePropertyEscape: true,
    useUnicodeFlag: false,
}), 'g');

/**
 * Use as 'exec' for schema-inspector
 */
export function querySanitizationXSS(schema: any, post: any) {
    if (typeof post === 'string') {
        // Strip using blacklist
        post = post.replace(BLACKLIST_STRIPING_REGEX, ' ');

        // Replace all whitespace combinations with a single space
        post = post.replace(/\s\s+/g, ' ');

        post = post.trim();

        return post;
    } else {
        return post;
    }
}
