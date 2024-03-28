import { Button, Image, Modal, Table } from "react-bootstrap";
import styles from "./accounts.module.css";
import { useEffect, useState } from "react";
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import { AccountForm } from "../../../../../shared/forms/accountForm/account.form";
import AccountService from "../../../../../../core/services/account.service";
import AuthService from "../../../../../../core/services/auth.service";
import { IConta } from "../../../../../../core/models/Conta";

const accountService = new AccountService();
const auth = new AuthService();

export interface AccountsPageProps {
  prop?: string;
}

export function AccountsPage({
  prop = "Account Page Works",
}: AccountsPageProps) {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [action, setAction] = useState("");
  const [accounts, setAccounts] = useState([] as IConta[]);
  const [updated, setUpdated] = useState(false);

  async function getAccounts() {
    await accountService
      .getByUser(auth.getUser().id as number)
      .then((res: { data: IConta[]; error: any; status: number }) => {
        if (res.error) {
          alert("Something went wrong.");
          return;
        }

       
        if (res.data) {
          setAccounts(res.data)
        };
      });
  }
  useEffect(() => {
    getAccounts();
  }, [updated]);

  function showForm(action?: string) {
    setShow(!show);

    if (show && action) {
      setAction(action);
    }
  }

  return (
    <div>
      <div className={`${styles.header_}`}>
        <h1>Account List</h1>
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
          <th>Bank</th>
          <th>Saldo</th>
          <th>Account Type</th>
          <th>Credit Limit</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {accounts.map((d: any) => (
            <tr className={`${styles.tr} w-100`} key={d.id}>
              <td>
                <Image src={d.banco.logo_url} alt="" width={50} height={50} />
                {d.banco.descricao}
              </td>
              <td>R$ {d.saldo}</td>
              <td>
                {d.tipo_conta.descricao.toUpperCase()}
              </td>
              <td>R$ {d.limite_credito}</td>
              <td>
                <div className="d-flex gap-2 justify-content-center align-items-center">
                  <FaSearch
                    className={`${styles.clickable}`}
                    size={20}
                    //   onClick={() => showForm("consult")}
                    color="currentColor"
                  />
                  <FaEdit
                    //   onClick={() => showForm("edit")}
                    className={`${styles.clickable}`}
                    size={20}
                    color="royalblue"
                  />
                  <FaTrash
                    //   onClick={() => showForm("delete")}
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
        <AccountForm
          account={selected}
          action={action}
          handleClose={() => showForm()}
        ></AccountForm>
      </Modal>
    </div>
  );
}
