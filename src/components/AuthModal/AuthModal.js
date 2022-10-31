import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { IoMdLogIn } from "react-icons/io";

import { LogInForm } from "./LogInForm";
import { SignUpForm } from "./SignUpForm";
import AuthContext from "../../context/AuthProvider";

export function AuthModal() {
  const { clearLogInInfo, clearSignUpInfo } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isLogIn, setIsLogIn] = useState(true);

  const handleShow = () => setIsOpen(true);

  const handleClose = () => {
    clearLogInInfo();
    clearSignUpInfo();
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <IoMdLogIn />
        {"\nEntrar ou cadastrar"}
      </Button>

      <Modal show={isOpen} onHide={handleClose} centered>
        <Modal.Body>
          {isLogIn ? (
            <LogInForm />
          ) : (
            <SignUpForm />
          )}
          <div className="d-flex justify-content-center">
            <Button variant="link" onClick={() => setIsLogIn(!isLogIn)}>
              {isLogIn
                ? "Não tem cadastro? Clique aqui para se registrar!"
                : "Já tem cadastro? Clique aqui para entrar!"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
