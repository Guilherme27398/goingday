import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
<<<<<<< HEAD
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
=======
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
>>>>>>> 66917f394424da61fce4909aedaa67652ce35d3d
  },
  {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
<<<<<<< HEAD
    path: '**',
    redirectTo: 'login'
  }
=======
    path: 'lista-diarios',
    loadChildren: () => import('./lista-diarios/lista-diarios.module').then( m => m.ListaDiariosPageModule)
  },
>>>>>>> 66917f394424da61fce4909aedaa67652ce35d3d
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class AppRoutingModule {}
=======
export class AppRoutingModule { }
>>>>>>> 66917f394424da61fce4909aedaa67652ce35d3d
