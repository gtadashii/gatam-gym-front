import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import api from "../../service/api";

export function WorkoutForm() {
  const [workoutName, setWorkoutName] = useState('');
  const muscleGroups = {};
  const exercises = [];

  const [exercise1, setExercise1] = useState({
    name: "",
    repetitions: "",
  });

  const [exercise2, setExercise2] = useState({
    name: "",
    repetitions: "",
  });

  const [exercise3, setExercise3] = useState({
    name: "",
    repetitions: "",
  });

  const [exercise4, setExercise4] = useState({
    name: "",
    repetitions: "",
  });

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
     .catch((err) => {
       console.error("ops! ocorreu um erro" + err);
     });
 }

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nome do Treino</Form.Label>
          <Form.Control
            id="exampleFormControlInput1"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Grupos musculares</Form.Label>
          <Form.Check
            label="Membros Superiores"
            onChange={(e) => {
              muscleGroups["Membros Superiores"] = e.target.checked;
            }}
          />

          <Form.Check
            label="Membros Inferiores"
            onChange={(e) => {
              muscleGroups["Membros Inferiores"] = e.target.checked;
            }}
          />

          <Form.Check
            label="Tórax e Abdômen"
            onChange={(e) => {
              muscleGroups["Tórax e Abdômen"] = e.target.checked;
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Exercícios</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Nome do Exercício"
              value={exercise1.name}
              onChange={(e) => {
                setExercise1({
                  ...exercise1,
                  name: e.target.value,
                });
              }}
            />
            <Form.Control
              placeholder="Repetições"
              onChange={(e) => {
                setExercise1({
                  ...exercise1,
                  repetitions: e.target.value,
                });
              }}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Nome do Exercício"
              onChange={(e) => {
                setExercise2({
                  ...exercise2,
                  name: e.target.value,
                });
              }}
            />
            <Form.Control
              placeholder="Repetições"
              onChange={(e) => {
                setExercise2({
                  ...exercise2,
                  repetitions: e.target.value,
                });
              }}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Nome do Exercício"
              onChange={(e) => {
                setExercise3({
                  ...exercise3,
                  name: e.target.value,
                });
              }}
            />
            <Form.Control
              placeholder="Repetições"
              onChange={(e) => {
                setExercise3({
                  ...exercise3,
                  repetitions: e.target.value,
                });
              }}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Nome do Exercício"
              onChange={(e) => {
                setExercise4({
                  ...exercise4,
                  name: e.target.value,
                });
              }}
            />
            <Form.Control
              placeholder="Repetições"
              onChange={(e) => {
                setExercise4({
                  ...exercise4,
                  repetitions: e.target.value,
                });
              }}
            />
          </InputGroup>
        </Form.Group>
      </Form>

      <Button onClick={handleSubmit}>TESTE API</Button>
    </>
  );
}
