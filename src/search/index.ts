import { ClientVersion } from './partials/clientVersion';
import { EventCustomer } from './partials/customer';
import { EventType } from './partials/eventType';
import { Id } from './partials/id';
import { Metadata } from './partials/metadata';
import { ResponseId } from './partials/responseId';
import { Search as SearchPartial } from './partials/search';
import { Visit as VisitPartial } from './partials/visit';

export interface Search {
    NAME: string;
    id: Id;
    clientVersion: ClientVersion;
    responseId?: ResponseId;
    eventType: EventType;
    customer: EventCustomer;
    visit: VisitPartial;
    metadata?: Metadata;
    search: SearchPartial;
}
