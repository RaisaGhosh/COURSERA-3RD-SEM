function validatename(){
    var fname=document.getElementById("name").value;
    var rel=/^[a-zA-Z" "]{2,100}$/;

    if(rel.test(fname)){
        return true;
    }
    else{
        document.getElementById("name").style.color="red";
        return  false;
    }
}

function validateemail(){
    var fname=document.getElementById("email").value;
    var rel=/^[a-zA-Z0-9@.! #$%&'*+-/=? ^_`{|}~]{8,1000000}$/;

    if(rel.test(fname)){
        return true;
    }
    else{
        document.getElementById("email").style.color="red";
        return  false;
    }
}

function validatephone(){
    var fname=document.getElementById("phone").value;
    var rel=/^[0-9]{10,10}$/;

    if(rel.test(fname)){
        return true;
    }
    else{
        document.getElementById("phone").style.color="red";
        return  false;
    }
}

function validation(){
    var a=document.getElementById("pass").value;
    var b=document.getElementById("pass1").value;

    if(document.getElementById("check").checked){

    if(validatename()==true && validatephone()==true && validateemail()==true && a==b){

        if(document.getElementById("r1").checked || document.getElementById("r2".checked)){
            return true;
    }

    else{
        alert("CHECK THE REQUIRED BOX TO INDICATE IF YOU ARE BELOW OR ABOVE 18");
        return false;
    }

    }

    else{
        if(validatename()==false){
            alert("WRONG NAME FORMAT");
            return false;
        }
        else if(validateemail()==false){
            alert("WRONG EMAIL FORMAT");
            return false;
        }
        else if(validatephone()==false){
            alert("WRONG PHONE NUMBER FORMAT");
            return false;
        }
        else if(a!=b){
            alert("PASSWORDS DON'T MATCH");
            return false;
        }

    }
}
    else{
        alert("CHECK THE PRIVACY POLICY BOX");
        return false;
    }
}
