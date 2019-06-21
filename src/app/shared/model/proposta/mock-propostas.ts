import { Proposta } from './proposta';
import { PropostaSituacao } from './proposta';

export const PROPOSTAS: Proposta[] = [
  { id: 1, valor: 10000.00, propostaSituacaoId: 1},
  { id: 2, valor: 8000.00, propostaSituacaoId: 2},
  { id: 3, valor: 9500.00, propostaSituacaoId: 3},
  { id: 4, valor: 12000.00, propostaSituacaoId: 16},
  { id: 5, valor: 1000.00, propostaSituacaoId: 16},
  { id: 6, valor: 2500.00, propostaSituacaoId: 17},
];

export const PROPOSTASITUACAO: PropostaSituacao[] = [
  { id: 1, descricao: 'Em análise'},
  { id: 2, descricao: 'Aprovada'},
  { id: 3, descricao: 'Rejeitada'},
  { id: 16, descricao: 'Finalizada'},
  { id: 17, descricao: 'Cancelada'},
];
