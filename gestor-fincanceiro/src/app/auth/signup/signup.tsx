import { Card, Button, Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../auth.module.css";
import { IMaskInput } from "react-imask";
import { FormEvent, useState } from "react";
import AuthService from "../../core/services/auth.service";
import Pessoa from "../../core/models/Pessoa";
const authService = new AuthService();

declare interface SignupFormProp {
  nome: string;
  cpf: string;
  email: string;
  senha: string;
}

export const SignupPage = () => {
  const _form = {
    nome: "",
    cpf: "",
    email: "",
    senha: "",
  } as SignupFormProp;
  return (
    <div className="container mt-5 w-50 text-start justify-content-center align-items-center">
      <SignupForm {..._form} />
    </div>
  );
};

const SignupForm = (props: SignupFormProp) => {
  const [form, setForm] = useState(props);
  const [loading, setLoading] = useState(false);
  const [isValid, setValid] = useState(false);
  const [error, setError] = useState({
    message: "",
    status: "",
  });
  function clearError() {
    setError({
      message: "",
      status: "",
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    clearError();
    setLoading(true);
    getForm(document.getElementsByTagName("form").item(0) as HTMLFormElement);
    authService
      .signup(new Pessoa({ ...(form as any) }))
      .then((r) => {
        // r= JSON.parse(r)
        console.log("no then do component", r);

        if (r.error) {
          setError({
            message: r.error.details,
            status: r.status,
          });
          return;
        }

        authService.setUser(r.data[0]);
        window.location.href = "/";
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleChange(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    getForm(e.currentTarget);
  }

  function handleValid() {
    let _form = document.getElementsByTagName("form").item(0);
    let inputs = _form?.getElementsByTagName(
      "input"
    ) as HTMLCollectionOf<HTMLInputElement>;

    let valid = true;
    const __form: any = {};
    for (let i = 0; i < inputs?.length; i++) {
      const element = inputs.item(i);
      const id = element?.id as string
      __form[id] = element?.value;
      if(!__form[id]) valid = false
    }
    setValid(valid);
  }

  function getForm(eForm: HTMLFormElement) {
    const inputs = eForm.getElementsByTagName("input");

    let _form: any = {};
    for (let i = 0; i < inputs.length; i++) {
      const id = inputs.item(i)?.id || "";
      if (id) _form[id] = inputs.item(i)?.value;
    }

    setForm(_form);
    handleValid();
    return form;
  }

  return (
    <div className="h-100 w-100 justify-content-center align-items-center">
      <Form
        onChange={(e) => handleChange(e)}
        onSubmit={(e) => handleSubmit(e)}
        ref={this}
      >
        <Card>
          <Card.Header title="Register" className="text-center">
            <Card.Title>REGISTER</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                required
                value={form.nome}
                name="nome"
                id="nome"
                type="text"
                placeholder="My name is..."
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>CPF:</Form.Label>
              <Form.Control
                required
                value={form.cpf}
                name="cpf"
                id="cpf"
                type="text"
                as={IMaskInput}
                mask="000.000.000-00"
                placeholder="Put Your CPF Here"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                required
                value={form.email}
                name="email"
                id="email"
                type="email"
                placeholder="put.your@email.here"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                required
                value={form.senha}
                name="senha"
                id="senha"
                type="password"
                placeholder="********"
              />
            </Form.Group>
            {error ? (
              <span className="text-danger text-center">{error.message}</span>
            ) : null}
            <div className="mt-3">
              {/* <Link to={"/"}> */}
              <Button
                type="submit"
                title="Save"
                variant="success"
                className="w-100"
                disabled={loading || !isValid}
              >
                {!loading ? "Register" : <Spinner size="sm" />}
              </Button>
              {/* </Link> */}
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="text-center">
              <span>Already registered?? </span>
              <br />
              <Link to={"/auth/login"} title="" className={`${styles.a}`}>
                {" "}
                Sign In!
              </Link>
            </div>
          </Card.Footer>
        </Card>
      </Form>
    </div>
  );
};
