
function whatCanYouDo(age) {
    
    if (age < 5) {
        return "You can't do anything fun!";
    } else if (age < 13) {
        return "You can go to school!";
    } else if (age < 16) {
        return "You are a teenager!";
    } else if (age < 18) {
        return "You can drive";
    } else {
        return "YOU CAN GET DRAFTED!";   
    }
}


function whatCanYouDo(age) {
    
    if (age < 18) {
        return "You can drive";
    } else if (age < 5) {
        return "You can't do anything fun!";
    } else if (age < 13) {
        return "You can go to school!";
    } else if (age < 16) {
        return "You are a teenager!";
    } else {
        return "YOU CAN GET DRAFTED!";   
    }
}

function whatCanYouDo(age,isAFelon) {
    
    if (age < 5) {
        return "You can't do anything fun!";
    } else if (age < 13) {
        return "You can go to school!";
    } else if (age < 16) {
        return "You are a teenager!";
    } else if (age < 18) {
        return "You can drive";
    } else if (!isAFelon) {
        return "You can legally own a gun!";   
    } else {
        return "You cannot shoot things! (legally)";   
    }
}

function whatCanYouDo(age,isAFelon) {
    
    if (age < 0) {
        return "THAT'S NOT RIGHT!";
    } else if ((age >=0) && (age < 5)) {
        return "You can't do anything fun!";
    } else if (age < 13) {
        return "You can go to school!";
    } else if (age < 16) {
        return "You are a teenager!";
    } else if (age < 18) {
        return "You can drive";
    } else if (!isAFelon) {
        return "You can legally own a gun!";   
    } else {
        return "You cannot shoot things! (legally)";   
    }
}

var stuffICanDo = whatCanYouDo(19,true);
