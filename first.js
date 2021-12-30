function validatefirst(){
    var fname=document.getElementById("first").value;
    var rel=/^[a-zA-Z]{2,25}$/;

    if(rel.test(fname)){
        document.getElementById("firstprompt").style.color="green";
        document.getElementById("firstprompt").innerHTML="<bold>VALID</bold>";
        return true;
    }
    else{
        document.getElementById("firstprompt").style.color="red";
        document.getElementById("firstprompt").innerHTML="<bold>Enter a name with 2-25 characters</bold>";
        return  false;
    }
}

function validatelast(){
    var lname=document.getElementById("last").value;
    var rel=/^[a-zA-Z]{2,50}$/;

    if(rel.test(lname)){
        document.getElementById("lastprompt").style.color="green";
        document.getElementById("lastprompt").innerHTML="<bold>VALID</bold>";
        return true;
    }
    else{
        document.getElementById("lastprompt").style.color="red";
        document.getElementById("lastprompt").innerHTML="<bold>Enter a name with 2-50 characters</bold>";
        return  false;
    }
}

function validateage(){
    var age=document.getElementById("age").value;
    var rel=/^[0-9]{1,3}$/;

    if(rel.test(age)){
        document.getElementById("ageprompt").style.color="green";
        document.getElementById("ageprompt").innerHTML="<bold>VALID</bold>";
        return true;
    }
    else{
        document.getElementById("ageprompt").style.color="red";
        document.getElementById("ageprompt").innerHTML="<bold>Enter an integer number from 1-100</bold>";
        return  false;
    }
}

function vote(){
    var age=document.getElementById("age").value;
    var fname=document.getElementById("first").value;
    var lname=document.getElementById("last").value;

    if(document.getElementById("r1").checked)
        var r=document.getElementById('r1').value;
    if(document.getElementById("r2").checked)
        var r=document.getElementById('r2').value;


        if(age>=18)
        document.getElementById("output").innerHTML="You, "+fname+" "+lname+" residing in a "+r+" of India are eligible to <strong>VOTE.</strong>";
        else
        document.getElementById("output").innerHTML="You, "+fname+" "+lname+" residing in a "+r+" of India are <strong>NOT</strong> eligible to <strong>VOTE.</strong>";
}