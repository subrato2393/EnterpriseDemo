import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IProductPagination,ProductPagination } from '../models/ProductPagination'
import { Product } from '../models/Product';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.apiUrl;
  Products: Product[] = [];
  ProductPagination = new ProductPagination();
  constructor(private http: HttpClient) { }

  getProducts(pageNumber, pageSize, searchText) { 

    let params = new HttpParams();

    params = params.append('searchText', searchText.toString());
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());

    
    return this.http.get<IProductPagination>(this.baseUrl + '/product/get-products', { observe: 'response', params })
    .pipe(
      map(response => {
        this.Products = [...this.Products, ...response.body.items];
        this.ProductPagination = response.body;
        return this.ProductPagination;
      })
    );  
  }
  find(id: number) {
    return this.http.get<Product>(this.baseUrl + '/product/get-productdetail/' + id);
  }
  update(id: number,model: any) {
    return this.http.put(this.baseUrl + '/product/update-product/'+id, model);
  }
  submit(model: any) {
    return this.http.post(this.baseUrl + '/product/save-product-list', model);
  } 
  delete(id:number){
    return this.http.delete(this.baseUrl + '/product/delete-product/'+id);
  }

  getProductByCategoryId(id: number) {
    return this.http.get<Product[]>(this.baseUrl + '/product/get-products-by-categoryid?categoryId=' + id);
  }

}
