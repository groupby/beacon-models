import { AutoMoreRefinements } from './partials/autoMoreRefinements';
import { ClientVersion } from './partials/clientVersion';
import { EventCustomer } from './partials/customer';
import { EventType } from './partials/eventType';
import { Id } from './partials/id';
import { Metadata } from './partials/metadata';
import { Visit } from './partials/visit';

export interface AutoMoreRefinements {
    NAME: string;
    id: Id;
    clientVersion: ClientVersion;
    eventType: EventType;
    customer: EventCustomer;
    visit: Visit;
    metadata?: Metadata;
    moreRefinements: AutoMoreRefinements;
}
