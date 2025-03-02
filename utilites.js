function convertInputValue(id) {
    const value = document.getElementById(id).value;
    const convertedValue = parseInt(value);
    return convertedValue;
}
function convertInnerTextValue(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

function changeValue(id, value) {
    document.getElementById(id).innerText = value;
}

function disabled(id) {
    document.getElementById(id).disabled = true;
}