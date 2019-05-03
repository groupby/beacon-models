import {
    Id,
} from '../id';
import {
    SearchNavigation,
} from '../searchNavigation';
import {
    SearchQuery,
} from '../searchQuery';

export interface DirectMoreRefinements {
    id: Id;
    navigation: SearchNavigation;
    originalRequest: {
        navigationName: string,
        originalQuery: SearchQuery,
    };
}
