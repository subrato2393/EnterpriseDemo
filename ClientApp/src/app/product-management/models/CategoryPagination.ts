import {Category} from './Category';

export interface ICategoryPagination {
    totalPages:number;
    itemsFrom:number;
    itemsTo:number;
    totalItemsCount:number;
    items: Category[];
}

export class CategoryPagination implements ICategoryPagination {
    totalPages:number;
    itemsFrom:number;
    itemsTo:number;
    totalItemsCount:number;
    items: Category[] = [];


}
