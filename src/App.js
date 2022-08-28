import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { WorkoutModal } from "./components/WorkoutModal"
import "./App.css";

function App() {

  return (
    <>
        <Navbar bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">GATAM GYM</Navbar.Brand>
            <WorkoutModal />
          </Container>
        </Navbar>
        <h1>Hello, world!</h1>
    </>
  );
}

export default App;
