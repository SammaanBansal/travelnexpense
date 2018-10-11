import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
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

  loginForm: {
  email: string,
  Password: string,
  }={
    email : '',
    Password : '',
  }

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    private authProvider: AuthenticationProvider
  ) {

  }

  /**
		* Sign in using email and password
		* @param email		user's email
		* @param password	user's password
		* @return	on success, redirect to homepage
  */
    
  signIn(){
    console.log(this.loginForm.email);
    console.log(this.loginForm.Password);

      this.authProvider.signIn(this.loginForm.email, this.loginForm.Password)
        .then((userData) => {
          console.log("User logged in successfully!", userData);
          this.navCtrl.setRoot(HomePage);
        }, (err) => {
          console.log("User not logged in !", err);
        })
    
  }

 /*  signup() {
    let email = 'piyush1@gmail.com',
    pass = 'abcdefghi';
    this.authProvider.register(email, pass)
      .then((userData) => {
        console.log("User registered successfully! ", userData);
      }, (err) => {
        console.log("User not registered! ", err);
      });
  } */

  /**
		* Sign in using email and password
		* @param alertTitle		title of alert
		* @param message	message of alert
		* @return same page on button click
  */

  showAlert(alertTitle,message) {
    const alert = this.alertCtrl.create({
     title: alertTitle,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
}
