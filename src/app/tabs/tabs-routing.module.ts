import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home2',
        loadChildren: () => import('../home2/home2.module').then(m => m.Home2PageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'diario',
        loadChildren: () => import('../diario/diario.module').then(m => m.DiarioPageModule)
      },
      {
        path: 'listadiario',
        loadChildren: () => import('../listadiario/listadiario.module').then(m => m.ListadiarioPageModule)
      },
      {
        path: '',
        redirectTo: 'home2',
        pathMatch: 'full'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
