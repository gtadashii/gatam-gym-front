import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import AuthContext from "../../context/AuthProvider"

export function LoginForm(props) {
  const { loginInfo, setLoginInfo } = useContext(AuthContext);
  const { handleSubmit } = props;

  return (
    <Container id="main-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center p-3 w-100">
        <h1>Entrar</h1>
        <div>
          <Form.Group className="m-3" controlId="sign-in-email-address">
            <Form.Control
              type="email"
              size="lg"
              placeholder="Endereço de email"
              autoComplete="username"
              className="position-relative"
              value={loginInfo.username}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, username: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="m-3" controlId="sign-in-password">
            <Form.Control
              type="password"
              size="lg"
              placeholder="Senha"
              autoComplete="current-password"
              className="position-relative"
              value={loginInfo.password}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, password: e.target.value })
              }
            />
          </Form.Group>
        </div>
        <div className="d-grid">
          <Button variant="primary" size="lg" onClick={handleSubmit}>
            Entrar
          </Button>
        </div>
      </Form>
    </Container>
  );
}
