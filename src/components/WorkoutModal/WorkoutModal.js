import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { WorkoutForm } from "../WorkoutForm";

export function WorkoutModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleShow = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        + Adicionar treino
      </Button>

      <Modal
        show={isOpen}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Treino</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WorkoutForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}