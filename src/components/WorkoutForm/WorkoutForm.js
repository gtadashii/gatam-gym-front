import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export function WorkoutForm({props}) {
  const muscleGroups = {};

  const {
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
   } = props;

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
              value={exercise1.repetitions}
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
              value={exercise2.name}
              onChange={(e) => {
                setExercise2({
                  ...exercise2,
                  name: e.target.value,
                });
              }}
            />
            <Form.Control
              placeholder="Repetições"
              value={exercise2.repetitions}
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
              value={exercise3.name}
              onChange={(e) => {
                setExercise3({
                  ...exercise3,
                  name: e.target.value,
                });
              }}
            />
            <Form.Control
              placeholder="Repetições"
              value={exercise3.repetitions}
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
              value={exercise4.name}
              onChange={(e) => {
                setExercise4({
                  ...exercise4,
                  name: e.target.value,
                });
              }}
            />
            <Form.Control
              placeholder="Repetições"
              value={exercise4.repetitions}
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
    </>
  );
}
