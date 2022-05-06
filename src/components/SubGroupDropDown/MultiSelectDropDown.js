import React, { memo, useCallback, useEffect, useState } from "react";
import {
    Button,
    Checkbox,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    Select,
} from "@mui/material";
import { formStyles, handleAutoFill, MenuProps } from "./_helpers";

/*
  - The MultiSelectDropDown component will contain a list of values from the group
     selected from the SingleSelectDropDown component.
  - The component is wrapped with memo to avoid re-rendering the component when
      the component's prop values don't change.
 */
const MultiSelectDropDown = memo((props) => {
    // Get component props
    const { items, dropDownName } = props;

    const [item, setItem] = useState([]);

    // List of selected items from the secondary menu.
    const [selected, setSelected] = useState({ selected: [] });

    // Callback when a user selects an item from the secondary drop-down menu.
    const handleChange = useCallback(
        (event) => {
            const {
                target: { value },
            } = event;
            setItem(handleAutoFill(value));

            // Keep track of the selected items so far.
            setSelected({ selected: value });
        },
        [setSelected]
    );

    /* Called when the items array changes. This makes sure that whenever the
        dropDownName value changes, we clear the selected items.
    */
    useEffect(() => {
        setSelected({ selected: [] });
        setItem([]);
    }, [dropDownName]);

    return (
        <div>
            <FormControl sx={formStyles}>
                <InputLabel id="demo-multiple-checkbox-label">
                    {dropDownName}
                </InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={item}
                    onChange={handleChange}
                    renderValue={() => {
                        return selected.selected.join(", ");
                    }}
                    MenuProps={MenuProps}
                >
                    {items.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={item.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <br />
            <Button
                variant="contained"
                onClick={() => {
                    setSelected({ selected: items });
                    setItem(items);
                }}
            >
                Select All
            </Button>
            <Button
                onClick={() => {
                    setSelected({ selected: [] });
                    setItem([]);
                }}
            >
                Clear Selection
            </Button>
        </div>
    );
});

export default MultiSelectDropDown;
