import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

// Angular Firebase Imports
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { firebaseConfig } from '../config'; // Configuration of Google firebase

// Ionic imports
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { PhotoViewer } from '@ionic-native/photo-viewer'
import { MyApp } from './app.component';

// Page Imports
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ClaimDetailsPage } from '../pages/claim-details/claim-details';

// Component Imports
import { ClaimsTabComponent } from '../components/claims-tab/claims-tab';
import { HistoryTabComponent } from '../components/history-tab/history-tab';

// Services Imports
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { ClaimProvider } from '../providers/claim/claim'; // Authentication Service Provider.


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
    AngularFireStorageModule,
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
    SplashScreen, Camera, PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationProvider,
    ClaimProvider,
  ]
})
export class AppModule {}
