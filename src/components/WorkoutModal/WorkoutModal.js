import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import { WorkoutForm } from "../WorkoutForm";
import api from "../../services/api";

export function WorkoutModal(props) {
  const {isEdit, workoutId} = props;
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
    window.location.reload();
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

  function handleUpdateWorkout(workoutId) {
    !!exercise1.name && !!exercise1.repetitions && exercises.push(exercise1);
    !!exercise2.name && !!exercise2.repetitions && exercises.push(exercise2);
    !!exercise3.name && !!exercise3.repetitions && exercises.push(exercise3);
    !!exercise4.name && !!exercise4.repetitions && exercises.push(exercise4);

    api
      .put(`/workouts/${workoutId}`, {
        name: workoutName,
        exercises,
      })
      .then(handleClose)
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  function handleGetWorkout(workoutId) {
    api
      .get(`/workouts/${workoutId}`)
      .then((res) => {
        if (res.data) {
          setWorkoutName(res.data.name);
          setExercise1(res.data.exercises[0] || emptyExercise);
          setExercise2(res.data.exercises[1] || emptyExercise);
          setExercise3(res.data.exercises[2] || emptyExercise);
          setExercise4(res.data.exercises[3] || emptyExercise);
        }
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  useEffect(() => {
    if (isEdit && !!workoutId) {
      handleGetWorkout(workoutId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, workoutId]);

  return (
    <>
      {isEdit ? (
        <Button variant="secondary" onClick={handleShow}>
          <AiOutlineEdit />
        </Button>
      ) : (
        <Button variant="primary" onClick={handleShow}>
          + Adicionar treino
        </Button>
      )}

      <Modal
        show={isOpen}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          {isEdit ? (
            <Modal.Title>Editar Treino</Modal.Title>
          ) : (
            <Modal.Title>Adicionar Treino</Modal.Title>
          )}
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
          {isEdit ? (
            <Button variant="primary" onClick={() => handleUpdateWorkout(workoutId)}>
              Editar
            </Button>
          ) : (
            <Button variant="primary" onClick={handleSubmit}>
              Adicionar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}