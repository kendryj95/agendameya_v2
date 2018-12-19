import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestadoresComponent } from './prestadores.component';

const routes: Routes = [
  {
    path: '',
     component: PrestadoresComponent,
    data: {
      title: 'Prestadores'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestadoresRoutingModule { }

export const routedComponents = [PrestadoresComponent];