import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClaimsTabComponent } from '../../components/claims-tab/claims-tab';
import { HistoryTabComponent } from '../../components/history-tab/history-tab';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

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
