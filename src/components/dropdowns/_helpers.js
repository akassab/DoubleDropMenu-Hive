//  Re-usable code.

// On auto-fill we get a stringified value.
const handleAutoFill = (value) => {
    return typeof value === "string" ? value.split(",") : value;
};

// Styles for drop-down menus.
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

const formStyles = { m: 1, width: 300 };

module.exports = { formStyles, handleAutoFill, MenuProps };
