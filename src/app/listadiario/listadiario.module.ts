import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadiarioPageRoutingModule } from './listadiario-routing.module';

import { ListadiarioPage } from './listadiario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadiarioPageRoutingModule
  ],
  declarations: [ListadiarioPage]
})
export class ListadiarioPageModule {}
