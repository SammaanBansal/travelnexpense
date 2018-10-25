import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController,NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ClaimDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-claim-details',
  templateUrl: 'claim-details.html',
})
export class ClaimDetailsPage {
  
  claimDetails: {
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

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {

    this.claimDetails.category = this.navParams.get('category');
    this.claimDetails.expTitle = this.navParams.get('title');
    this.claimDetails.description = this.navParams.get('desc');
    this.claimDetails.endDate = this.navParams.get('end');
    this.claimDetails.description = this.navParams.get('desc');
    this.claimDetails.amount = this.navParams.get('amount');
  }
  goBack() {
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClaimDetailsPage');
  }
  /**
  * Show confirm alert box
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
          this.navCtrl.setRoot(HomePage);
        }
      }
    ]
  });
  confirm.present();
}

}
