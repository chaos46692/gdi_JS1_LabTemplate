function favoriteColor(element) {
    
    var color = element.value;
    var exampleContainer = document.getElementById('exampleContainer');
    
    switch(color) {
        case 'red': 
            exampleContainer.innerHTML = "<p>That's so weird.</p>";  
            break;
        case 'orange':
            exampleContainer.innerHTML = "<p>Do you like fruit?</p>"; 
            break;
        default:
            exampleContainer.innerHTML = ""; 
    }
}