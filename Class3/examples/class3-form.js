function checkAge(field) {
    var age = field.value;
    
    if(age === "") {
        alert("Age is required");
        field.focus();
    } else if(isNaN(age)) {
        alert("Please enter a number for age");
        field.focus();
    } else if(age < 0) {
        alert("Please enter a valid number for age");
        field.focus();
    } 
        
}