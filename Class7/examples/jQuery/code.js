

function useJavascript() {
    var x = document.getElementById('alert');
    x.innerHTML = 'entered with raw javascript';   
}

function usejQuery() {
    var x = $('#alert');
    x.html( 'This was injected by jQuery'); 
}

function classDarker() {
    var x = $(".testClass");
    x.css("background-color","#aaa");
}

function classLighter() {
    var x = $(".testClass");
    x.css("background-color","#FFF");
}
