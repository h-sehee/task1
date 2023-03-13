import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);

    function checkAttemptsRequested(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const attemptsInt = parseInt(event.target.value);
        Number.isNaN(attemptsInt)
            ? setAttemptsRequested(0)
            : setAttemptsRequested(attemptsInt);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attemptsLeft}</div>
            <div>
                <Form.Group controlId="=AttemptsRequestForm">
                    <Form.Label>
                        How much attempts do you want to request?
                    </Form.Label>
                    <Form.Control
                        type="number"
                        value={attemptsRequested}
                        onChange={checkAttemptsRequested}
                    />
                </Form.Group>
            </div>
            <div>
                <Button
                    onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                    disabled={attemptsLeft === 0}
                >
                    use
                </Button>
                <Button
                    onClick={() =>
                        setAttemptsLeft(attemptsLeft + attemptsRequested)
                    }
                >
                    gain
                </Button>
            </div>
        </div>
    );
}
