import React from "react";

import { Container, Navbar } from "react-bootstrap";
import { CgGym } from "react-icons/cg";
import { AuthModal, WorkoutModal, WorkoutList } from "../src/components";

function App() {
  const isLoggedIn = false;

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
