import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  ssoId: string;
  Password: string;
  invalid : boolean = true;
  message: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  signIn(){
    if(this.ssoId == "sam123" && this.Password === "asdfzxcv"){
      this.navCtrl.push(DashboardPage);
      //this.message = "Correct password";
    }
    else{
      this.showAlert("Invalid Credentials","Please enter correct sso id and password!");
    }
  }

  showAlert(alertTitle,message) {
    const alert = this.alertCtrl.create({
     title: alertTitle,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
}
