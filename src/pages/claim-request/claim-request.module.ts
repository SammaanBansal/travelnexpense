import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClaimRequestPage } from './claim-request';

@NgModule({
  declarations: [
    ClaimRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(ClaimRequestPage),
  ],
})
export class ClaimRequestPageModule {}
