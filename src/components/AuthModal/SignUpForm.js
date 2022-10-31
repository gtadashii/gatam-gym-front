import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import AuthContext from "../../context/AuthProvider";

export function SignUpForm() {
  const { signUpInfo, setSignUpInfo, handleSignUp } = useContext(AuthContext);

  return (
    <Container id="main-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center p-3 w-100">
        <h1>Cadastro de Usuário</h1>
        <div>
          <Form.Group className="m-3" controlId="sign-up-name">
            <Form.Control
              type="text"
              size="lg"
              placeholder="Nome"
              autoComplete="name"
              className="position-relative"
              value={signUpInfo.name}
              onChange={(e) =>
                setSignUpInfo({ ...signUpInfo, name: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="m-3" controlId="sign-up-email-address">
            <Form.Control
              type="email"
              size="lg"
              placeholder="Endereço de email"
              autoComplete="email"
              className="position-relative"
              value={signUpInfo.email}
              onChange={(e) =>
                setSignUpInfo({ ...signUpInfo, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="m-3" controlId="sign-up-password">
            <Form.Control
              type="password"
              size="lg"
              placeholder="Senha"
              autoComplete="current-password"
              className="position-relative"
              value={signUpInfo.password}
              onChange={(e) =>
                setSignUpInfo({ ...signUpInfo, password: e.target.value })
              }
            />
          </Form.Group>
        </div>
        <div className="d-grid">
          <Button variant="primary" size="lg" onClick={handleSignUp}>
            Cadastrar
          </Button>
        </div>
      </Form>
    </Container>
  );
}
