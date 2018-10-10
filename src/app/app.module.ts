import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { firebaseConfig } from '../config'; // Configuration of Google firebase 

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ClaimDetailsPage } from '../pages/claim-details/claim-details';

import { ClaimsTabComponent } from '../components/claims-tab/claims-tab';
import { HistoryTabComponent } from '../components/history-tab/history-tab';

import { AuthenticationProvider } from '../providers/authentication/authentication'; // Authentication Service Provider.


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
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireAuthModule,
    AngularFirestoreModule,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationProvider,
  ]
})
export class AppModule {}
