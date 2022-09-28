import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import api from "../../services/api";

export function WorkoutDeletion(props) {
  const { workout } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleShow = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  function handleWorkoutDeletion(workoutId) {
    api
      .delete(`/workouts/${workoutId}`)
      .then(() => { 
        handleClose(); 
        window.location.reload() 
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <AiOutlineDelete />
      </Button>

      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Atenção!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Você confirma a exclusão do treino "{workout.name}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => handleWorkoutDeletion(workout.id)}>
            Sim, excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
