import React, { useContext, useEffect, useState } from "react";
import { Col, ListGroup, Tab, Row } from "react-bootstrap";
import { WorkoutDeletion } from "../WorkoutDeletion";
import { WorkoutInfo } from "../WorkoutInfo"
import { WorkoutModal } from "../WorkoutModal";
import api from "../../services/api";
import AuthContext from "../../context/AuthProvider";

export function WorkoutList() {
  const [workoutList, setWorkoutList] = useState([]);
  const { authHeader } = useContext(AuthContext);

  useEffect(() => {
    api.get("/workouts", authHeader).then((response) => {
      setWorkoutList(response.data);
    });
  }, []);

  if (!workoutList.length) return null;

  return (
    <>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        {workoutList.length > 0 &&
          workoutList.map((workout, index) => (
            <Row key={index}>
              <Col sm={4}>
                <ListGroup>
                  <ListGroup.Item action href={`#link${index}`}>
                    <div className="d-flex justify-content-between">
                      {workout.name}
                      <div className="d-flex justify-content-evenly">
                        <WorkoutModal isEdit={true} workoutId={workout.id} />
                        <WorkoutDeletion workout={workout} />
                      </div>
                    </div>
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
}
