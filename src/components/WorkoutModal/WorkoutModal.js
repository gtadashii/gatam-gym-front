import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { WorkoutForm } from "../WorkoutForm";
import api from "../../services/api";

export function WorkoutModal() {
  const [isOpen, setIsOpen] = useState(false);
  let exercises = [];
  const emptyExercise = {
    name: "",
    repetitions: "",
  };
  const [workoutName, setWorkoutName] = useState('');
  const [exercise1, setExercise1] = useState(emptyExercise);
  const [exercise2, setExercise2] = useState(emptyExercise);
  const [exercise3, setExercise3] = useState(emptyExercise);
  const [exercise4, setExercise4] = useState(emptyExercise);

  const handleShow = () => setIsOpen(true);
  const handleClose = () => {
    clearForm();
    setIsOpen(false);
  };

  function clearForm(){
    exercises = [];
    setWorkoutName('');
    setExercise1(emptyExercise);
    setExercise2(emptyExercise);
    setExercise3(emptyExercise);
    setExercise4(emptyExercise);
  }

  function handleSubmit(){
    !!exercise1.name && !!exercise1.repetitions && exercises.push(exercise1);
    !!exercise2.name && !!exercise2.repetitions && exercises.push(exercise2);
    !!exercise3.name && !!exercise3.repetitions && exercises.push(exercise3);
    !!exercise4.name && !!exercise4.repetitions && exercises.push(exercise4);

    api
      .post("/workouts", {
        name: workoutName,
        exercises,
      })
      .then(handleClose)
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

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
          <WorkoutForm
            props={{
              workoutName,
              setWorkoutName,
              exercise1,
              setExercise1,
              exercise2,
              setExercise2,
              exercise3,
              setExercise3,
              exercise4,
              setExercise4,
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}