// The default group
const DEFAULT_GROUP = "Names";

/* 
    Dictionary where the keys (item/group) will be displayed in the first drop-down,
    and when the user selects the key (item/group) from the dropdown, the associated
    values will be displayed in the second drop-down.
    
    To avoid re-rendering, React.memo is wraps both the MultiSelectDropDown
    and SingleSelectDropDown. For example, if an update occurs on the page
    and none of the values passed as props to the MultiSelectDropDown component
    change, then the MultiSelectDropDown will not be re-rendered!
*/
const GROUPS = {
    Numbers: [1, 2, 3, 4, 5],
    Letters: ["A", "B", "C", "D"],
};

module.exports = { DEFAULT_GROUP, GROUPS };
