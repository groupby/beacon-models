import { Cart as CartPartial } from './partials/cart';
import { ClientVersion } from './partials/clientVersion';
import { EventCustomer } from './partials/customer';
import { EventType } from './partials/eventType';
import { Id } from './partials/id';
import { Metadata } from './partials/metadata';
import { Visit as VisitPartial } from './partials/visit';

export interface RemoveFromCart {
    NAME: string;
    id: Id;
    eventType: EventType;
    clientVersion: ClientVersion;
    customer: EventCustomer;
    cart: CartPartial;
    visit: VisitPartial;
    metadata?: Metadata;
}
