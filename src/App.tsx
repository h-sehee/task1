import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./App.css";
import sky from "./images/Sky.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Sehee Hwang
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World</p>
            <h1>Task 3</h1>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <Container>
                <Row>
                    <Col>
                        My Hobbies:
                        <ul>
                            <li>Drawing</li>
                            <li>Listening Music</li>
                            <li>Carving Stamps</li>
                            <li>Playing Games</li>
                            <li>Photography</li>
                        </ul>
                        <div id="left_rectangle"></div>
                    </Col>
                    <Col>
                        <img
                            src={sky}
                            alt="My favorite picture among the pictures I took"
                            width="336"
                            height="189"
                        />
                        <div id="right_rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
