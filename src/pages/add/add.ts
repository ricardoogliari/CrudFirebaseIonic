import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//imports das bibliotecas do AngularFire2 necessárias
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  templateUrl: 'add.html'
})
export class AddPage {
  nome: string;
  idade: string;

  items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, private db: AngularFireDatabase) {
    this.items = db.list('/');
  }

  salvar(){
    this.items.push(
        {   
            'nome': this.nome, 
            'idade': parseInt(this.idade)
        });
  }

}
