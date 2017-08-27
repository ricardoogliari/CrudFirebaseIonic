import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//imports das bibliotecas do AngularFire2 necessárias
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  templateUrl: 'add.html'
})
export class AddPage {
  titulo: String = "Nova Pessoa";
  nome: string;
  idade: string;
  next: Number;
  pessoa;

  items: FirebaseListObservable<any[]>;

  constructor(
      public navCtrl: NavController, 
      db: AngularFireDatabase,
      navParams: NavParams) {
    this.next = navParams.get("next");
    this.pessoa = navParams.get("pessoa");

    if (this.pessoa != null){
      //se o objeto pessoa recebido não for nulo, significa que essa tela
      //será usada para editar uma pessoa existente
      this.nome = this.pessoa.nome;
      this.idade = this.pessoa.idade;
      this.titulo = "Editar " + this.pessoa.nome;
    }

    this.items = db.list('/');
  }

  salvar(){
    //atualiza uma chave.. se a chave existe edita, senão, cria um nova pessoa
    this.items.update("" + this.next, 
        {   
            'nome': this.nome, 
            'idade': parseInt(this.idade)
        });
    this.navCtrl.pop();
  }

}
