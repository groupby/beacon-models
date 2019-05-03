import { Id } from '../id';

export interface AutoSearch {
    id: Id;
    origin: {
        sayt: boolean,
        dym: boolean,
        search: boolean,
        recommendations: boolean,
        autosearch: boolean,
        navigation: boolean,
        collectionSwitcher: boolean,
    };
}
