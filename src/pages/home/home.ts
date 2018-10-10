import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClaimsTabComponent } from '../../components/claims-tab/claims-tab';
import { HistoryTabComponent } from '../../components/history-tab/history-tab';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  Claims: any;
  History: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Claims = ClaimsTabComponent;
    this.History = HistoryTabComponent;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
