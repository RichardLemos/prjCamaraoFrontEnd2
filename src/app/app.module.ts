import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BemvindoPage } from '../pages/bemvindo/bemvindo';
import { AlcalinidadePage } from '../pages/alcalinidade/alcalinidade';
import { SalinidadePage } from '../pages/salinidade/salinidade';
import { TemperaturaPage } from '../pages/temperatura/temperatura';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BemvindoPage,
    AlcalinidadePage,
    SalinidadePage,
    TemperaturaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BemvindoPage,
    AlcalinidadePage,
    SalinidadePage,
    TemperaturaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
