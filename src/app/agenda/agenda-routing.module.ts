import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaComponent } from './agenda.component';

const routes: Routes = [
  {
    path: '',
     component: AgendaComponent,
    data: {
      title: 'Agenda'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaRoutingModule { }

export const routedComponents = [AgendaComponent];