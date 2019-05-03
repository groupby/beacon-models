import {
    Metadata,
} from '../metadata';

export interface SearchNavigation {
    name: string;
    displayName?: string;
    range?: boolean;
    or?: boolean;
    ignored?: boolean;
    _id?: string;
    type?: string;
    metadata?: Metadata;
    refinements: {
        type: string,
        _id?: string,
        count?: number,
        exclude?: boolean,
        value?: string,
        high?: string,
        low?: string,
    }[];
    moreRefinements?: boolean;
};
