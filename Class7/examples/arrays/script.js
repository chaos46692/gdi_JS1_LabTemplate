

function writeToDiv(id,html) {
    var output = document.getElementById(id);
    if (output) {
        output.innerHTML = html;   
        return true;
    } else {
        return false;   
    }
}

function clearDiv(id) {
    var output = document.getElementById(id);
    if (output) {
        output.innerHTML = "";   
        return true;
    } else {
        return false;   
    }
}


function example() {
    var fruit = new Array("apple","banana","guava","papaya","tomato","orange","grape");
    var n;
    var html = "";
    
    for(n = 0; n < fruit.length; n++) {
        html += "<p>" + fruit[n] + " is a fruit, it's yummy!";   
    }
    
    writeToDiv("exampleOutput",html);
}



function codeAlongUpdate() {
    var animals = new Array("cow","pig","cat","horse","dog"); 
    
}

