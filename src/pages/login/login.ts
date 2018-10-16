import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  LoadingController, 
  ToastController 
} from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: {
    email: string,
    Password: string,
  } = {
    email : '',
    Password : ''
  }

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private authProvider: AuthenticationProvider
  ) {}

  /**
		* Sign in using email and password
  */
  signIn(){
    let loading = this.loadingCtrl.create({spinner: 'crescent', showBackdrop: true, content: 'Please wait...'});
    loading.present();
    this.authProvider.signIn(this.loginForm.email, this.loginForm.Password)
      .then((userData) => {
        loading.dismiss();
        this.navCtrl.setRoot(HomePage);
        this.showToast('Logged in successfully!');
      }, (error) => {
        loading.dismiss();
        if (error.code == 'auth/invalid-email') this.showToast('Email address is not valid.');
        else if (error.code == 'auth/user-disabled') this.showToast('Your account has been disabled.');
        else if (error.code == 'auth/user-not-found') this.showToast('User not found.');
        else if (error.code == 'auth/wrong-password') this.showToast('Invalid password.');
      });
  }

  /**
		* Show alert message
		* @param alertTitle		Title of alert
		* @param message      Message of alert
		* @return             Instance of created alert
  */
  showAlert(alertTitle, message) {
    const alert = this.alertCtrl.create({
     title: alertTitle,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
    return alert;
  }

  /**
    * Show toast message
    * @param message      Message of toast
    * @return             Instance of created toast
  */
  showToast(message: string) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
    return toast;
  }
}
