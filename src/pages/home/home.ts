import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { BemvindoPage } from '../bemvindo/bemvindo';
// import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public authService:AuthServiceProvider) {

  }
     signOut() {
        this.authService.signOut()
          .then(() => {
            this.navCtrl.setRoot(BemvindoPage);
          })
          .catch((error) => {    
            console.error(error);
        });
      }
    }
