export interface ITransaction {
  id?: number;
  data: Date;
  valor: number;
  tipo: number;
  categoria_id: number;
  descricao: string;
  conta_id: number;
  meio_pagamento: string;
  destino: string;

  //   get: (id: number) =>_. Transaction;
  //   getAll: () =>_. Transaction;
  //   update: (args: Transaction) =>_. Transaction;
  //   delete: (id: number) =>_. Transaction;
}

export class Transaction implements ITransaction {
  id?: number;
  data: Date;
  valor: number;
  tipo: number;
  categoria_id: number;
  descricao: string;
  conta_id: number;
  meio_pagamento: string;
  destino: string;
  constructor(
    _: {
      data: Date,
      valor: number,
      tipo: number,
      categoria_id: number,
      descricao: string,
      conta_id: number,
      meio_pagamento: string,
      destino: string
      id?: number
    }
  ) {
    this.id = _.id;
    this.data = _.data;
    this.valor = _.valor;
    this.tipo = _.tipo;
    this.categoria_id = _.categoria_id;
    this.descricao = _.descricao;
    this.conta_id = _.conta_id;
    this.meio_pagamento = _.meio_pagamento;
    this.destino = _.destino;
  }

  get(id: number): Transaction {
    return new Transaction({
      id: this.id,
      data: this.data,
      valor: this.valor,
      tipo: this.tipo,
      categoria_id: this.categoria_id,
      descricao: this.descricao,
      conta_id: this.conta_id,
      meio_pagamento: this.meio_pagamento,
      destino: this.destino
    }
    );
  }

  getAll(): Transaction[] {
    const arr: Transaction[] = [
      new Transaction({
        id: this.id,
        data: this.data,
        valor: this.valor,
        tipo: this.tipo,
        categoria_id: this.categoria_id,
        descricao: this.descricao,
        conta_id: this.conta_id,
        meio_pagamento: this.meio_pagamento,
        destino: this.destino
      })
    ];

    return arr;
  }

  update(args: Transaction): Transaction {
    return new Transaction({
      id: this.id,
      data: this.data,
      valor: this.valor,
      tipo: this.tipo,
      categoria_id: this.categoria_id,
      descricao: this.descricao,
      conta_id: this.conta_id,
      meio_pagamento: this.meio_pagamento,
      destino: this.destino
    })
  }

  delete(id: number): Transaction {
    return new Transaction({
      id: this.id,
      data: this.data,
      valor: this.valor,
      tipo: this.tipo,
      categoria_id: this.categoria_id,
      descricao: this.descricao,
      conta_id: this.conta_id,
      meio_pagamento: this.meio_pagamento,
      destino: this.destino
    })
  }
}
