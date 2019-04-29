import {
    AutoSearch,
} from '../partials/autoSearch';
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
    ResponseId,
} from '../partials/responseId';
import {
    Visit,
} from '../partials/visit';

export interface AutoSearch {
    NAME: string;
    id: Id;
    clientVersion: ClientVersion;
    responseId?: ResponseId;
    eventType: EventType;
    customer: EventCustomer;
    visit: Visit;
    metadata?: Metadata;
    search: AutoSearch;
}
