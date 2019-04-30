import { Injectable } from '@angular/core';
import { ApiConfig } from '../../components/constants/config';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SproutApiService {

  private readonly _apiBaseUrl:string = ApiConfig.ApiBaseUrl_Local;


  constructor(private _http:HttpClient) { }


  public testSproutApi():Observable<any>{
    return this._http.get(`${this._apiBaseUrl}/health/version`);
  }


}
