import {
    sanitization as customerIdSan,
    validation as customerIdVal,
} from '../partials/customerId/schema';
import {
    sanitization as directMoreRefinementsSan,
    validation as directMoreRefinementsVal,
} from '../partials/directMoreRefinements/schema';
import {
    sanitization as eventTypeSan,
    validation as eventTypeVal,
} from '../partials/eventType/schema';
import {
    sanitization as responseIdSan,
    validation as responseIdVal,
} from '../partials/responseId/schema';

export const sanitization = {
    type: 'object',
    optional: false,
    strict: true,
    properties: {
        responseId: responseIdSan,
        eventType: eventTypeSan,
        moreRefinements: directMoreRefinementsSan,
        customerId: customerIdSan,
    },
};

export const validation = {
    type: 'object',
    optional: false,
    strict: true,
    properties: {
        responseId: responseIdVal,
        eventType: eventTypeVal,
        moreRefinements: directMoreRefinementsVal,
        customerId: customerIdVal,
    },
};
