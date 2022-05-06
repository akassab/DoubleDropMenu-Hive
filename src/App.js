import "./App.css";
import React, { useState } from "react";
import MultiSelectDropDown from "./components/dropdowns/MultiSelectDropDown";
import SingleSelectDropDown from "./components/dropdowns/SingleSelectDropDown";

function App() {
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

    const [list, setList] = useState("numbers");

    return (
        <div className="App">
            <header className="App-header">
                <SingleSelectDropDown
                    items={Object.keys(lists)}
                    onSelect={setList}
                />

                <MultiSelectDropDown dropDownName={list} items={lists[list]} />
            </header>
        </div>
    );
}

export default App;
