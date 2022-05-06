import "./App.css";
import React, { useState } from "react";
import MultiSelectDropDown from "./components/dropdowns/MultiSelectDropDown";
import SingleSelectDropDown from "./components/dropdowns/SingleSelectDropDown";

function App() {
    /* Dictionary where the keys (item) will be displayed in the first drop-down,
      and when the user selects the key (item) from the dropdown, the associated
      values will be displayed in the second drop-down.

      To avoid re-rendering, React.memo is wraps both the MultiSelectDropDown
      and SingleSelectDropDown. For example, if an update occurs on the page
      and none of the values passed as props to the MultiSelectDropDown component
      change, then the MultiSelectDropDown will not be re-rendered!
   */
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

    // The default lists will use "Numbers" as the initial state.
    const [list, setList] = useState("Numbers");

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
