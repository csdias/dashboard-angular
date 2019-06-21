import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { PainelUmComponent } from './painel-um/painel-um.component';

const dashboardRoutes: Routes = [
  { path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: PainelUmComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(dashboardRoutes) ],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule {}

export const routedComponents = [
  DashboardComponent,
  PainelUmComponent
];
