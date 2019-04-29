import {
    ClientVersion,
} from '../partials/clientVersion';
import {
    EventCustomer,
} from '../partials/customer';
import {
    EventType,
} from '../partials/eventType';
import {
    Id,
} from '../partials/id';
import {
    Metadata,
} from '../partials/metadata';
import {
    Visit as VisitPartial,
} from '../partials/visit';

export interface MoreRefinements {
    NAME: string;
    id: Id;
    clientVersion: ClientVersion;
    eventType: EventType;
    customer: EventCustomer;
    visit: VisitPartial;
    metadata?: Metadata;
    moreRefinements: MoreRefinements;
}
