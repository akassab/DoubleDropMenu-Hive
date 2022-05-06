import React, { useState } from "react";
import MultiSelectDropDown from "./MultiSelectDropDown";
import SingleSelectDropDown from "./SingleSelectDropDown";

function SubGroupDropDown() {
    const lists = {
        Numbers: [1, 2, 3, 4, 5],
        Names: [
            "Oliver Hansen",
            "Van Henry",
            "April Tucker",
            "Ralph Hubbard",
            "Omar Alexander",
            "Carlos Abbott",
            "Miriam Wagner",
            "Bradley Wilkerson",
            "Virginia Andrews",
            "Kelly Snyder",
        ],
    };

    const [list, setList] = useState("Numbers");

    return (
        <>
            <SingleSelectDropDown
                items={Object.keys(lists)}
                onSelect={setList}
            />
            <MultiSelectDropDown dropDownName={list} items={lists[list]} />
        </>
    );
}

export default SubGroupDropDown;
