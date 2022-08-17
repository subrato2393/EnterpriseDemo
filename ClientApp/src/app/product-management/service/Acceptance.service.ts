// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import {environment} from '../../../environments/environment';
// import {IAcceptancePagination,AcceptancePagination } from '../models/AcceptancePagination'
// import { Acceptance } from '../models/Acceptance';
// import { map } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
// export class AcceptanceService {
//   baseUrl = environment.apiUrl;
//   Acceptances: Acceptance[] = [];
//   AcceptancePagination = new AcceptancePagination();
//   constructor(private http: HttpClient) { }

//   getAcceptances(pageNumber, pageSize, searchText) { 

//     let params = new HttpParams();

//     params = params.append('searchText', searchText.toString());
//     params = params.append('pageNumber', pageNumber.toString());
//     params = params.append('pageSize', pageSize.toString());

    
//     return this.http.get<IAcceptancePagination>(this.baseUrl + '/acceptance/get-acceptances', { observe: 'response', params })
//     .pipe(
//       map(response => {
//         this.Acceptances = [...this.Acceptances, ...response.body.items];
//         this.AcceptancePagination = response.body;
//         return this.AcceptancePagination;
//       })
//     );  
//   }
//   find(id: number) {
//     return this.http.get<Acceptance>(this.baseUrl + '/acceptance/get-acceptancedetail/' + id);
//   }
//   update(id: number,model: any) {
//     return this.http.put(this.baseUrl + '/acceptance/update-acceptance/'+id, model);
//   }
//   submit(model: any) {
//     return this.http.post(this.baseUrl + '/acceptance/save-acceptance-list', model);
//   } 
//   delete(id:number){
//     return this.http.delete(this.baseUrl + '/acceptance/delete-acceptance/'+id);
//   }

//   getAcceptanceByCategoryId(id: number) {
//     return this.http.get<Acceptance[]>(this.baseUrl + '/acceptance/get-acceptances-by-categoryid?categoryId=' + id);
//   }

// }
