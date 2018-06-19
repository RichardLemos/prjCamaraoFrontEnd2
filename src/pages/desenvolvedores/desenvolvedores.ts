import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-desenvolvedores',
  templateUrl: 'desenvolvedores.html',
})
export class desenvolvedoresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad desenvolvedoresPage');
  }

}
