export default class Pessoa {
  id?: number;
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  saldo?: number;
  foto?: string;

  constructor(obj: {
    id?: number;
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    saldo?: number;
    foto?: string;
  }) {
    this.id = obj.id;
    this.nome = obj.nome;
    this.cpf = obj.cpf;
    this.email = obj.email;
    this.senha = obj.senha;
    this.saldo = obj.saldo;
    this.foto = obj.foto;
  }
}
