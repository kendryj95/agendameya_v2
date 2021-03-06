import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminsComponent } from './admins.component';

const routes: Routes = [
  {
    path: '',
     component: AdminsComponent,
    data: {
      title: 'Admins'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminsRoutingModule { }

export const routedComponents = [AdminsComponent];