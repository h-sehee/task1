import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [textBoxcolor, setTextBoxColor] = useState<string>("white");
    const COLORS = [
        "red",
        "green",
        "blue",
        "black",
        "white",
        "yellow",
        "cyan",
        "magenta"
    ];
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        name={color}
                        onChange={(e) => setTextBoxColor(e.target.value)}
                        style={{ backgroundColor: `${color}` }}
                        id={color}
                        label={color}
                        key={color}
                        value={color}
                        checked={textBoxcolor === color}
                    />
                ))}
                <br></br>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: `${textBoxcolor}` }}
                >
                    {textBoxcolor}
                </span>
            </div>
        </div>
    );
}
