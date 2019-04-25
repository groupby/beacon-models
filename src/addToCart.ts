import { Cart } from './partials/cart';
import { ClientVersion } from './partials/clientVersion';
import { EventCustomer } from './partials/customer';
import { EventType } from './partials/eventType';
import { Id } from './partials/id';
import { Metadata } from './partials/metadata';
import { Visit } from './partials/visit';

export interface IAddToCart {
    NAME: string;
    id: Id;
    eventType: EventType;
    clientVersion: ClientVersion;
    customer: EventCustomer;
    cart: Cart;
    visit: Visit;
    metadata?: Metadata;
}
