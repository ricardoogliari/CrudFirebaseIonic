import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//IMPORTANTE
//menção aos sites onde encontrei o conhecimento
//http://www.fabricadecodigo.com/como-criar-um-crud-com-ionic-2-e-firebase/
//https://github.com/angular/angularfire2

//configuração do banco de dados na nuvem
//Fui em http://console.firebase.google.com/, criei um aplicativo
//na parte de configurações fui em 
//"adicionar o Firebase ao seu Arquivo da Web"
const firebaseConfig = {
    apiKey: "AIzaSyCB-74Q-x4UzfVxeiAXgvkqBQc9Un7Qy9k",
    authDomain: "arduinofirebase-21dc5.firebaseapp.com",
    databaseURL: "https://arduinofirebase-21dc5.firebaseio.com",
    projectId: "arduinofirebase-21dc5",
    storageBucket: "arduinofirebase-21dc5.appspot.com",
    messagingSenderId: "355951549273"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    //o primeiro import inicializa o firebase com as
    //configurações necessárias
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
