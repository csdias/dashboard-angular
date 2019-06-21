
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'clientes',
    loadChildren: './clientes/clientes.module#ClientesModule',
    data: { preload: true }
  },
  // {
  //   path: 'propostas',
  //   loadChildren: './propostas/propostas.module#PropostasModule',
  //   data: { preload: true }
  // },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
      RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

export const routedComponents = [ PageNotFoundComponent ];
