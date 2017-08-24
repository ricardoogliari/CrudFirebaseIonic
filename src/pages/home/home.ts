import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//imports das bibliotecas do AngularFire2 necessárias
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
    //quando a lista é carregada o Angular se encarrega do resto
    //a lista está no HTML e será populada asincronamente
    this.items = db.list('/');
  }

}
