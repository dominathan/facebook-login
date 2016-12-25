import { Component } from '@angular/core';
import * as tnsOAuthModule from 'nativescript-oauth';



@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  public onLoginTap(event) {
    console.log("I WAS PRESSED" + event);
    tnsOAuthModule.login()
        .then(()=>{
            console.log('logged in');
            console.dir("accessToken " + tnsOAuthModule.accessToken());
        })
        .catch((err)=>{
            //do something with the error
            console.log("FUCK", err)
        });
  }

}
