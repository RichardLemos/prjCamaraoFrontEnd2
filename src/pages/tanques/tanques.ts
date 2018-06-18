import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tanques',
  templateUrl: 'tanques.html',
})

export class TanquesPage {
  
  constructor(public navCtrl: NavController, public menu: MenuController) {
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(true);
  }

  chamarMedicoes() {
    this.navCtrl.push('MedicoesPage');
  }

  doRefresh(refresher) {
    //add this.metodo para fazer requisição dos dados 
    setTimeout(() => {
      refresher.complete();
    }, 1500);
  }

}
