function checkSubmit() {
    var emptyCt = 0;
    var errorCt = 0;
    var bEach = false;
    
    $("input[type='text']").each(function() {
        bEach = ( (this.value === undefined) || (this.value === "") );
        emptyCt += bEach ? 1 : 0;
        errorCt += (this.className == "error") ? 1 : 0;
    }); 
    
    var enable = (emptyCt < 1);
    
    var btn = $('#process'); 
    if (btn) {
        if (enable) {
            btn.prop('disabled', false);
            $("#errorText").css("display","none");
        } else {
            btn.prop('disabled', true);
            //$("#errorText").css("display","block");
        }
    }
    
    if ( errorCt === 0 ) {      //$("input[type='text']").hasClass("error")
           $("#errorText").css("display","none");
           //return emptyCt;
    } else {
            $("#errorText").css("display","block");
    }
    
    return emptyCt;

    
}


function validate(elementToBeValidated){
    
    
    var errorCount = document.getElementById("errorCount");
    var intCount =  parseInt(errorCount.innerHTML);
    if(elementToBeValidated.value ===""){
        if(elementToBeValidated.className !== "error"){
            errorCount.innerHTML = intCount + 1;
        }
        //document.getElementById("errorText").setAttribute("class","show");
        $("#errorText").css("display","block");
        elementToBeValidated.setAttribute("class","error");
        
       
    }else{
        if(elementToBeValidated.className === "error"){
            intCount -=1;
        }
        elementToBeValidated.setAttribute("class","");
        errorCount.innerHTML = intCount;
        
    }
    
	checkSubmit();
    
    
    
}

function valueFun(x) {
    return x.value;    
}

function getMadLibInput() {
    var frm = document.getElementById('madlibsForm'); 
    
    if (frm) {
        /*
        
        var n;
        for(n = 0; n < rtn.length ; n++) {
            rtn[n] = rtn[n].value;   
        }
        */
        var elem = frm.elements;
        var rtn = [];
        var n = 0;
        while (n < elem.length ) {
            rtn[n] = elem[n].value;
            n++;
        }
        //rtn.map(valueFun);
        return rtn;
    }
}

function MadLib(){
    if(document.getElementById("errorText").className === "hidden"){
    var madLibsText = '';
    
    var madLibsData = new Array("<p class=\"libs\">William Shakespeare is regarded by scholars and  "
    ," alike as the greatest playwrite and "
    ," ever to put pen to   "
    ,". &nbsp;Although he wrote in his native "
    ,", Shakespeare has been translated into Zwolf(ter) different "
    ," and his plays and poems are   "
    ," read and performed everywhere in the world. &nbsp;Hamlet's sililoquy - which begins \"To be or not to be, that is the"
    ,",\"- has been delivered on stage by more"
    ," actors than any other "
    ," ever written. Among Shakespeare's greatest plays are <i>Hamlet, Romeo and Juliet, The "
    ," of Venice, King  "
    ,", A Midsummer Night's "
    ,", </i>and <i>The Taming of the "
    ,".</i> &nbsp;We could go on, but we must leave. &nbsp; As Romeo said to Juliet, \"Parting is such"
    ," sorrow.\"</p>");
    
    var mlVal = getMadLibInput();
    
    
    var n = 0;
    while (n < madLibsData.length) {
        madLibsText += madLibsData[n] + "<span class='blank'>" + mlVal[n] + "</span>";
        n++;
    }
     
     $('div#output').html(madLibsText );
     $('div#output').css('display','block');
     $('div#madlibs').css('display','none');


            //document.getElementById('output').innerHTML=madLibsText;
    } else {
        alert("you must fix your errors before we can continue.");
    }
}