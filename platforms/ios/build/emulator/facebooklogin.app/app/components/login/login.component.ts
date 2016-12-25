import { Component } from '@angular/core';
var fetchModule = require('fetch');
import * as tnsOAuthModule from 'nativescript-oauth';
import { WANDER_BASE_API } from '../../config/base_api';


@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  public onLoginTap(event) {
    tnsOAuthModule.login()
      .then((data)=>{
          console.log('logged in');
          console.dir("accessToken " + JSON.stringify(data));
          fetchModule.fetch(`${WANDER_BASE_API}/auth/facebook/callback`, {method: 'POST', body: JSON.stringify({accessToken: data}), headers: {"Content-Type":"application/json" } })
          .then(function(resp) {
            console.log("RESP FROM MY SERVER", JSON.stringify(resp))
          })
          .catch(function(err) {
            console.log('errror from my server', err)
          })
      })
      .catch((err)=>{
          //do something with the error
          console.log("FUCK", err)
      });
  }

}
