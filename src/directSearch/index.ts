import {
    CustomerId,
} from '../partials/customerId';
import {
    DirectSearch as DirectSearchPartial,
} from '../partials/directSearch';
import {
    EventType,
} from '../partials/eventType';
import {
    ResponseId,
} from '../partials/responseId';

export interface DirectSearch extends DirectSearchPartial {
    NAME: string;
    responseId: ResponseId;
    eventType: EventType;
    search: DirectSearchPartial;
    customerId: CustomerId;
}
