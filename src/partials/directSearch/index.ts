import {
    Id,
} from '../id';
import {
    SearchNavigationList,
} from '../searchNavigationList';
import {
    SearchQuery,
} from '../searchQuery';

export interface DirectSearch {
    id: Id;
    totalRecordCount: number;
    area?: string;
    biasingProfile?: string;
    query: string;
    originalQuery?: string;
    correctedQuery?: string;
    warnings?: string[];
    errors?: string;
    template?: {
        name?: string,
        ruleName?: string,
        _id?: string,
    };
    pageInfo: {
        recordStart: number,
        recordEnd: number,
    };
    relatedQueries?: string[];
    rewrites?: string[];
    redirect?: string;
    siteParams?: { [idx: string]: string }[];
    matchStrategy?: {
        name?: string,
        rules?: {
            terms?: number,
            termsGreaterThan?: number,
            mustMatch?: number,
            percentage?: boolean,
        }[],
    };
    availableNavigation?: SearchNavigationList;
    selectedNavigation?: SearchNavigationList;
    records?: {
        allMeta?: {
            sku?: string,
            productId?: string,
        },
        refinementMatches?: {
            name?: string,
            values?: {
                value?: string,
                count?: number,
            }[],
        }[],
        _id?: string,
        _u?: string,
        _t?: string,
        collection?: string,
    }[];
    didYouMean?: string[];
    originalRequest?: SearchQuery;
}
