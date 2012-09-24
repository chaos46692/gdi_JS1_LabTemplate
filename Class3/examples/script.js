/*
    This put your JavaScript in here!
*/

function validate(field) {
    if(isEmpty(field)) {
        document.getElementById("errorText").setAttribute("class", "");
        field.setAttribute("class", "error");
    } else {
        document.getElementById("errorText").setAttribute("class", "hidden");
        field.setAttribute("class", "");   
    }
}

function isEmpty(field) {
    return field.value === "";
}

function writeMadLib() { 
   var noun1Field = document.getElementById("noun1");
   var noun2Field = document.getElementById("noun2");
   
   if(isEmpty(noun1Field) || isEmpty(noun2Field)) {
        validate(noun1Field);
        validate(noun2Field);
   } else {
       var resultDiv = document.getElementById("madDiv");
       resultDiv.innerHTML = "I like " + noun1Field.value + ". Sometimes I even like a good " + noun2Field.value + ".";
   }
}



