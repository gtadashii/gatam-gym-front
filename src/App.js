import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { WorkoutModal, WorkoutList } from "../src/components";

function App() {

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Sistema GATAM</Navbar.Brand>
          <WorkoutModal />
        </Container>
      </Navbar>
      <WorkoutList />
    </>
  );
}

export default App;
