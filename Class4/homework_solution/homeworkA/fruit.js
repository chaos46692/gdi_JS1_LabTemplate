/*
    This put your JavaScript in here!
*/

/*
    Get the fruit - only query the DOM once to get the "fruit" input
    once you have it - just return the value 
*/
var fruitField;

function getFruit() {
    if ((fruitField === null) || (fruitField === undefined)) {
        fruitField = document.getElementById("fruit");
        
        if (fruitField === null) {
            return "I AIN'T GOT NO FRUIT!";
        }
    }
    
    return fruitField.value;
    
}

/*
    Hook the return key in the field so that hitting "enter" 
    doesn't submit the form but insted updates the output
*/
function checkEnter(e){
    e = e || event; /* e is the event that's passed from onkeypress */
    
    /*
          This part is just getting the numerical
          representation of which key was pressed             13 is the key code
                                                              for 'return'      */
    if ( (e.keyCode || event.which || event.charCode || 0) == 13 ) {
        /* they pressed return - update the field
           and return false which prevents the 
           form from submitting */
        updateCost();
        return false;
    } else {
        return true;   /* everything's okay - return true (= let the key go through */
    }
    
    /* check out more key codes here:
        http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
    */
}

function update(fld) {
       //validate(fruitField);
       return false;
    
}

function updateCost() {
    var fruit = getFruit();  // fruitField.value.toLowerCase();
    var output = document.getElementById("cost-out");
    var outputImg = document.getElementById("fruit-img");
    var cost = -1.0;
    var unit = "lb";
    var img = "";
    var wtf = "";
    
    /* fruit comomodity prices from
        http://www.ams.usda.gov/mnreports/fvwretail.pdf
    */
    switch (fruit.toLocaleLowerCase()) {
        case "apple": case "apples":
            cost = 1.79;
            img = "./img/apple.jpg";
            break;
        case "honey crisp apple": case "honey crisp apples":
            cost = 2.11;
            img = "./img/apple.jpg";
            break;
        case "orange": case "oranges":
            cost = 3.99;
            img = "./img/orange.jpg";
            break;
        case "banana": case "bananas":
            cost = 0.52;
            img = "./img/banana.jpg";
            break;
        case "blueberry": case "blueberries":
            unit = "6 oz package";
            cost = 3.93;
            img = "./img/blueberry.jpg";
            break;
        case "kiwi": case "kiwifruit":
            cost = 0.37;
            unit = "each";
            img = "./img/kiwi.jpg";
            break;
        case "kiwis": case "kiwifruits":
            wtf = "THAT'S NOT HOW YOU PLURALIZE KIWI!";
            break;
        case "grapefruit": case "grapefruits":
            cost = 1.07;
            unit = "each";
            img = "./img/grapefruit.jpg";
            break;
        case "lemon": case "lemons":
            cost = 0.53;
            unit = "each";
            img = "./img/lemon.jpg";
            break;
        case "lime": case "limes":
            cost = 0.29;
            unit = "each";
            img = "./img/lime.jpg";
            break;
        case "peach": case "peaches":
            cost = 1.76;
            img = "./img/peach.jpg";
            break;
        case "strawberry": case "strawberries":
            cost = 2.70;
            img = "./img/strawberry.jpg";
            break;
        case "mango": case "mangoes":
            cost = 1.29;
            unit = "each";
            img = "./img/mango.jpg";
            break;
        case "raspberry": case "raspberries":
            cost = 2.80;
            unit = "6 oz package";
            img = "./img/raspberry.jpg";
            break;
        case "watermelon": case "watermelons":
            cost = 1.74;
            img = "./img/watermelon.jpg";
            break;

/*
        case "": case "s":
            cost = ;
            break;
            */
        
    }
    if (output) {
        var s = "";
        if (wtf === "") {
            if (cost < 0.0) {
                hideCost();
                outputImg.innerHTML = "I could not find that fruit, sorry!";
                return false;
            } else {
                s = "$" + cost.toFixed(2) + " / " + unit;  
            }
            
            showCost();
        } else {
            hideCost();
            s = wtf;
        }
        output.innerHTML =  s;
        
        if (outputImg) {
            outputImg.innerHTML = '<img src="' + img + '">';
        }
    }    

}

function showCost() {
    var cost = document.getElementById("cost-tag");
    if (cost) {
        cost.style.display = "block";   
    }
}

function hideCost() {
    var cost = document.getElementById("cost-tag");
    if (cost) {
        cost.style.display = "none";
    }
}



