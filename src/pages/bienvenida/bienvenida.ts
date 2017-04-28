import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Formulario } from "../../pages/formulario/formulario";
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Bienvenida page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bienvenida',
  templateUrl: 'bienvenida.html',
})
export class Bienvenida {

  public user: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get('listadoLocal').then((val)=>{
          this.user = val;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bienvenida');
  }

  public next(){

    this.navCtrl.push(Formulario);
  }

}
