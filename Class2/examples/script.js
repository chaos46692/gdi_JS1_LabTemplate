/*
    This put your JavaScript in here!
*/

function validate(element) {
    if(element.value === "") {
        document.getElementById("errorText").setAttribute("class", "");
        element.setAttribute("class", "error");
    } else {
        document.getElementById("errorText").setAttribute("class", "hidden");
        element.setAttribute("class", "");   
    }
}



