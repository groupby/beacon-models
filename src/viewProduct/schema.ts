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
    sanitization as productSan,
    validation as productVal,
} from '../partials/product/schema';
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
        product: productSan,
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
        product: productVal,
        visit: visitVal,
    },
};
