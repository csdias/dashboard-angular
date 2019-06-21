import { Cliente } from './cliente';
import { ClienteSituacao } from './cliente';

export const CLIENTES: Cliente[] = [
  {id: 1, cpf: '43260632034', nome: 'João', clienteSituacaoId: 2},
  {id: 2, cpf: '55479928015', nome: 'Olívia', clienteSituacaoId: 2 },
  {id: 3, cpf: '86361649075', nome: 'Adriana', clienteSituacaoId: 2},
  {id: 4, cpf: '47994892086', nome: 'Matheus', clienteSituacaoId: 2},
  {id: 5, cpf: '87061119047', nome: 'Angelita', clienteSituacaoId: 2},
  {id: 6, cpf: '14630978089', nome: 'Márcio', clienteSituacaoId: 2}
];

export const CLIENTESITUACAO: ClienteSituacao[] = [
  { id: 1, descricao: 'Aguardando ativação'},
  { id: 2, descricao: 'Ativo'},
  { id: 3, descricao: 'Inativo'},
  { id: 4, descricao: 'Bloqueado'},
  { id: 5, descricao: 'Desativado'}
];
