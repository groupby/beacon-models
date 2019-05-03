import {
    Metadata,
} from '../metadata';


export interface Item {
    category?: string;
    collection: string;
    title: string;
    sku?: string;
    productId: string;
    parentId?: string;
    margin?: number;
    price?: number;
    quantity: number;
    metadata?: Metadata;
}
