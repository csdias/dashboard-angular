import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { CanDeactivateGuard } from '../can-deactivate.guard';

const clientesRoutes: Routes = [
  { path: '',  component: ClientesListComponent,  data: { animation: 'clientes' } },
  { path: ':id', component: ClienteDetailComponent, canDeactivate: [CanDeactivateGuard],  data: { animation: 'cliente' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(clientesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ClientesRoutingModule {}
