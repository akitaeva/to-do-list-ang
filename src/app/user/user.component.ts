import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormsModule} from '@angular/forms'
import { Subscriber } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  signUpUser:any = {};

  theActualUser :any = {};

  loginUser:any = {};

  theError:any; 

  constructor(private authService: AuthService) { }

  tryToSignUp() {

    // console.log(this.signUpUser)
   
     this.authService.signup(this.signUpUser)
     .subscribe(
       res => {this.successCallback(res)},
       error => {this.errorCallback(error)}
      );
   }
   
  
   tryToLogin () {
     console.log(this.loginUser);
     this.authService.login(this.loginUser)
     .subscribe(
       res => {this.successCallback(res)},
       err => {this.errorCallback(err)}
      );
   }
   
  logMeOut() {
    this.authService.logout()
    .subscribe(res => {this.theActualUser = {} });
  }
  
  
  successCallback(userObject) {
    this.theActualUser = userObject;
    this.theError = null;
  
  }
  
  errorCallback(errorObject) {
    this.theError = errorObject;
    this.theActualUser = {};
  }
  
  checkIfLoggedIn () {
    this.authService.isLoggedIn()
    .subscribe(
      res => {this.successCallback(res)},
      err => {this.errorCallback(err)}
    )
  }

  ngOnInit() {
    this.checkIfLoggedIn();
  }

}
