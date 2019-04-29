import {
    sanitization as customerIdSan,
    validation as customerIdVal,
} from '../partials/customerId/schema';
import {
    sanitization as directSearchSan,
    validation as directSearchVal,
} from '../partials/directSearch/schema';
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
        search: directSearchSan,
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
        search: directSearchVal,
        customerId: customerIdVal,
    },
};
