import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl, Validators, FormBuilder, FormGroup } from "@angular/forms";

import { Bienvenida } from "../../pages/bienvenida/bienvenida";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public myForm: FormGroup;

  public user: any;
  public password: any;

  public _user = "efalbecerraca";
  public _password = "13400391@ittepic";
  public _flag = false;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public storage: Storage) {
    this.myForm = this.formBuilder.group({
      user:['', [Validators.required, Validators.minLength(8)]],
      password:['', [Validators.required, Validators.minLength(6)]]
    });

    this.user = this.myForm.controls['user'];
    this.password = this.myForm.controls['password'];


  }

  public sendData(){

    console.log(this.user.value);
    console.log(this.password.value);

    this.storage.set('listadoLocal', this.user.value);

    if(this.user.value != this._user && this.password.value != this._password){
      this._flag = true;
      return;
    }
      

    this.navCtrl.push(Bienvenida);
  }

}
