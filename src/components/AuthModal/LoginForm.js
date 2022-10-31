import React from "react";
import { Button, Container, Form } from "react-bootstrap";

export function LoginForm(props) {
  const { username, setUsername, password, setPassword, handleSubmit } = props;

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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="m-3" controlId="sign-in-password">
            <Form.Control
              type="password"
              size="lg"
              placeholder="Senha"
              autoComplete="current-password"
              className="position-relative"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
