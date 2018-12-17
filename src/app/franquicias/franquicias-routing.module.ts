import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FranquiciasComponent } from './franquicias.component';

const routes: Routes = [
  {
    path: '',
     component: FranquiciasComponent,
    data: {
      title: 'Franquicias'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FranquiciasRoutingModule { }

export const routedComponents = [FranquiciasComponent];