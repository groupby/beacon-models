import { CustomerId } from './partials/customerId';
import { DirectMoreRefinements as DirectMoreRefinementsPartial } from
    './partials/directMoreRefinements';
import { EventType } from './partials/eventType';
import { ResponseId } from './partials/responseId';

export interface DirectMoreRefinements extends DirectMoreRefinementsPartial {
    NAME: string;
    responseId: ResponseId;
    eventType: EventType;
    moreRefinements: DirectMoreRefinementsPartial;
    customerId: CustomerId;
}
