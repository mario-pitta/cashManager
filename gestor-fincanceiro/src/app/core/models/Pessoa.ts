export default  class Pessoa {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  saldo: number;
  foto?: string ;


  constructor(
    id: number,
    nome: string,
    cpf: string,
    email: string,
    senha: string, 
    saldo: number,
    foto?: string , 
  ) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.senha = senha;
    this.saldo = saldo
    this.foto = foto
  }
}
