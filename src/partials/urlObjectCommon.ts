// Copied from @types/node@3.4.3 to avoid consumers requiring @types/node
export interface UrlObjectCommon {
    auth?: string;
    hash?: string;
    host?: string;
    hostname?: string;
    href?: string;
    path?: string;
    pathname?: string;
    protocol?: string;
    search?: string;
    slashes?: boolean;
};

// No sanitization or validation
