import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Formulario } from './formulario';

@NgModule({
  declarations: [
    Formulario,
  ],
  imports: [
    IonicPageModule.forChild(Formulario),
  ],
  exports: [
    Formulario
  ]
})
export class FormularioModule {}
