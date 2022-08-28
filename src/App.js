import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { WorkoutModal } from "./components/WorkoutModal"
import { Alert } from "../src/components/Alert";

function App() {

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Sistema GATAM</Navbar.Brand>
          <WorkoutModal />
        </Container>
      </Navbar>
      <h1>Hello, world!</h1>
      <Alert />
    </>
  );
}

export default App;
