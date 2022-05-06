// On autofill we get a stringified value.
const handleAutoFill = (value) => {
    return typeof value === "string" ? value.split(",") : value;
};

export default handleAutoFill;
