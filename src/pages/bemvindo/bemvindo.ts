import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-bemvindo',
  templateUrl: 'bemvindo.html',
})
export class BemvindoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BemvindoPage');
  }

  home() {
    this.navCtrl.push(HomePage);
  }

  resetpassword() {
    this.navCtrl.push(ResetpasswordPage);
  }

  criarConta() {
    this.navCtrl.push(SignupPage);
  }
}
