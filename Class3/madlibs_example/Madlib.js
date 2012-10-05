
function validate(elementToBeValidated){
    var errorCount = document.getElementById("errorCount");
    var intCount = parseInt(errorCount.innerHTML);
    if(elementToBeValidated.value ===""){
        if(elementToBeValidated.className !== "error"){
            errorCount.innerHTML = intCount + 1;
        }
        document.getElementById("errorText").setAttribute("class","show");
        elementToBeValidated.setAttribute("class","error");
        
       
    }else{
        if(elementToBeValidated.className === "error"){
            intCount -=1;
        }
        if(intCount == 0){
            document.getElementById("errorText").setAttribute("class","hidden");
        }
        elementToBeValidated.setAttribute("class","");
        errorCount.innerHTML = intCount;
        
    }
}

function MadLib(){
    if(document.getElementById("errorText").className === "hidden"){
    var madLibsText = new String();
    
                madLibsText = "<p style=\"text-align:justify;letter-spacing:1px;line-height:2;\">William Shakespeare is regarded by scholars and <span class='blank'>{0}</span> "
                madLibsText +="alike as the greatest playwrite and <span class='blank'>{1}</span> ever to put "
                madLibsText +="pen to <span class='blank'>{2}</span>. &nbsp;Although he wrote in his native "
                madLibsText +="<span class='blank'>{3}</span>, Shakespeare has been translated into Zwolf(ter) "
                madLibsText +="different <span class='blank'>{4}</span> and his plays and poems are <span class='blank'>{5}</span> "
                madLibsText +="read and performed everywhere in the world. &nbsp;Hamlet's sililoquy -"
                madLibsText +="which begins \"To be or not to be, that is the <span class='blank'>{6}</span>,\"- "
                madLibsText +="has been delivered on stage by more <span class='blank'>{7}</span> actors "
                madLibsText +="than any other <span class='blank'>{8}</span> <span class='blank'>{9}</span> ever written. "
                madLibsText +="Among Shakespeare's greatest plays are <i>Hamlet, Romeo and Juliet, "
                madLibsText +="The <span class='blank'>{10}</span> of Venice, King <span class='blank'>{11}</span>, "
                madLibsText +="A Midsummer Night's <span class='blank'>{12}</span>,</i>and <i>The Taming of "
                madLibsText +="the <span class='blank'>{13}</span>.</i> &nbsp;We could go on, but we must leave. &nbsp; As Romeo "
                madLibsText +="said to Juliet, \"Parting is such <span class='blank'>{14}</span> sorrow.\"</p>"
                
                madLibsText = madLibsText.format(
                document.getElementById("noun0").value,
                document.getElementById("noun1").value,
                document.getElementById("noun2").value, 
                document.getElementById("noun3").value, 
                document.getElementById("noun4").value, 
                document.getElementById("adverb0").value, 
                document.getElementById("noun5").value, 
                document.getElementById("adjective0").value, 
                document.getElementById("adjective1").value, 
                document.getElementById("noun6").value, 
                document.getElementById("noun7").value, 
                document.getElementById("noun8").value, 
                document.getElementById("noun9").value, 
                document.getElementById("noun10").value, 
                document.getElementById("adjective2").value);

            document.getElementById('madlibs').innerHTML=madLibsText;
    } else {
        alert("you must fix your errors before we can continue.");
    }
}

function MadLib(){
    if(document.getElementById("errorText").className === "hidden"){
    var madLibsText = new String();
    
                madLibsText = "<p style=\"text-align:justify;letter-spacing:1px;line-height:2;\">William Shakespeare is regarded by scholars and <span class='blank'>{0}</span> "
                madLibsText +="alike as the greatest playwrite and <span class='blank'>{1}</span> ever to put "
                madLibsText +="pen to <span class='blank'>{2}</span>. &nbsp;Although he wrote in his native "
                madLibsText +="<span class='blank'>{3}</span>, Shakespeare has been translated into Zwolf(ter) "
                madLibsText +="different <span class='blank'>{4}</span> and his plays and poems are <span class='blank'>{5}</span> "
                madLibsText +="read and performed everywhere in the world. &nbsp;Hamlet's sililoquy -"
                madLibsText +="which begins \"To be or not to be, that is the <span class='blank'>{6}</span>,\"- "
                madLibsText +="has been delivered on stage by more <span class='blank'>{7}</span> actors "
                madLibsText +="than any other <span class='blank'>{8}</span> <span class='blank'>{9}</span> ever written. "
                madLibsText +="Among Shakespeare's greatest plays are <i>Hamlet, Romeo and Juliet, "
                madLibsText +="The <span class='blank'>{10}</span> of Venice, King <span class='blank'>{11}</span>, "
                madLibsText +="A Midsummer Night's <span class='blank'>{12}</span>,</i>and <i>The Taming of "
                madLibsText +="the <span class='blank'>{13}</span>.</i> &nbsp;We could go on, but we must leave. &nbsp; As Romeo "
                madLibsText +="said to Juliet, \"Parting is such <span class='blank'>{14}</span> sorrow.\"</p>"
                
                madLibsText = madLibsText.format(
                document.getElementById("noun0").value,
                document.getElementById("noun1").value,
                document.getElementById("noun2").value, 
                document.getElementById("noun3").value, 
                document.getElementById("noun4").value, 
                document.getElementById("adverb0").value, 
                document.getElementById("noun5").value, 
                document.getElementById("adjective0").value, 
                document.getElementById("adjective1").value, 
                document.getElementById("noun6").value, 
                document.getElementById("noun7").value, 
                document.getElementById("noun8").value, 
                document.getElementById("noun9").value, 
                document.getElementById("noun10").value, 
                document.getElementById("adjective2").value);

            document.getElementById('madlibs').innerHTML=madLibsText;
    } else {
        alert("you must fix your errors before we can continue.");
    }
}