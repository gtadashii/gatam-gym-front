import React, { useContext } from "react";

import { Container, Navbar } from "react-bootstrap";
import { CgGym } from "react-icons/cg";
import { AuthModal, WorkoutModal, WorkoutList } from "../src/components";
import AuthContext from "./context/AuthProvider";

function App() {
  const { logInResponse } = useContext(AuthContext);
  const isLoggedIn = !!logInResponse.token;

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <CgGym />
            {'\nSistema GATAM'}
          </Navbar.Brand>
          {isLoggedIn ? <WorkoutModal /> : <AuthModal />}
        </Container>
      </Navbar>
      {isLoggedIn && <WorkoutList />}
    </>
  );
}

export default App;
