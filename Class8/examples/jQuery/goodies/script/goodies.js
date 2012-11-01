function fadeInExample() {
    $("#foo").fadeIn('slow');
}

function fadeOutExample() {
    $("#foo").fadeOut('slow');
}

function toggleExample() {
    $("#bar").toggle();
}

function slideUpExample() {
    $("#baz").slideUp();
}

function slideDownExample() {
    $("#baz").slideDown();
}

function showExample() {
    $("#qux").show("slow");
}

function hideExample() {
    $("#qux").hide("slow");
}

function appendExample() {
    $(".foo").append("<p id='new'>something new</p>");
}

function removeExample() {
    $("#new").remove();
}

function changeFirstExample() {
    var input = prompt("enter text for new paragraph");
    $(".bar p").first().text(input);
}

function changeMultipleExample() {
    $(".baz p, .qux img, #foo").hide();
}

$(document).ready(function(){
    
    $("#fadeIn").on("click", fadeInExample);
    $("#fadeOut").on("click", fadeOutExample);
    $("#toggle").on("click", toggleExample);
    $("#slideUp").on("click", slideUpExample);
    $("#slideDown").on("click", slideDownExample);
    $("#show").on("click", showExample);
    $("#hide").on("click", hideExample);
    $("#addPWithText").on("click", appendExample);
    $("#removeParagraph").on("click", removeExample);
    $("#changeFirstP").on("click", changeFirstExample);
    $("#changeMultiple").on("click", changeMultipleExample);
});
