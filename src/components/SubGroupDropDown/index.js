import React, { useState } from "react";
import MultiSelectDropDown from "./MultiSelectDropDown";
import SingleSelectDropDown from "./SingleSelectDropDown";
import { DEFAULT_GROUP, GROUPS } from "./_menu-items";

/* The SubGroupDropDown component which supports both single select and multi
    select dropdown menus.
 */
const SubGroupDropDown = () => {
    // The default group, a string.
    const [list, setList] = useState(DEFAULT_GROUP);

    return (
        <>
            <SingleSelectDropDown
                items={Object.keys(GROUPS)}
                onSelect={setList}
            />
            <MultiSelectDropDown dropDownName={list} items={GROUPS[list]} />
        </>
    );
};

export default SubGroupDropDown;
