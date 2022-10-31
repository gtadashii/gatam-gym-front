import React from "react";
import { Button, Container, Form } from "react-bootstrap";

export function SignUpForm(props) {
  const {
    name,
    setName,
    username,
    setUsername,
    password,
    setPassword,
    handleSubmit,
  } = props;

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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="m-3" controlId="sign-up-email-address">
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
          <Form.Group className="m-3" controlId="sign-up-password">
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
