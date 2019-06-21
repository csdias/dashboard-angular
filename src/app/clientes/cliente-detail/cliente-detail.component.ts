import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ClientesService } from '../clientes.service';
import { Cliente } from '../../shared/model/cliente/cliente';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {
  cliente: Cliente;
  cliente$: Observable<Cliente>;
  form: FormGroup;
  constructor(
    fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: ClientesService,
    public dialogService: DialogService
  ) {
    this.form = fb.group({
      cliente: fb.group({
        nome: [''],
        cpf: [''] })
    });
  }

  ngOnInit() {
    // this.cliente$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.getCliente(params.get('id')))
    // );
    // this.cliente$.subscribe(cliente => console.log(this.cliente = cliente));

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCliente(params.get('id')))
    ).subscribe(cliente => { console.log(this.cliente = cliente); this.atribuiValoresAoForm(); });
  }

  atribuiValoresAoForm() {
    this.form.patchValue({
      cliente: {
        nome: this.cliente.nome,
        cpf: this.aplicarCpfMask(this.cliente.cpf) }
      });
  }

  retirarCpfMask(cpf: string): string {
    return cpf.replace('.', '').replace('-', '');
  }

  aplicarCpfMask(cpf: string): string {
    let cpfFormatado = '';
    for ( let i = 0; i <= cpf.length - 1; i++ ) {
      if (i === 3 || i === 6 ) {
        cpfFormatado = cpfFormatado + '.' + cpf[i];
      } else if (i === 9) {
        cpfFormatado = cpfFormatado + '-' + cpf[i];
      } else {
        cpfFormatado = cpfFormatado + cpf[i];
        console.log(i);
        console.log(cpf[i]);
      }
    }
    return cpfFormatado;
  }

  gotoClientes(cliente: Cliente) {
    const clienteId = cliente ? cliente.id : null;
    // Pass along the cliente id if available
    // so that the ClienteListComponent can select that cliente.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['/clientes', { id: clienteId, foo: 'foo' }], { relativeTo: this.route });
  }

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    // const result: Cliente = Object.assign({}, this.form.value);
    const result = Object.assign({}, this.form.value);
    // result.cliente = Object.assign({}, result.cliente);

    result.cliente.cpf = this.retirarCpfMask(result.cliente.cpf);

    // Do useful stuff with the gathered data
    // console.log(result);
  }
}

