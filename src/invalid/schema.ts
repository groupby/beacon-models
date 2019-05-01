import {
    sanitization as clientVersionSan,
    validation as clientVersionVal,
} from '../partials/clientVersion/schema';
import {
    sanitization as customerSan,
    validation as customerVal,
} from '../partials/customer/schema';
import {
    sanitization as dateStringSan,
    validation as dateStringVal,
} from '../partials/dateString/schema';
import {
    sanitization as eventStringSan,
    validation as eventStringVal,
} from '../partials/eventString/schema';
import {
    sanitization as eventTypeSan,
    validation as eventTypeVal,
} from '../partials/eventType/schema';
import {
    sanitization as idSan,
    validation as idVal,
} from '../partials/id/schema';

export const sanitization = {
    type: 'object',
    strict: true,
    properties: {
        clientVersion: clientVersionSan,
        customer: customerSan,
        dateReceivedAsInvalid: dateStringSan,
        eventString: eventStringSan,
        eventType: eventTypeSan,
        id: idSan,
    },
};

export const validation = {
    type: 'object',
    strict: true,
    properties: {
        clientVersion: clientVersionVal,
        customer: customerVal,
        dateReceivedAsInvalid: dateStringVal,
        eventString: eventStringVal,
        eventType: eventTypeVal,
        id: idVal,
    },
};
