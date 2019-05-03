import {
    Metadata,
} from '../metadata';

export interface Product {
    category?: string;
    collection: string;
    title: string;
    sku?: string;
    productId: string;
    parentId?: string;
    margin?: number;
    price?: number;
    metadata?: Metadata;
}
