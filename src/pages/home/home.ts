import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personName: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  showGreeting(name: string){
    this.toastCtrl.create({
      message: `Hello ${name}`,
      duration: 3000
    }).present();
  }

}
