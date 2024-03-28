/* eslint-disable prettier/prettier */

export class Transacao {
  id: number;
  data: Date;
  valor: number;
  tipo: number;
  categoria_id: number;
  descricao: string;
  conta_id: number;
  meio_pagamento: string;
  destino: string;

  constructor(id: number, data: Date, valor: number, tipo: number, categoria_id: number, descricao: string, conta_id: number, meio_pagamento: string, destino: string) {
    this.id = id
    this.data = data
    this.valor = valor
    this.tipo = tipo
    this.categoria_id = categoria_id
    this.descricao = descricao
    this.conta_id = conta_id
    this.meio_pagamento = meio_pagamento
    this.destino = destino
  }

}
