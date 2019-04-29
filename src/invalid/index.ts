import {
    ClientVersion,
} from '../partials/clientVersion';
import {
    DateStringOptional,
} from '../partials/dateStringOptional';
import {
    EventCustomer,
} from '../partials/customer';
import {
    EventString,
} from '../partials/eventString';
import {
    EventType,
} from '../partials/eventType';
import {
    Id,
} from '../partials/id';

export interface Invalid {
    NAME: string;
    id: Id;
    clientVersion: ClientVersion;
    eventType: EventType;
    customer: EventCustomer;
    dateReceivedAsInvalid: DateStringOptional;
    eventString?: EventString;
    errors: (string | { type: string, message: string })[];
}
