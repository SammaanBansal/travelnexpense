import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

import { AuthenticationProvider } from '../../providers/authentication/authentication';

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

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    private authProvider: AuthenticationProvider
  ) {
    this.signup();
  }

  signIn(){
    let email = 'piyush@gmail.com',
      pass = 'abcdefghi';
      this.authProvider.signIn(email, pass)
        .then((userData) => {
          console.log("User logged in successfully!", userData);
        }, (err) => {
          console.log("User not logged in !", err);
        })
    // if(this.ssoId == "sam123" && this.Password === "asdfzxcv"){
    //   let email = 'piyush@gmail.com',
    //   pass = 'abcdefghi';
    //   this.authProvider.signIn(email, pass)
    //     .then((userData) => {
    //       console.log("User logged in successfully!", userData);
    //     }, (err) => {
    //       console.log("User not logged in !", err);
    //     })
    //   // this.navCtrl.setRoot(HomePage);
    //   //this.message = "Correct password";
    // }
    // else{
    //   this.showAlert("Invalid Credentials","Please enter correct sso id and password!");
    // }
  }

  signup() {
    let email = 'piyush1@gmail.com',
    pass = 'abcdefghi';
    this.authProvider.register(email, pass)
      .then((userData) => {
        console.log("User registered successfully! ", userData);
      }, (err) => {
        console.log("User not registered! ", err);
      });
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
