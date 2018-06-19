import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BemvindoPage } from '../pages/bemvindo/bemvindo';
import { AngularFireAuth } from 'angularfire2/auth';
import { TanquesPage } from '../pages/tanques/tanques';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { desenvolvedoresPage } from '../pages/desenvolvedores/desenvolvedores';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = BemvindoPage;

  pages: Array<{ title: string, component: any, icon: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    afAuth: AngularFireAuth,
    public authService: AuthServiceProvider) {
    this.initializeApp();

    const authObserver = afAuth.authState.subscribe(user => {
      if (user) {
        this.rootPage = HomePage;
        authObserver.unsubscribe();
      } else {
        this.rootPage = BemvindoPage;
        authObserver.unsubscribe();
      }
    })

    // Menu
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Desenvolvedores', component: desenvolvedoresPage, icon: 'people' },
      { title: 'Tanques', component: TanquesPage, icon: 'list-box' },
      { title: 'Logout', component: '', icon: 'exit' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if (page.title === 'Logout') {
      this.signOut()
    } else {
      this.nav.setRoot(page.component);
    }
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
  }
  signOut() {
    this.authService.signOut()
      .then(() => {
        this.nav.push(BemvindoPage);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
