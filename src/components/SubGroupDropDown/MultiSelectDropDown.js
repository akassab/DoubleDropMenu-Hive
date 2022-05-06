import React, { useState, memo, useEffect, useCallback } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import handleAutoFill from "./_helpers";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


const MultiSelectDropDown = memo((props) => {
    const { items, dropDownName } = props;

    const [item, setItem] = useState([]);

    const [selected, setSelected] = useState({ selected: [] });

    const handleChange = useCallback(
        (event) => {
            const {
                target: { value },
            } = event;
            setItem(handleAutoFill(value));
            setSelected({ selected: value });
        },
        [setSelected]
    );

    const capitalizeName = useCallback(() => {
        return dropDownName.charAt(0).toUpperCase() + dropDownName.slice(1);
    }, [dropDownName]);

    useEffect(() => {
        setSelected({ selected: [] });
        setItem([]);
    }, [items]);

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">
                    {capitalizeName()}
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
                    input={""}
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
        </div>
    );
});

MultiSelectDropDown.defaultProps = {
    items: [],
    dropDownName: "Numbers",
};

export default MultiSelectDropDown;
