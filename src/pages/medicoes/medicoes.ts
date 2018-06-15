import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SalinidadePage } from '../salinidade/salinidade';
import { AlcalinidadePage } from '../alcalinidade/alcalinidade';
import { TemperaturaPage } from '../temperatura/temperatura';

@IonicPage()
@Component({
  selector: 'page-medicoes',
  templateUrl: 'medicoes.html',
})
export class MedicoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicoesPage');
  }

  irSalinidade () {
    this.navCtrl.push(SalinidadePage);
  }

  irAlcalinidade() {
    this.navCtrl.push(AlcalinidadePage);
  }

  irTemperatura() {
    this.navCtrl.push(TemperaturaPage);
  }
}
