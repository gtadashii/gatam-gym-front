import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { IoMdLogIn } from "react-icons/io";

import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";

export function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleShow = () => setIsOpen(true);

  function clearForm() {
    setName('');
    setUsername('');
    setPassword('');
  }

  const handleClose = () => {
    clearForm();
    setIsOpen(false);
    window.location.reload();
  };

  const handleSubmit = () => {
    isLogin ? console.log(username, password) : console.log(name, username, password)
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <IoMdLogIn />
        {"\nEntrar ou cadastrar"}
      </Button>

      <Modal show={isOpen} onHide={handleClose} centered>
        <Modal.Body>
          {isLogin ? (
            <LoginForm
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              handleSubmit={handleSubmit}
            />
          ) : (
            <SignUpForm
              name={name}
              setName={setName}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              handleSubmit={handleSubmit}
            />
          )}
          <div className="d-flex justify-content-center">
            <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
              {isLogin
                ? "Não tem cadastro? Clique aqui para se registrar!"
                : "Já tem cadastro? Clique aqui para entrar!"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
