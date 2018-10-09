import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
    ssoId: string;
    Password: string;
  invalid : boolean = true;

  constructor(public navCtrl: NavController) {

  }

}
