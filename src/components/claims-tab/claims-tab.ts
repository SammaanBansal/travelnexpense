import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import { ClaimDetailsPage } from '../../pages/claim-details/claim-details';
import { LoginPage } from '../../pages/login/login';
import { Camera, CameraOptions } from '@ionic-native/camera';
// import { File } from '@ionic-native/file';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
//import * as crypto from 'crypto';
/**
 * Generated class for the ClaimsTabComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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

  photo : any = 0;

  reciepts: { name: string, imageData: any, downloadUrl?:string }[] = [];
  lenReciepts = this.reciepts.length;
  
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private camera: Camera, private storage: AngularFireStorage) {
    console.log(this.lenReciepts);
  }
  
  generateRandom(){
    let imageName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return imageName;
  }

  /**
    * Function to activate native camera
    
  */

  clickImage() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let newImageObj = {
        name: this.generateRandom(),
        imageData: 'data:image/jpeg;base64,' + imageData,
      }
      this.reciepts.push(newImageObj);
      this.uploadFile(newImageObj);
    }, (err) => {
        // Handle error
    });
  }
  

  uploadFile(image) {
    const filePath = image.name;
    const fileRef = this.storage.ref(filePath);
    const task = fileRef.putString(image.imageData, 'data_url');
    console.log('filePath', JSON.stringify(filePath))
    console.log('fileRef', JSON.stringify(fileRef));
    console.log('task', task);
    // observe percentage changes

    // task.then((res) => {
    //   console.log("Resposne :", res);
    // }, (err) => {
    //   console.log("Error:", JSON.stringify(err));
    // })
     this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
     task.snapshotChanges().pipe(
       finalize(() => {fileRef.getDownloadURL().subscribe((res) => {
        this.downloadURL =  res;

       }, (err) => {
         
       }) })
     )
     .subscribe((res) => {
       console.log("RESPONSE FROM UPLOAD: ", res);
     }, (err) => {
       console.log("ERROR from upload: ", err);
     })
    //  console.log('downloadURL', fileRef.getDownloadURL());
  }


  uploadImage() {
    const options: CameraOptions = {
      quality: 70,
      sourceType: 2,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let newImageObj = {
        name: this.generateRandom(),
        imageData: 'data:image/jpeg;base64,' + imageData,
      }
      this.reciepts.push(newImageObj);
      this.uploadFile(newImageObj);
    }, (err) => {
        // Handle error
    });
  }

/**
  * redirect to claim details page
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
