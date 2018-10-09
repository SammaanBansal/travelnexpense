import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginForm: {
    ssoId: string,
    Password: string
  } = { 
      ssoId: "",
      Password: ""
  } 
  invalid : boolean = true;

  constructor(public navCtrl: NavController) {

  }

}
