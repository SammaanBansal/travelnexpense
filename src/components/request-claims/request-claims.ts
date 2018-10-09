import { Component } from '@angular/core';

/**
 * Generated class for the RequestClaimsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'request-claims',
  templateUrl: 'request-claims.html'
})
export class RequestClaimsComponent {

  text: string;

  constructor() {
    console.log('Hello RequestClaimsComponent Component');
    this.text = 'Hello World';
  }

}
