import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatrizPage } from './matriz.page';

const routes: Routes = [
  {
    path: '',
    component: MatrizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatrizPageRoutingModule {}
