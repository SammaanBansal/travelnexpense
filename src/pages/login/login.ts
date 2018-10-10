import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  ssoId: string;
  Password: string;
  invalid : boolean = true;
  message: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  signIn(){
    if(this.ssoId == "sam123" && this.Password === "asdfzxcv"){
      this.navCtrl.setRoot(HomePage);
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
