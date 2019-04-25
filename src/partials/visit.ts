/**
 * This partial is considerably more complex than the others, but
 * it's not too hard. Some parts of the interfaces and schemas are
 * shared with the aggregate events - in this context, I will call
 * them "prototypes". The prototypes are exported so they can be
 * reused by the aggregates models. For example: the IGeneratedPrototype
 * contains the parts of the "generated" property in the visit
 * that are shared among events and aggregates.
 * The interfaces and schemas that are not prototypes contain only
 * what is used by the events, but not for the aggregates. We are
 * using inheritance here to merge the prototypes with the specific
 * parts to achieve the full schema for the events, and will do the
 * same for aggregates.
 */

import { DateStringOptional } from './dateStringOptional';
import { UrlObjectCommon } from './urlObjectCommon';

export interface GeneratedPrototype {
    serverTime?: DateStringOptional;
    deviceType?: string;
    referer?: object;
    parsedUri?: UrlObjectCommon & {
        domain?: string,
        subdomain?: string,
        tld?: string,
    };
    geo: {
        location: {
            lat: number,
            lon: number,
        },
        city: string,
        country: string,
        region: string,
    };
};

export interface Generated extends GeneratedPrototype {
    parsedUserAgent?: object;
    visitorCookieId?: string;
    sessionCookieId?: string;
    userAgentString?: string;
    ip?: string;
    uri?: string;
    timezoneOffset?: number;
    localTime?: DateStringOptional;
    language?: {
        value?: string,
        language?: string,
        region?: string,
        quality?: number,
    }[];
};

export interface VisitPrototype {
    customerData: {
        visitorId: string,
        sessionId: string,
        loginId?: string,
    };
    generated: GeneratedPrototype;
};

export interface Visit extends VisitPrototype {
    generated: Generated;
};
