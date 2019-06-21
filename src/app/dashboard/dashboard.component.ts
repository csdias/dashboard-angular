import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DashboardService } from './dashboard.service';
import { Proposta } from '../shared/model/proposta/proposta';
import { Cliente } from '../shared/model/cliente/cliente';

@Component({
  // selector: 'app-dashboard',
  template: `<router-outlet></router-outlet>`,
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  propostas$: Observable<Proposta[]>;
  selectedId: number;

  constructor(
    private service: DashboardService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
  }
}
