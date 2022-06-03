import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from '../../../../src/environments/environment';
import {ICategoryPagination,CategoryPagination } from '../models/CategoryPagination'
import { Category } from '../models/Category';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = environment.apiUrl;
  Categorys: Category[] = [];
  CategoryPagination = new CategoryPagination();
  constructor(private http: HttpClient) { }

  getCategories(pageNumber, pageSize, searchText) { 

    let params = new HttpParams();

    params = params.append('searchText', searchText.toString());
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());

    
    return this.http.get<ICategoryPagination>(this.baseUrl + '/category/get-categories', { observe: 'response', params })
    .pipe(
      map(response => {
        this.Categorys = [...this.Categorys, ...response.body.items];
        this.CategoryPagination = response.body;
        return this.CategoryPagination;
      })
    );  
  }
  find(id: number) {
    return this.http.get<Category>(this.baseUrl + '/category/get-categorydetail/' + id);
  }
  update(id: number,model: any) {
    return this.http.put(this.baseUrl + '/category/update-category/'+id, model);
  }
  submit(model: any) {
    return this.http.post(this.baseUrl + '/category/save-category', model);
  } 
  delete(id:number){
    return this.http.delete(this.baseUrl + '/category/delete-Category/'+id);
  }

}
