import { Item } from './item';
import { Metadata } from './metadata';

export interface Cart {
    id?: string;
    items: Item[];
    metadata?: Metadata;
}
