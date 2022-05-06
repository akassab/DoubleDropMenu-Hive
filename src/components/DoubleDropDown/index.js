import React, { memo, useState } from "react";
import MultiSelectDropDown from "./MultiSelectDropDown";
import SingleSelectDropDown from "./SingleSelectDropDown";

/* The DoubleDropDown component which supports both single select and multi
    select dropdown menus.
 */
const DoubleDropDown = memo((props) => {
    // Get groups and default group name from props
    const { defaultGroup, groups } = props;
    // The default group, a string.
    const [list, setList] = useState(defaultGroup);

    /*
      To avoid re-rendering, I use React.memo to wrap both the MultiSelectDropDown
      and SingleSelectDropDown. For example, if an update occurs on the page
      and none of the values passed as props to the MultiSelectDropDown component
      change, then the MultiSelectDropDown will not be re-rendered!
     */
    return (
        <>
            <SingleSelectDropDown
                defaultGroup={defaultGroup}
                items={Object.keys(groups)}
                onSelect={setList}
            />
            <MultiSelectDropDown dropDownName={list} items={groups[list]} />
        </>
    );
});

export default DoubleDropDown;
