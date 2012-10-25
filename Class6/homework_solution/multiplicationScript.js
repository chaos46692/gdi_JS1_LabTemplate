/*
    This put your JavaScript in here!
*/

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

function getHeaderRow(count) {
    var col;
    var html = '<tr class="colIndex"><th>&times;</th>';
    for(col = 1; col <= count; col++) {
        html += '<th>' + col + '</th>';
    }  
    html += '</tr>';
    return html;
}

function getMultRow(n,count) {
    var col;
    var html = '<tr><td class="rowIndex">' + n + '</td>';
    for(col = 1; col <= count; col++) {
        html += '<td>' + col * n + '</td>';
    }  
    html += '</tr>';
    return html;      
}

function getMultTable(dim) {
    var row;
    var html = '<table class="multiplicationTable">';
    
    html += getHeaderRow(dim);

    
    for(row = 1; row <= dim; row++) {
        html += getMultRow(row,dim);
    }
    
    html += '</table>';
    return html;
    
}

function createMultTable() {
    var html = getMultTable(10);
    clearDiv('table_container');
    writeToDiv('table_container',html);
}

/*
window.onload = function() {
    createMultTable();   
};

*/



