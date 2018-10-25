import { Component } from '@angular/core';
import { NavController, AlertController, NavParams  } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PhotoViewer } from '@ionic-native/photo-viewer'
// Page imports
import { ClaimDetailsPage } from '../../pages/claim-details/claim-details';
import { LoginPage } from '../../pages/login/login';
// other imports
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

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
    expTitle: string,
    description: string,
    startDate: Date,
    endDate: Date,
    category: string,
    amount: number
  } = {
    expTitle :'',
    description : '',
    startDate : new Date() ,
    endDate : new Date(),
    category :'',
    amount : null
  }

  photo : any = 0;
  recNum: number = 1;
  reciepts: { name: string, imageData: any, downloadUrl?:string }[] = [];
  lenReciepts = this.reciepts.length;
  
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, private camera: Camera, private storage: AngularFireStorage, private photoViewer: PhotoViewer) {
  }
  
  generateRandom(){
    let imageName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return imageName;
  }

  /**
    * Function to activate native camera
    
  */

  clickImage(isGallerySelect: boolean) {
    const options: CameraOptions = {
      quality: 70,
      sourceType: isGallerySelect ? 2 : 1,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      
      let newImageObj = {
        name: this.claimForm.expTitle + '-reciept-' + this.recNum ,
        imageData: 'data:image/jpeg;base64,' + imageData,
      }
      this.recNum++;
      this.uploadFile(newImageObj);
    }, (err) => {
        // Handle error
    });
  }
  
  uploadFile(image) {
    const filePath = image.name;
    const fileRef = this.storage.ref(filePath);
    const task = fileRef.putString(image.imageData, 'data_url');
    
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available

     task.snapshotChanges().pipe(
       finalize(() => {fileRef.getDownloadURL().subscribe((res) => {
        image.downloadURL = res;
        this.reciepts.push(image);
       }, (err) => {
         
       }) })
     )
     .subscribe((res) => {
       console.log("RESPONSE FROM UPLOAD: ", res);
     }, (err) => {
       console.log("ERROR from upload: ", err);
     })
    
  }


  viewImg(imageUrl,imageName){
    console.log('url', imageUrl);
    console.log('name', imageName);
    this.photoViewer.show(imageUrl, imageName, {share: false});
  }


/**
  * redirect to claim review
*/

  review() {
    this.navCtrl.push(ClaimDetailsPage, {
      category: this.claimForm.category,
      title: this.claimForm.expTitle,
      desc: this.claimForm.description,
      start: this.claimForm.startDate, 
      end: this.claimForm.endDate, 
      amount: this.claimForm.amount 
    });
  }
}
