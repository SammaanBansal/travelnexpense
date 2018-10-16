import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import { ClaimDetailsPage } from '../../pages/claim-details/claim-details';
import { LoginPage } from '../../pages/login/login';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'claims-tab',
  templateUrl: 'claims-tab.html'
})
export class ClaimsTabComponent {
  claimForm: {
    ExpTitle: string,
    Description: string,
    startDate: Date,
    endDate: Date,
    category: string,
    Amount: number
  } = {
    ExpTitle :'',
    Description : '',
    startDate : new Date() ,
    endDate : new Date(),
    category :'',
    Amount : 0
  }

  photo : any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private camera: Camera) {
  }


  /**
    * Function to activate native camera
    * @param photo	store converted image
    * @param options	options constant for native camera
  */

  uploadImage() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    /**
    * Function to click picture using camera
    * @param imagedata image in base64 encode
    * @param options	options for camera picture
  */

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     console.log(new Blob(imageData, {type: 'base64'}));
     this.photo = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  /**
    * redirect to claim details page
    * @param url redirect page name
  */
  submit(){
    this.navCtrl.setRoot(ClaimDetailsPage);
  }

  /**
    * Show confirm alert box
    * @param title		user's email
    * @param message	user's password
    * @return	on success, call submit function
    * @return	on cancel, load same page
  */
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'Are you sure you want to submit?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Submit',
          handler: () => {
            this.submit();
          }
        }
      ]
    });
    confirm.present();
  }
}
