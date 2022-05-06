import React, { memo, useState } from "react";
import MultiSelectDropDown from "./MultiSelectDropDown";
import SingleSelectDropDown from "./SingleSelectDropDown";

/* The SubGroupDropDown component which supports both single select and multi
    select dropdown menus.
 */
const SubGroupDropDown = memo((props) => {
    // Get group and default group name from props
    const { defaultGroup, group } = props;
    // The default group, a string.
    const [list, setList] = useState(defaultGroup);

    return (
        <>
            <SingleSelectDropDown
                defaultGroup={defaultGroup}
                items={Object.keys(group)}
                onSelect={setList}
            />
            <MultiSelectDropDown dropDownName={list} items={group[list]} />
        </>
    );
});

export default SubGroupDropDown;
