import React from "react";
import { Table } from "react-bootstrap";

export function WorkoutInfo({workouts}) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Treino</th>
            <th>Repetições</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{workout.name}</td>
              <td>{workout.repetitions}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
