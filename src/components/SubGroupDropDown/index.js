import React, { useState } from "react";
import MultiSelectDropDown from "./MultiSelectDropDown";
import SingleSelectDropDown from "./SingleSelectDropDown";

// The default subgroup
const DEFAULT_SUBGROUP = "Names";

/* 
    Dictionary where the keys (item) will be displayed in the first drop-down,
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

/* The SubGroupDropDown component which supports both single select and multi
    select dropdown menus.
 */
function SubGroupDropDown() {
    // The default lists will use "Numbers" as the initial state.
    const [list, setList] = useState(DEFAULT_SUBGROUP);

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

module.exports = { DEFAULT_SUBGROUP, SubGroupDropDown };
