import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ClaimDetailsPage } from '../../pages/claim-details/claim-details';
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

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  submit(){
    this.navCtrl.setRoot(ClaimDetailsPage);
  }

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
