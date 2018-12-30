import { Routes, RouterModule } from '@angular/router';

// Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'agenda',
    loadChildren: './agenda/agenda.module#AgendaModule'
  },
  {
    path: 'clientes',
    loadChildren: './clientes/clientes.module#ClientesModule'
  },
  {
    path: 'superadmins',
    loadChildren: './superadmins/superadmins.module#SuperadminsModule'
  },
  {
    path: 'admins',
    loadChildren: './admins/admins.module#AdminsModule'
  },
  {
    path: 'franquicias',
    loadChildren: './franquicias/franquicias.module#FranquiciasModule'
  },
  {
    path: 'locales',
    loadChildren: './locales/locales.module#LocalesModule'
  },
  {
    path: 'prestadores',
    loadChildren: './prestadores/prestadores.module#PrestadoresModule'
  },
  {
    path: 'prestadoreshorarios',
    loadChildren: './prestadoreshorarios/prestadoreshorarios.module#PrestadoreshorariosModule'
  },
  {
    path: 'asistentes',
    loadChildren: './asistentes/asistentes.module#AsistentesModule'
  },
  {
    path: 'servicios',
    loadChildren: './servicios/servicios.module#ServiciosModule'
  },
  {
    path: 'suscripcion',
    loadChildren: './suscripcion/suscripcion.module#SuscripcionModule'
  },
  {
    path: 'components',
    loadChildren: './components/ui-components.module#UIComponentsModule'
  },
  {
    path: 'pages',
    loadChildren: './pages/full-pages/full-pages.module#FullPagesModule'
  },
  {
    path: 'tareas',
    loadChildren: './tareas/tareas.module#TareasModule'
  }
];