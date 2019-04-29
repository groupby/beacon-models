import {
    EventCustomer,
} from '../partials/customer';

export interface EventSegment {
    uuid: string;
    segment: string;
    id: number;
    total: number;
    customer: EventCustomer;
    clientVersion?: string;
    serverTime: string;
}
