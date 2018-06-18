import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { User } from '../../providers/auth-service/user';
import { NgForm } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthServiceProvider,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  createAccount() {
    if (this.form.valid) {
      let toast = this.toastCtrl.create({
        message: 'Usuário criado com sucesso.',
        duration: 3000,
        position: 'bottom'
      });

      this.authService.createUser(this.user)
        .then((user: any) => {
          user.sendEmailVerification();

          toast.present();

          this.navCtrl.push(HomePage); // Aqui
        })

        .catch((error: any) => {
          if (error.code == 'auth/email-already-in-use') {
            toast.setMessage('O E-mail digitado já está em uso.');
          } else if (error.code == 'auth/invalid-email') {
            toast.setMessage('O E-mail digitado não é válido.');
          } else if (error.code == 'auth/operation-not-allowed') {
            toast.setMessage('Não está habilitado criar usuários.');
          } else if (error.code == 'auth/weak-password') {
            toast.setMessage('A senha digitada é muito fraca.');
          }
          toast.present();
        });
    }
  }

}
