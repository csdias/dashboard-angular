import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Cliente } from '../shared/model/cliente/cliente';
import { CLIENTES } from '../shared/model/cliente/mock-clientes';
import { Proposta } from '../shared/model/proposta/proposta';
import { PROPOSTAS } from '../shared/model/proposta/mock-propostas';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  constructor(private messageService: MessageService) { console.log('DashboardService constructor'); }

  getClientes(): Observable<Cliente[]> {
    // TODO: send the message _after_ fetching the clientes
    this.messageService.add('ClienteService: fetched clientes');
    console.log('getClientes()');
    return of(CLIENTES);
  }

  getCliente(id: number | string) {
    return this.getClientes()
    .pipe(
      // (+) before `id` turns the string into a number
      map((clientes: Cliente[]) => clientes.find(cliente => cliente.id === +id))
    );
  }

  getPropostas(): Observable<Proposta[]> {
    // TODO: send the message _after_ fetching the clientes
    this.messageService.add('ClienteService: fetched clientes');
    console.log('getClientes()');
    return of(PROPOSTAS);
  }

  getProposta(id: number | string) {
    return this.getPropostas()
    .pipe(
      // (+) before `id` turns the string into a number
      map((propostas: Proposta[]) => propostas.find(proposta => proposta.id === +id))
    );
  }
}
