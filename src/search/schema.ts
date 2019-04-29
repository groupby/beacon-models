import {
    sanitization as clientVersionSan,
    validation as clientVersionVal,
} from '../partials/clientVersion/schema';
import {
    sanitization as customerSan,
    validation as customerVal,
} from '../partials/customer/schema';
import {
    sanitization as eventTypeSan,
    validation as eventTypeVal,
} from '../partials/eventType/schema';
import {
    sanitization as idSan,
    validation as idVal,
} from '../partials/id/schema';
import {
    sanitization as metadataSan,
    validation as metadataVal,
} from '../partials/metadata/schema';
import {
    sanitization as responseIdSan,
    validation as responseIdVal,
} from '../partials/responseId/schema';
import {
    sanitization as searchSan,
    validation as searchVal,
} from '../partials/search/schema';
import {
    sanitization as visitSan,
    validation as visitVal,
} from '../partials/visit/schema';

export const sanitization = {
    type: 'object',
    strict: true,
    properties: {
        clientVersion: clientVersionSan,
        customer: customerSan,
        eventType: eventTypeSan,
        id: idSan,
        metadata: metadataSan,
        responseId: responseIdSan,
        search: searchSan,
        visit: visitSan,
    },
};

export const validation = {
    type: 'object',
    strict: true,
    properties: {
        clientVersion: clientVersionVal,
        customer: customerVal,
        eventType: eventTypeVal,
        id: idVal,
        metadata: metadataVal,
        responseId: responseIdVal,
        search: searchVal,
        visit: visitVal,
    },
};
