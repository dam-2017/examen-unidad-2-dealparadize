import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormControl, Validators, FormBuilder, FormGroup } from "@angular/forms";

/**
 * Generated class for the Formulario page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class Formulario {

  public myForm: FormGroup;

  public name: any
  public appat: any;
  public apmat: any;
  public birthday: any;

  public user: string;

  public rfc: string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public formBuilder: FormBuilder) {
    
    
    
    this.myForm = this.formBuilder.group({
      name:['', Validators.required],
      appat:['', Validators.required],
      apmat:['', Validators.required],
      birthday:['', Validators.required]
    });

    this.name = this.myForm.controls['name'];
    this.appat = this.myForm.controls['appat'];
    this.apmat = this.myForm.controls['apmat'];
    this.birthday = this.myForm.controls['birthday'];
    
    this.storage.get('listadoLocal').then((val)=>{
          this.user = val;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Formulario');
  }

  public calculateRFC(){
    this.rfc="";

    console.log(this.name.value);
    console.log(this.appat.value);
    console.log(this.apmat.value);
    console.log(this.birthday.value);

    let nombre = this.name.value;
	  let apellidoPaterno = this.appat.value;
	  let apellidoMaterno = this.apmat.value;
    
    let fecha = this.birthday.val;

    console.log(this.birthday.val.getDay());

    nombre = nombre.toUpperCase();
    apellidoPaterno = apellidoPaterno.toUpperCase();
    apellidoMaterno = apellidoMaterno.toUpperCase();

    apellidoPaterno = this.quitarArticuloDeApellido(apellidoPaterno);
	  apellidoMaterno = this.quitarArticuloDeApellido(apellidoMaterno);

    this.rfc += apellidoPaterno.substr(0, 1);
    var l = apellidoPaterno.length;
    var c;
    for (let i = 0; i < l; i++) {
      c = apellidoPaterno.charAt(i);
      if (this.esVocal(c)) {
        this.rfc += c;
        break;
      }
    }
    this.rfc += apellidoMaterno.substr(0, 1);
    this.rfc += nombre.substr(0, 1);
    //this.rfc += fecha.year.substr(2, 4);
    //this.rfc += this.getCifra(fecha.month);
    //this.rfc += this.getCifra(fecha.day);


  }

  public quitarArticuloDeApellido(art) {
		return art.replace("DEL ", "").replace("LAS ", "").replace("DE ","").replace("LA ", "").replace("Y ", "").replace("A ", "");
	}

  public esVocal(letra) {
		if (letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O'
				|| letra == 'U' || letra == 'a' || letra == 'e' || letra == 'i'
				|| letra == 'o' || letra == 'u')
			return true;
		else
			return false;
	}

  public getCifra(val){
    if(val<10){
      return '0'+val;
    }else{
      return val+'';
    }
  }
  
}
