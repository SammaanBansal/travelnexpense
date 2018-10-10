import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello ClaimsTabComponent Component');
    this.text = 'Hello World';
  }

}
