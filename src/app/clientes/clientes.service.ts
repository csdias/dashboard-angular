import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Cliente } from '../shared/model/cliente/cliente';
import { CLIENTES } from '../shared/model/cliente/mock-clientes';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {

  constructor(private messageService: MessageService) { console.log('ClientesService constructor'); }

  getClientes(): Observable<Cliente[]> {
    // TODO: send the message _after_ fetching the clientes
    this.messageService.add('ClienteService: fetched clientes');
    console.log('getClientes()');
    return of(CLIENTES);
  }

  getCliente(id: number | string) {
    return this.getClientes().pipe(
      // (+) before `id` turns the string into a number
      map((clientes: Cliente[]) => clientes.find(cliente => cliente.id === +id))
    );
  }
}
