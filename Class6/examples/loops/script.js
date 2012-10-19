function processForm() {
    
}

function determineAverage() {
    
    var max = 5;
    
    var result = "<table><tr><td>X</td>";
    
    for(var j = 0; j < max; j++) {
            result = result + "<td>" + j + "</td>";
    }
        
    result = result + "</tr>";
    
    for(var i = 0; i < max; i++) {
        
        result = result + "<tr><td>" + i + "</td>";
        
        for(var k = 0; k < max; k++) {
            result = result + "<td>" + (k * i) + "</td>";
        }
        
        result = result + "</tr>";
        
    }
    
    result = result + "</table>";
    
    document.getElementById("lab2").innerHTML = result;
}