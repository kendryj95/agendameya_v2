import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestadoreshorariosComponent } from './prestadoreshorarios.component';

const routes: Routes = [
  {
    path: '',
     component: PrestadoreshorariosComponent,
    data: {
      title: 'Prestadores'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestadoreshorariosRoutingModule { }

export const routedComponents = [PrestadoreshorariosComponent];