import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClaimsTabComponent } from '../../components/claims-tab/claims-tab';
import { HistoryTabComponent } from '../../components/history-tab/history-tab';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = ClaimsTabComponent;
    this.tab2 = HistoryTabComponent;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
