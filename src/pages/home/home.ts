import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//imports das bibliotecas do AngularFire2 necessárias
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AddPage } from '../add/add';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, 
            db: AngularFireDatabase,
            public alertCtrl: AlertController) {
    //quando a lista é carregada o Angular se encarrega do resto
    //a lista está no HTML e será populada asincronamente
    this.items = db.list('/');
  }

  addPerson(){
    this.navCtrl.push(AddPage);
  }

  clique(pessoa){
    let confirm = this.alertCtrl.create({
      title: 'Ação',
      message: 'Qual a ação que deseja fazer com o usuário ' + pessoa.nome + "?",
      buttons: [
        {
          text: 'Excluir',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ver',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
