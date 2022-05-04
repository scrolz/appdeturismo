import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'matriz',
    loadChildren: () => import('./pracas/matriz/matriz.module').then( m => m.MatrizPageModule)
  },
  {
    path: 'brasil',
    loadChildren: () => import('./postos/brasil/brasil.module').then( m => m.BrasilPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

