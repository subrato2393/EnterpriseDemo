import {Product} from './Product';

export interface IProductPagination {
    totalPages:number;
    itemsFrom:number;
    itemsTo:number;
    totalItemsCount:number;
    items: Product[];
}

export class ProductPagination implements IProductPagination {
    totalPages:number;
    itemsFrom:number;
    itemsTo:number;
    totalItemsCount:number;
    items: Product[] = [];


}
