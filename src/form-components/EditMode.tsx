import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                {(!editMode && isStudent && (
                    <span>{name} is a student.</span>
                )) ||
                    (!editMode && !isStudent && (
                        <span>{name} is not a student.</span>
                    ))}
                ;
            </div>
            <div>
                <Form.Check
                    type="switch"
                    id="edit-mode-switch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setEditMode(event.target.checked)
                    }
                />
            </div>
            <div>
                {editMode ? (
                    <Form.Group controlId="NameForm">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
                        />
                    </Form.Group>
                ) : (
                    <span></span>
                )}
            </div>
            <div>
                {editMode ? (
                    <Form.Check
                        type="checkbox"
                        id="student-check"
                        label="Check if you are a student"
                        checked={isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setIsStudent(event.target.checked)}
                    />
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
