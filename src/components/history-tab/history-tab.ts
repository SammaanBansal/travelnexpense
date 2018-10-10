import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello HistoryTabComponent Component');
    this.text = 'Hello World';
  }

}
