import "./App.css";
import React from "react";
import DoubleDropDown from "./components/DoubleDropDown";

function App() {
    /*
    Dictionary where the keys (item/group) will be displayed in the first drop-down,
    and when the user selects the key (item/group) from the dropdown, the associated
    values will be displayed in the second drop-down.
    */

    // The default group for group1
    const defaultGroup1 = "Numbers";
    const groups1 = {
        Numbers: [1, 2, 3, 4, 5],
        Letters: ["A", "B", "C", "D"],
    };

    // More examples to demonstrate flexible API
    const defaultGroup2 = "OS";
    const groups2 = {
        Colors: ["red", "orange"],
        OS: ["Iphone", "Android"],
    };

    return (
        <div className="App">
            <header className="App-header">
                <DoubleDropDown defaultGroup={defaultGroup1} groups={groups1} />
                <br/>
                <DoubleDropDown defaultGroup={defaultGroup2} groups={groups2} />
            </header>
        </div>
    );
}

export default App;
