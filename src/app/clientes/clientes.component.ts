import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cliente } from '../shared/model/cliente/cliente';

@Component({
  // selector: 'app-clientes',
  template: `<router-outlet></router-outlet>`,
})
export class ClientesComponent implements OnInit {
  propostas$: Observable<Cliente[]>;
  selectedId: number;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
  }
}
