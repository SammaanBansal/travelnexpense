import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClaimsTabComponent } from '../../components/claims-tab/claims-tab';
import { HistoryTabComponent } from '../../components/history-tab/history-tab';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  claims: any;
  history: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.claims = ClaimsTabComponent;
    this.history = HistoryTabComponent;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
