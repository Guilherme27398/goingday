import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDiariosPage } from './lista-diarios.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDiariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDiariosPageRoutingModule {}
