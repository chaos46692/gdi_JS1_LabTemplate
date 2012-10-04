

function updateOutput() {
     var elem = document.getElementById('frmMain').elements;
     
    var i;
    var s = '';
    for(i = 0; i < elem.length; i++) {
        var eachElem = elem[i];
        s += '<p>' + eachElem.value + ' </p>';
    }
    
    var divOutput = document.getElementById("exampleOutput");
    if (divOutput !== null) {
        divOutput.innerHTML = s;
    }  
    
     
}