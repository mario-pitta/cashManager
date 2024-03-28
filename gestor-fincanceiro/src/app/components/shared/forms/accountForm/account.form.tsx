import React, { useEffect, useRef, useState } from "react";
import { Button, CloseButton, Form, Image, Modal } from "react-bootstrap";
import { IBanco, IConta } from "@core/models/Conta";
import AuthService from "../../../../core/services/auth.service";
import BankService from "../../../../core/services/bank.service";
import { IMaskInput } from "react-imask";

const auth = new AuthService();
const banksService = new BankService();
declare interface AccountPageProps {
  action: string | "create";
  handleClose: () => void;
  account?: IConta;
}

export const AccountForm = (props?: AccountPageProps) => {
  const [days, setDays] = useState([] as any[]);

  const [form, setForm] = useState({
    instituicao_financeira: {
      id: 0,
    } as Partial<IBanco>,
    pessoa_id: auth.getUser().id as number,
    numero_conta: "",
    agencia: "",
    dia_vencimento: 0,
    tipo_conta: {
      id: 1,
    },
    saldo: 0,
  } as Partial<IConta>);
  const [banks, setBanks] = useState([] as IBanco[]);
  async function getAllBanks() {
    await banksService
      .getAll()
      .then((res: { data: IBanco[]; error: Error }) => {
        if (res.error) throw new Error();

        setBanks(res.data);
      });
  }
  useEffect(() => {
    _setDays();
    getAllBanks();
  }, []);

  function _setDays() {
    // //console.log("setting days");
     
    const _days: any[] = [];

    for (let i = 0; i <= 31; i++) {
      _days.push(Number(i));
    }
    setDays(_days);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    // //console.log("form submitted: ", e);
    // throw new Error("Function not implemented.");

    // //console.log(form);
  }

  function handleChangeBank(e: React.ChangeEvent<HTMLSelectElement>): void {
    // //console.log("bankChanged submitted: ", e);
    setForm({
      ...form,
      instituicao_financeira: {
        id: Number(e.target.value),
      },
    });
    // throw new Error("Function not implemented.");
  }

  function inputResolve(
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    // //console.log(e.key);
    if (isNaN(Number(e.key)) && e.key !== "Backspace") {
      return;
    } else {
      const newSaldo =
        e.key !== "Backspace"
          ? Number(form.saldo + e.key)
          : form.saldo?.toString().slice(0, form.saldo.toString().length - 1);
      setForm({
        ...form,
        saldo: newSaldo as number,
      });
    }
    // //console.log(form);
  }

  function handleChangeAccountType(
    e: React.ChangeEvent<HTMLSelectElement>
  ): void {
    setForm({
      ...form,
      tipo_conta: { id: Number(e.target.value) },
    });
  }

  function handleChangeDueDate(e: React.ChangeEvent<HTMLSelectElement>): void {
    throw new Error("Function not implemented.");
  }

  function handleChangeFormValues(e: React.FormEvent<HTMLFormElement>): void {
    // //console.log(e.currentTarget.id)
  }

  return (
    <div>
      <Modal.Header>
        <Modal.Title className="w-100">
          <div className="d-flex justify-content-between">
            <span>
              {props?.action.toUpperCase()} {"Account".toUpperCase()}{" "}
            </span>
            <CloseButton
              className="float-end"
              onClick={() => props?.handleClose()}
            />
          </div>
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={(e) => handleSubmit(e)} onChange={(e) => handleChangeFormValues(e)}>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Bank</Form.Label>
            <Form.Select
              onChange={(e) => handleChangeBank(e)}
              value={form.instituicao_financeira?.id}
              name="instituicao_financeira"
            >
              <option value="0" selected>
                -- CHOICE YOUR BANK --
              </option>
              {banks.map((bank) => {
                return (
                  <option key={bank.id} value={bank.id}>
                    {bank.descricao?.toUpperCase()}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Account Type</Form.Label>
            <Form.Select
              onChange={(e) => handleChangeAccountType(e)}
              value={form.tipo_conta?.id}
            >
              <option value="1" selected>
                Credit
              </option>
              <option value="2">Debit</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Inicial Ammout</Form.Label>
            <Form.Control
              type="number"
              prefix="R$"
              onKeyUp={(e) => inputResolve(e)}
              placeholder="R$ 1546,84"
              value={form.saldo}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Account Number</Form.Label>
            <Form.Control
              type="text"
              value={form.numero_conta}
              id="numero_conta"
              name="numero_conta"
              placeholder="Enter tipo_conta"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Agency</Form.Label>
            <Form.Control
              type="text"
              value={form.agencia}
              id="agencia"
              name="agencia"
              placeholder="Enter tipo_conta"
            />
          </Form.Group>

          {form.tipo_conta?.id === 1 && (
            <div>
              <Form.Group>
                <Form.Label>Credit Limit</Form.Label>
                <Form.Control
                  type="text"
                  value={form.limite_credito}
                  id="limite_credito"
                  name="limite_credito"
                  placeholder="Enter tipo_conta"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Current Invoice Value</Form.Label>
                <Form.Control type="text" id="fatura_atual" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Invoice due date</Form.Label>
                <Form.Select
                  onChange={(e) => handleChangeDueDate(e)}
                  value={form.dia_vencimento}
                >
                  <option value={0}>-- SELECT THE DUE DATE --</option>

                  {days.map((i) => {
                    return (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-secondary">Cancel</Button>
          <Button type="submit" className="btn btn-primary">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </div>
  );
};
