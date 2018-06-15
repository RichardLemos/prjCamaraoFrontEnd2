import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SplashScreen } from '@ionic-native/splash-screen';
import { BemvindoPage } from '../pages/bemvindo/bemvindo';
import { AlcalinidadePage } from '../pages/alcalinidade/alcalinidade';
import { SalinidadePage } from '../pages/salinidade/salinidade';
import { TemperaturaPage } from '../pages/temperatura/temperatura';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { SignupPage } from '../pages/signup/signup';
import { MedicoesPage } from '../pages/medicoes/medicoes';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCoUepigdDyMqLZqwEjzZ5aNJfSghmrOf0",
  authDomain: "ionic-camarao.firebaseapp.com",
  databaseURL: "https://ionic-camarao.firebaseio.com",
  projectId: "ionic-camarao",
  storageBucket: "ionic-camarao.appspot.com",
  messagingSenderId: "724130917206"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BemvindoPage,
    AlcalinidadePage,
    SalinidadePage,
    TemperaturaPage,
    ResetpasswordPage,
    SignupPage,
    MedicoesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BemvindoPage,
    AlcalinidadePage,
    SalinidadePage,
    TemperaturaPage,
    ResetpasswordPage,
    SignupPage,
    MedicoesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider
  ]
})
export class AppModule { }
