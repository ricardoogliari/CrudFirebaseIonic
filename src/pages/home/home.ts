import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//imports das bibliotecas do AngularFire2 necessárias
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AddPage } from '../add/add';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  size: Number;
  items: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, 
            public db: AngularFireDatabase,
            public alertCtrl: AlertController) {
    //quando a lista é carregada o Angular se encarrega do resto
    //a lista está no HTML e será populada asincronamente
    this.items = db.list('/');

    //como o list é assíncrono, quando ele conseguir ler os dados ele verifica quantos
    //elementos tem, com isso, sei a chave do próximo elemento
    this.items.subscribe(sub => {
      this.size = sub.length;
    });
  }

  addPerson(){
    //passa para a próxima tela a chave da próxima pessoa
    this.navCtrl.push(AddPage, {
      next: this.size
    });
  }

  clique(pessoa, key){
    let confirm = this.alertCtrl.create({
      title: 'Ação',
      message: 'Qual a ação que deseja fazer com o usuário ' + pessoa.nome + "?",
      buttons: [
        {
          text: 'Excluir',
          handler: () => {
            //remove um objeto pela key
            this.items.remove("" + key);
          }
        },
        {
          text: 'Ver',
          handler: () => {
            //usa a mesma tela de nova pessoa, mas passando o objeto por parâmetro
            //dessa forma, a tela de destino sabe que é edição e não uma nova
            //pessoa
            this.navCtrl.push(AddPage, {
              next: key,
              pessoa: pessoa
            });
          }
        }
      ]
    });
    confirm.present();
  }

}
