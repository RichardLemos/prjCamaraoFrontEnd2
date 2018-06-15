import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/auth-service/user';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { ResetpasswordPage } from '../resetpassword/resetpassword';

@IonicPage()
@Component({
  selector: 'page-bemvindo',
  templateUrl: 'bemvindo.html',
})
export class BemvindoPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authService: AuthServiceProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BemvindoPage');
  }

  createAccount() {
    this.navCtrl.push(SignupPage);
  }

  resetPassword() {
    this.navCtrl.push(ResetpasswordPage);
  }

  signIn() {
    if (this.form.form.valid) {
      this.authService.signIn(this.user)
        .then(() => {
          this.navCtrl.setRoot(HomePage);
        })
        .catch((error: any) => {
          const loading = this.showAlert()
          if (error.code == 'auth/invalid-email') {
            loading.setMessage('O E-mail digitado não é válido.');
          } else if (error.code == 'auth/user-disabled') {
            loading.setMessage('O usuário está desativado.');
          } else if (error.code == 'auth/user-not-found') {
            loading.setMessage('O usuário não foi encontrado.');
          } else if (error.code == 'auth/wrong-password') {
            loading.setMessage('A senha digitada não é válida.');
          }
          loading.present();
        });
    }

  }

  showAlert() {
    const alert = this.alertCtrl.create({
      buttons: ['OK']
    });
    return alert;
  }
}