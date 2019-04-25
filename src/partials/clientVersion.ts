export interface ClientVersion {
    raw: string;
    version?: string;
    prerelease?: string[];
    build?: string[];
    major?: number;
    minor?: number;
    patch?: number;
}
