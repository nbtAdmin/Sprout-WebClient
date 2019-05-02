import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private _isAuthenticated:boolean;
  private _email:string;
  private _password:string;

  constructor(private _authService : AuthService, private _router:Router) { }

  ngOnInit() {

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });


    this._isAuthenticated = this._authService.checkAuthState();
    if(this._isAuthenticated){
      //TODO:Redirect to Dashboard

      console.log("User Is Authenticated")
    } else {
      this._authService.loginUser("","").subscribe(
        (res:any) => {
          localStorage.setItem('sprout-token', res.access_token)
        }, 
        err => {
          console.log(err);
        }
      );
    }
  }

}
