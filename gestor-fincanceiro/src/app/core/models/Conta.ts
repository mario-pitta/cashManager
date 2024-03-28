
export interface IConta {
    tipo_conta: ITipoConta;
    id: number;
    tipo: number;
    saldo: number;
    instituicao_financeira: IBanco;
    numero_conta: string;
    agencia: string;
    data_abertura: Date;
    dia_vencimento: number;
    limite_credito: number;
    pessoa_id: number;

}


export interface IBanco {
    id: number;
    descricao?: string;
    logo_url?: string;

}
export interface ITipoConta {
    id: number;
    descricao?: string;
}