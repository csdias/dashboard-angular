import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DashboardService } from '../dashboard.service';
import { Cliente } from '../../shared/model/cliente/cliente';
import { Proposta } from '../../shared/model/proposta/proposta';

@Component({
  selector: 'app-painel-um',
  templateUrl: './painel-um.component.html',
  styleUrls: ['./painel-um.component.css']
})
export class PainelUmComponent implements OnInit {
  propostas$: Observable<Proposta[]>;
  selectedId: number;

  constructor(
    private service: DashboardService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.propostas$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getPropostas();
      })
    );
  }
}
