import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { CpfMaskDirective } from '../shared/masks/cpf-mask.directive';
import { FilterTextModule } from '../shared/filter-text/filter-text.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, ClientesRoutingModule, ReactiveFormsModule, FilterTextModule
  ],
  declarations: [
    ClientesComponent, ClientesListComponent,
    ClienteDetailComponent, CpfMaskDirective
  ],
  exports:
  [ CpfMaskDirective ]
})
export class ClientesModule {}
