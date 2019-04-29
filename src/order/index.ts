import {
    Cart as CartPartial,
} from '../partials/cart';
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

export interface Order {
    NAME: string;
    id: Id;
    clientVersion: ClientVersion;
    eventType: EventType;
    customer: EventCustomer;
    visit: VisitPartial;
    cart: CartPartial;
    metadata?: Metadata;
}
