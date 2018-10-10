import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ClaimDetailsPage } from '../pages/claim-details/claim-details';

import { ClaimsTabComponent } from '../components/claims-tab/claims-tab';
import { HistoryTabComponent } from '../components/history-tab/history-tab';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ClaimsTabComponent,
    HistoryTabComponent,
    ClaimDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ClaimsTabComponent,
    HistoryTabComponent,
    ClaimDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
