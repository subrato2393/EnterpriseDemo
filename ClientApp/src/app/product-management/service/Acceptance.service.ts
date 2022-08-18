import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IAcceptancePagination,AcceptancePagination } from '../models/AcceptancePagination'
import { Acceptance } from '../models/Acceptance';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AcceptanceService {
  baseUrl = environment.apiUrl;
  Acceptances: Acceptance[] = [];
  AcceptancePagination = new AcceptancePagination();
  constructor(private http: HttpClient)
   {

   }
  submit(model: any) {
    return this.http.post(this.baseUrl + '/acceptance/save-acceptance-list', model);
  } 
}
