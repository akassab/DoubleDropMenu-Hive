import "./App.css";
import React from "react";
import SubGroupDropDown from "./components/SubGroupDropDown";

function App() {


    /*
    Dictionary where the keys (item/group) will be displayed in the first drop-down,
    and when the user selects the key (item/group) from the dropdown, the associated
    values will be displayed in the second drop-down.

    To avoid re-rendering, React.memo is wraps both the MultiSelectDropDown
    and SingleSelectDropDown. For example, if an update occurs on the page
    and none of the values passed as props to the MultiSelectDropDown component
    change, then the MultiSelectDropDown will not be re-rendered!
    */
    const group1 = {
        Numbers: [1, 2, 3, 4, 5],
        Letters: ["A", "B", "C", "D"],
    };
    // The default group for group1
    const defaultGroup1 = "Numbers";

    // More examples to demonstrate flexible API
    const defaultGroup2 = "OS";
    const group2 = {
        Colors: ["red", "orange"],
        OS: ["Iphone", "Android"],
    };

    return (
        <div className="App">
            <header className="App-header">
                <SubGroupDropDown defaultGroup={defaultGroup1} group={group1} />
                <br/>
                <SubGroupDropDown defaultGroup={defaultGroup2} group={group2} />
            </header>
        </div>
    );
}

export default App;
