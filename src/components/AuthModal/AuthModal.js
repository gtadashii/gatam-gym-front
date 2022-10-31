import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { IoMdLogIn } from "react-icons/io";

import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";
import AuthContext from "../../context/AuthProvider";

export function AuthModal() {
  const {
    loginInfo,
    clearLoginInfo,
    signUpInfo,
    clearSignUpInfo,
  } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleShow = () => setIsOpen(true);

  const handleClose = () => {
    clearLoginInfo();
    clearSignUpInfo();
    setIsOpen(false);
    window.location.reload();
  };

  const handleSubmit = () => {
    isLogin ? console.log(loginInfo) : console.log(signUpInfo);
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
            <LoginForm handleSubmit={handleSubmit} />
          ) : (
            <SignUpForm handleSubmit={handleSubmit} />
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
