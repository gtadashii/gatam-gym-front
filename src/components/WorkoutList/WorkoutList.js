import React, { useEffect, useState } from "react";
import { Col, ListGroup, Tab, Row } from "react-bootstrap";
import { WorkoutInfo } from "../WorkoutInfo"
import api from "../../services/api";

export function WorkoutList() {
  const [workoutList, setWorkoutList] = useState([]);

  useEffect(() => {
    api.get('/workouts').then((response) => {
      setWorkoutList(response.data);
    });
  }, []);

  useEffect(() => {console.log(workoutList)}, [workoutList])

  if (!workoutList.length) return null;

  return (
    <>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        {workoutList.length > 0 &&
          workoutList.map((workout, index) => (
            <Row>
              <Col sm={4}>
                <ListGroup>
                  <ListGroup.Item action href={`#link${index}`}>
                    {workout.name}
                  </ListGroup.Item>
                </ListGroup>
              </Col>

              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey={`#link${index}`}>
                    <WorkoutInfo workouts={workout.exercises} />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          ))}
      </Tab.Container>
    </>
  );
};
