import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClaimDetailsPage } from '../../pages/claim-details/claim-details';

/**
 * Generated class for the HistoryTabComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'history-tab',
  templateUrl: 'history-tab.html'
})
export class HistoryTabComponent {

  constructor(private navCtrl: NavController) {
    
  }
  viewDetails(){
    this.navCtrl.push(ClaimDetailsPage);
  }

}
