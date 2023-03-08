import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🙇‍♀️" | "👶" | "🌕" | "🎃" | "🎅";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🌕");

    function rotateByAlphabet(): Holiday {
        let currentHoliday: Holiday = "👶";
        if (holiday === "👶") {
            currentHoliday = "🎅";
        } else if (holiday === "🎅") {
            currentHoliday = "🌕";
        } else if (holiday === "🌕") {
            currentHoliday = "🎃";
        } else if (holiday === "🎃") {
            currentHoliday = "🙇‍♀️";
        } else {
            currentHoliday = "👶";
        }
        return currentHoliday;
    }

    function rotateByTime(): Holiday {
        let currentHoliday: Holiday = "🙇‍♀️";
        if (holiday === "🙇‍♀️") {
            currentHoliday = "👶";
        } else if (holiday === "👶") {
            currentHoliday = "🌕";
        } else if (holiday === "🌕") {
            currentHoliday = "🎃";
        } else if (holiday === "🎃") {
            currentHoliday = "🎅";
        } else {
            currentHoliday = "🙇‍♀️";
        }
        return currentHoliday;
    }

    return (
        <div>
            <span>Holiday: {holiday}</span>
            <br></br>
            <Button onClick={() => setHoliday(rotateByAlphabet())}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(rotateByTime())}>
                Advance by Year
            </Button>
        </div>
    );
}
