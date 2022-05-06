import React, { memo, useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { formStyles, handleAutoFill, MenuProps } from "./_helpers";

const SingleSelectDropDown = memo((props) => {
    // Get component props
    const { items, onSelect: setList } = props;

    const [item, setItem] = useState("Numbers");

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

// Default props for this component
SingleSelectDropDown.defaultProps = {
    items: [],
    onSelect: () => {},
};

export default SingleSelectDropDown;
