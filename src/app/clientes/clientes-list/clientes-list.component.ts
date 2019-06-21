import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../../shared/model/cliente/cliente';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { FilterTextComponent } from '../../shared/filter-text/filter-text.component';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {
  clientes$: Observable<Cliente[]>;
  selectedId: number;
  @ViewChild(FilterTextComponent) filterComponent: FilterTextComponent;

  constructor(
    private service: ClientesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.clientes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        // this.filterComponent.clear();
        return this.service.getClientes();
      })
    );
  }

  filterChanged(searchString: string) {
    this.clientes$ = this.clientes$.pipe(
      map(clientes => clientes.filter(cliente => cliente.cpf.indexOf(searchString) > -1))
    );
    // this.clientes$.pipe(
    //   map((clientes: Cliente[]) => clientes.find(cliente => cliente.cpf.indexOf(searchString) > 1))
    // ).subscribe();
  }
}
