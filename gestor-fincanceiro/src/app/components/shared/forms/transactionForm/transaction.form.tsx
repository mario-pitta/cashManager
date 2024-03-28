import { ITransaction } from "@core/models/Transaction";
import { EventHandler, useEffect, useState } from "react";
import { IMaskInput } from "react-imask";

import { Card, CloseButton, Form, Modal } from "react-bootstrap";

declare interface ITransactionFormProps {
  transaction?: Partial<ITransaction>;
  action: string;
  handleClose: () => void;
}

export const TransactionForm = (props: ITransactionFormProps) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(props.transaction);


  const obj: ITransaction = {
    categoria_id: 1,
    conta_id: 1,
    descricao: "null",
    destino: "null",
    id: 121,
    meio_pagamento: "null",
    valor: 0.0,
    data: new Date(),
    tipo: 0,
  };

  return (
    <div>
      <Modal.Header>
        <Modal.Title className="w-100">
          <div className="d-flex justify-content-between">
            <span>
              {props.action.toUpperCase()} {"Transação".toUpperCase()}{" "}
            </span>
            <CloseButton
              className="float-end"
              onClick={() => props.handleClose()}
            />
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description here..."
              value={props?.transaction?.descricao}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Value</Form.Label>
            <Form.Control
              type="text"
              prefix="R$"
              as={IMaskInput}
              value={props?.transaction?.valor}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
    </div>
  );
};
