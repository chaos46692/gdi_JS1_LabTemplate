
/*
Get a URL parameter from the name
*/
function getURLParameter(paramName) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    var n, valPair;
    
    for( n=0; n < vars.length; n++) {
        valPair = vars[n].split("="); 
        if (decodeURIComponent( valPair[0] ) == paramName ) {
            var decoded = decodeURI( valPair[1] );
            decoded = decoded.replace(/\+/g, ' ');
            console.log('The parameter ' + paramName + ' = ' + valPair[1] );
            return decoded;
        }
    }
    
    console.log('DOH! The parameter ' + paramName + ' not found!');
    return null;
}

/*
    Do the MADLib 
*/
function MADLib() {
    var submitted = getURLParameter('submitted');
    
    if ( submitted === null) { 
        return; 
        document.write('<p>NOT SUBMITTED!!</p>');
    }
    

    
    var answer;
    var retHTML = '';
    

    
    document.write(retHTML);

}