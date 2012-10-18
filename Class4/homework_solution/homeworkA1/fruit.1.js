/*
    This put your JavaScript in here!
*/

/*
    Get the fruit - only query the DOM once to get the "fruit" input
    once you have it - just return the value 
*/
var fruitField;

/* returns the form field */
function getFruitField() {
    if ((fruitField === null) || (fruitField === undefined)) {
        fruitField = document.getElementById("fruit");
        
        if ((fruitField === null) || (fruitField === undefined)) {
            return undefined;
        }
    }
    
    return fruitField;
    
}

/* returns the form value */
function getFruit() {
    var ff = getFruitField();
    if (ff === undefined) {
        return "I AIN'T GOT NO FRUIT!";
    }
    return ff.value;
    
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
        var ff = getFruitField();
        ff.select();
        return false;
    } else {
        return true;   /* everything's okay - return true (-> let the key go through) */
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
    //var output = document.getElementById("cost-out");
    
    var cost = -1.0;
    var unit = "lb";
    var img = 20;
    var wtf = "";
    
    clearError();
    
    /* fruit comomodity prices from
        http://www.ams.usda.gov/mnreports/fvwretail.pdf
    */
    switch (fruit.toLocaleLowerCase()) {
        case "apple": case "apples":
            cost = 1.79;
            img = 1;
            break;
        case "honey crisp apple": case "honey crisp apples":
            cost = 2.11;
            img = 1;
            break;
        case "orange": case "oranges":
            cost = 3.99;
            img = 9;
            break;
        case "banana": case "bananas":
            cost = 0.52;
            img = 2;
            break;
        case "blueberry": case "blueberries":
            unit = "6 oz package";
            cost = 3.93;
            img = 3;
            break;
        case "kiwi": case "kiwifruit":
            cost = 0.37;
            unit = "each";
            img = 5;
            break;
        case "kiwis": case "kiwifruits":
            img = 5;
            wtf = "<div class='wtf'>THAT'S NOT HOW YOU PLURALIZE KIWI!</div>";
            break;
        case "grapefruit": case "grapefruits":
            cost = 1.07;
            unit = "each";
            img = 4;
            break;
        case "lemon": case "lemons":
            cost = 0.53;
            unit = "each";
            img = 6;
            break;
        case "lime": case "limes":
            cost = 0.29;
            unit = "each";
            img = 7;
            break;
        case "peach": case "peaches":
            cost = 1.76;
            img = 10;
            break;
        case "strawberry": case "strawberries":
            cost = 2.70;
            img = 12;
            break;
        case "mango": case "mangoes":
            cost = 1.29;
            unit = "each";
            img = 8;
            break;
        case "raspberry": case "raspberries":
            cost = 2.80;
            unit = "6 oz package";
            img = 11;
            break;
        case "watermelon": case "watermelons":
            cost = 1.74;
            img = 13;
            break;

/*
        case "": case "s":
            cost = ;
            break;
*/
        
    }
    
    var sCostMsg = "";
    if (wtf === "") {
        if (cost < 0.0) {
            hideCost();
            appendError("I could not find that fruit, sorry!");
            //outputImg.innerHTML = "I could not find that fruit, sorry!";
            //return false;
        } else {
            sCostMsg = "$" + cost.toFixed(2) + " / " + unit;  
            showCost();
        }
        
        
    } else {
        sCostMsg = wtf;
        showCost();
    }
    //output.innerHTML =  s;
    
    writeToDiv("cost-out",sCostMsg);
    setFruitImage(img);
    
    //var bgImg = document.getElementById("fruitCost");
    //if (bgImg) {
        //outputImg.innerHTML = '<img src="' + img + '">';
    //    bgImg.style.backgroundPosition = "0px -" + (img-1) * 300 + "px";
    //}

}

function setFruitImage(nIndex) {
    var bgImg = document.getElementById("fruitCost");
    if (bgImg) {
        bgImg.style.backgroundPosition = "0px -" + (nIndex-1) * 300 + "px";
    }  else {
        appendError("Could not get the fruit image div <em>fruitCost</em>")  ;
    }
}

/* ===================================================================
    These functions allow us to write to / clear divs more
    easily
====================================================================== */
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

/* ===================================================================
    Show / hide a div
====================================================================== */
function showDiv(id) {
    var divToShow = document.getElementById(id);
    if (divToShow) {
        divToShow.style.display = "block";
        return true;
    } else {
        return false;
    }
}


function hideDiv(id) {
    var divToHide = document.getElementById(id);
    if (divToHide) {
        divToHide.style.display = "none";
        return true;
    } else {
        return false;
    }
}

/* ===================================================================
    Show / hide the cost div
====================================================================== */
function showCost() {
    if (!showDiv("cost-tag")) {
        writeToDiv("error","Could no find tag <em>cost-tag</em>");
    }

}

function hideCost() {
    if (!hideDiv("cost-tag")) {
        writeToDiv("error","Could no find tag <em>cost-tag</em>");
    }
}

/* ===================================================================
    Write to the error div
====================================================================== */
function getError() {
    var err = document.getElementById("error");
    if (err) {
        return err.innerHTML;
    } else {
        return "";
    }
}

function appendError(msg) {
      writeToDiv("error",getError() + "<p><strong>" + msg + "</strong><p>"); 
}

function clearError() {
    clearDiv("error");   
}



