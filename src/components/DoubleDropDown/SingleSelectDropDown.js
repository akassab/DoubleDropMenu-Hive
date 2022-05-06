import React, { memo, useState } from "react";
import {
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    Select,
} from "@mui/material";
import { formStyles, handleAutoFill, MenuProps } from "./_helpers";

/*
  - The SingleSelectDropDown component will contain a list of group names. Upon
      selecting an item, the associated values will be displayed in the
      MultiSelectDropDownMenu component.
  - The component is wrapped with memo to avoid re-rendering the component when
      the component's prop values don't change.
 */
const SingleSelectDropDown = memo((props) => {
    // Get component props
    const { defaultGroup, items, onSelect: setList } = props;

    const [item, setItem] = useState(defaultGroup);

    // Callback when a user selects an item from the primary drop-down menu.
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setItem(handleAutoFill(value));

        /* - Use this set-state hook to notify the MultiSelectDropDown component,
            of the newly selected group.
           - This will allow the MultiSelectDropDown to re-render since the component's
            prop values change.
        */
        setList(value);
    };

    return (
        <div>
            <FormControl sx={formStyles}>
                <InputLabel id="demo-simple-select-label">{item}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={item}
                    onChange={handleChange}
                    MenuProps={MenuProps}
                >
                    {items.map((name) => (
                        <MenuItem key={name} value={name}>
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
});

export default SingleSelectDropDown;
