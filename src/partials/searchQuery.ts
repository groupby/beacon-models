export interface SearchQuery {
    collection?: string;
    area?: string;
    sessionId?: string;
    visitorId?: string;
    biasingProfile?: string;
    language?: string;
    customUrlParams?: { [key: string]: string }[];
    query?: string;
    refinementQuery?: string;
    matchStrategyName?: string;
    matchStrategy: {
        name: string,
        rules: {
            terms: number,
            termsGreaterThan: number,
            mustMatch: number,
            percentage: boolean,
        }[],
    };
    biasing?: {
        bringToTop?: string[],
        augmentBiases?: boolean,
        influence?: number,
        biases?: {
            name?: string,
            content?: string,
            strength?: string,
        }[],
    };
    skip?: number;
    pageSize?: number;
    returnBinary?: boolean;
    disableAutocorrection?: boolean;
    pruneRefinements?: boolean;
    sort?: {
        field?: string,
        order?: string,
    }[];
    fields?: string[];
    orFields?: string[];
    wildcardSearchEnabled?: boolean;
    restrictNavigation?: {
        name?: string,
        count?: number,
    };
    includedNavigations?: string[];
    excludedNavigations?: string[];
    refinements?: {
        navigationName?: string,
        type?: string,
        _id?: string,
        exclude?: boolean,
        value?: string,
        high?: string,
        low?: string,
    }[];
};
