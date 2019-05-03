import {
    Cart,
} from '../partials/cart/index';
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
    Visit,
} from '../partials/visit';

export interface AddToCart {
    NAME: string;
    id: Id;
    eventType: EventType;
    clientVersion: ClientVersion;
    customer: EventCustomer;
    cart: Cart;
    visit: Visit;
    metadata?: Metadata;
}
