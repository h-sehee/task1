import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function changeStatus(): void {
        if (progress === true) {
            setProgress(false);
        } else {
            setProgress(true);
            setAttempt(attempt - 1);
        }
    }

    return (
        <div>
            <div>
                <Button
                    onClick={changeStatus}
                    disabled={progress || attempt === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={changeStatus} disabled={!progress}>
                    Stop Quiz
                </Button>
            </div>
            <br></br>
            <div>
                <Button
                    onClick={() => setAttempt(attempt + 1)}
                    disabled={progress}
                >
                    Mulligan
                </Button>
            </div>
            <div>
                Attempts: <span>{attempt}</span>
            </div>
        </div>
    );
}
