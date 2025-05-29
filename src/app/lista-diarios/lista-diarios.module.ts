import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDiariosPageRoutingModule } from './lista-diarios-routing.module';

import { ListaDiariosPage } from './lista-diarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDiariosPageRoutingModule
  ],
  declarations: [ListaDiariosPage]
})
export class ListaDiariosPageModule {}
