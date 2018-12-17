import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperadminsComponent } from './superadmins.component';

const routes: Routes = [
  {
    path: '',
     component: SuperadminsComponent,
    data: {
      title: 'Super Admins'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperadminsRoutingModule { }

export const routedComponents = [SuperadminsComponent];