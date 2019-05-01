import { Injectable } from '@angular/core';
import { ApiConfig } from '../../components/constants/config';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _apiBaseUrl:string = ApiConfig.ApiBaseUrl_Local;
  public _isAuthenticated: boolean = false;

  constructor(private _http:HttpClient) {}

  public checkAuthState():boolean{
    const authToken = localStorage.getItem('sprout-token');
    if(authToken){
      this._isAuthenticated = true;
      return this._isAuthenticated;
    } else {
      return this._isAuthenticated = false;
    }
}

  public loginUser($email, $password):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const reqBody = {
      email:"nbtholdings.dev5@gmail.com",
      password:"1234qwer"
    }

    return this._http.post(`${this._apiBaseUrl}/auth/login`, reqBody, httpOptions);
  }

}
