import { Button, Modal, Table } from "react-bootstrap";
import styles from "./extratos.module.css";
import { ITransaction, Transaction } from "@core/models/Transaction";
import { TransactionForm } from "../../../../../shared/forms/transactionForm/transaction.form";
import { useState } from "react";
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export interface ExtratosPageProps {
  prop?: string;
}

const data: any[] = [];
for (let i = 0; i < 25; i++) {
  data.push({
    id: Math.random(),
    data: new Date(),
    valor: (Math.random() * 100).toFixed(2),
    tipo: 3,
    categoria_id: 2,
    descricao: "string",
    conta_id: 12313,
    meio_pagamento: "crédito",
    destino: "Alana",
  });
}

export function ExtratosPage({
  prop = "ExtratosPage Page Works",
}: ExtratosPageProps) {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [action, setAction] = useState("");

  function showForm(action: string, prop?: ITransaction) {
    setAction(action);
    setShow(true);
  }

  async function onHandleClose() {
    await setShow(false);
    setAction("");
    setSelected(undefined);
  }

  return (
    <div>
      <div className={`${styles.header_}`}>
        <h1>Transaction Statement</h1>
        <Button
          variant="primary"
          className={`${styles.btnRounded}`}
          onClick={() => showForm("create")}
        >
          +
        </Button>
      </div>
      {/* <hr className="mt-2 mb-5" /> */}
      <Table responsive="md" hover={true}>
        <thead>
          <th>Value</th>
          <th>Date</th>
          <th>Type</th>
          <th>Labels</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr className={`${styles.tr} w-100`}>
              <td>R$ {d.valor}</td>
              <td>{d.data.toLocaleDateString()}</td>
              <td>{d.tipo}</td>
              <td>{d.categoria_id}</td>
              <td>
                <div className="d-flex gap-2 justify-content-center align-items-center">
                  <FaSearch
                    className={`${styles.clickable}`}
                    size={20}
                    onClick={() => showForm("consult")}
                    color="currentColor"
                    />
                  <FaEdit
                    onClick={() => showForm("edit")}
                    className={`${styles.clickable}`}
                    size={20}
                    color="royalblue"
                    />
                  <FaTrash
                    onClick={() => showForm("delete")}
                    className={`${styles.clickable}`}
                    size={20}
                    color="darkred"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} centered={true}>
        <TransactionForm
          transaction={selected}
          action={action}
          handleClose={() => onHandleClose()}
        ></TransactionForm>
      </Modal>
    </div>
  );
}
