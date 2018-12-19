import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistentesComponent } from './asistentes.component';

const routes: Routes = [
  {
    path: '',
     component: AsistentesComponent,
    data: {
      title: 'Asistentes'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistentesRoutingModule { }

export const routedComponents = [AsistentesComponent];