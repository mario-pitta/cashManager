/* eslint-disable prettier/prettier */
export interface Conta {
  id: number;
  tipo: number;
  saldo: number;
  instituicao_financeira: IBanco;
  numero_conta: string;
  agencia: string;
  data_abertura: Date;
  limite_credito: number;
  pessoa_id: number;

}


export interface IBanco {
  id: number;
  descricao: string;
  logo_url: string;
}