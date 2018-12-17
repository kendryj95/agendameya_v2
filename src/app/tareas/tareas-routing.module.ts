import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareasComponent } from './tareas.component';

const routes: Routes = [
  {
    path: '',
     component: TareasComponent,
    data: {
      title: 'Tareas'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareasRoutingModule { }