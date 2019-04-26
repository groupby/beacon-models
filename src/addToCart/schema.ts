import {
    sanitization as cartSan,
    validation as cartVal,
} from '../partials/cart/schema';
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
    sanitization as idSan,
    validation as idVal,
} from '../partials/metadata/schema';

export const sanitization = {
    type: 'object',
    strict: true,
    properties: {
        cart: cartSan,
        clientVersion: clientVersionSan,
        customer: customerSan,
        eventType: eventTypeSan,
        id: idSan,
        metadata: metadataSan,
        visit: visitSan,
    },
};

export const validation = {
    type: 'object',
    strict: true,
    properties: {
        cart: cartVal,
        clientVersion: clientVersionVal,
        customer: customerVal,
        eventType: eventTypeVal,
        id: idVal,
        metadata: metadataVal,
        visit: visitVal,
    },
};
