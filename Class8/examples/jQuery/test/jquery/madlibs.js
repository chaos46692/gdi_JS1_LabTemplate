/*
    This put your JavaScript in here!
*/

function validate() {
    var result = validateField(this);
    
    if ($("input[type='text'][class='error']").length > 0) {
        $("#errorText").show();
    } else {
        $("#errorText").hide();
    }
    
    return result;
}

function validateField(field) {
     if(isEmpty(field)) {
        $(field).addClass("error");
        return false;
    } else {
        $(field).removeClass("error");  
        return true;
    }
}

function isEmpty(field) {
    return (field.value == undefined) || (field.value === "");
}

function writeMadLib() { 
    var validationPassed = true;
   
    $("input[type='text']").each(function() {
        //why does this work but inlining validateField(this) does not?
        var validateresult = validateField(this);
        validationPassed = validationPassed && validateresult;
    });
    
    if(validationPassed) {
        $("#errorText").hide();
        $("#madDiv").html("I like " + $("#noun1").val() + ". Sometimes I even like a good " + $("#noun2").val() + ".");
    } else {
        $("#errorText").show();
    }
}

$(document).ready(function () {
    $("input[type='text']").on("blur", validate);
    $("#results").on("click", writeMadLib);
});