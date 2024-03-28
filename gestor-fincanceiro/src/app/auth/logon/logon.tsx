import { Card, Button, Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import styles from "../auth.module.css";
import AuthService from "../../core/services/auth.service";

const auth = new AuthService();

export const LogonPage = () => {
  return (
    <div className="container mt-5 w-50 text-start justify-content-center align-items-center">
      <LoginForm />
    </div>
  );
};

export interface FormProps {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [form, setForm] = useState({email: "",password: ""} as FormProps);
  const [isValid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    status: 0,
    message: "",
  });

  function getForm() {
    return form;
  }

  const handleLogin = async (formData: FormEvent<HTMLFormElement>) => {
    formData.preventDefault();
    console.log(formData.currentTarget);
    setLoading(true);
    clearError();
    getForm();

    await auth
      .login(form.email, form.password)
      .then((r) => {
        if (r.error) {
          setError(r.error);
          return;
        }
        if (r.data?.length) {
          window.location.href = "/";
          auth.setUser(r.data[0])
        } else {
          setError({
            status: 404,
            message: "Email/Password invalid",
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleValid = () => {
    let valid = form.email && form.password ? true : false;
    console.log(valid);
    setValid(valid);
  };

  function clearError() {
    setError({
      status: 0,
      message: "",
    });
  }
  function updateForm(event: any): void {
    clearError();
    
    let _form: any = {}
    _form[event.target.id] = event?.target.value;
    console.log(form)
    setForm({
      ...form, 
      ... _form
    });
    handleValid();
  }

  return (
    <div className="container h-100 w-100 justify-content-center align-items-center">
      <Form
        onSubmit={(e) => handleLogin(e)}
        ref={this}
        onChange={(e) => updateForm(e)}
      >
        <Card>
          <Card.Header title="Login" className="text-center">
            <Card.Title>LOGIN</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form.Group>
              <Form.Label>
                Email<span className="text-danger">*</span>:
              </Form.Label>
              <Form.Control
                type="email"
                value={form.email}
                placeholder="put.your@email.here"
                id="email"
                name="email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Password<span className="text-danger">*</span>:
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="*************"
                id="password"
                value={form.password}
                name="password"
                required
              />
            </Form.Group>

            {error ? (
              <span className="text-danger text-center">{error.message}</span>
            ) : null}

            <div className="mt-3 ">
              <Button
                type="submit"
                title="Save"
                variant="success"
                className="w-100"
                disabled={loading || !isValid}
              >
                {!loading ? "Login" : <Spinner size="sm" />}
              </Button>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="text-center">
              <span>Not registered?? </span>
              <br />
              <Link to={"/auth/signup"} title="" className={`${styles.a}`}>
                {" "}
                Register now!
              </Link>
            </div>
          </Card.Footer>
        </Card>
      </Form>
    </div>
  );
};
