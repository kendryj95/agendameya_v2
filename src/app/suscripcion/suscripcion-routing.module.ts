import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuscripcionComponent } from './suscripcion.component';

const routes: Routes = [
  {
    path: '',
     component: SuscripcionComponent,
    data: {
      title: 'Suscripcion'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuscripcionRoutingModule { }

export const routedComponents = [SuscripcionComponent];