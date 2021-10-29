function validateInput(){
    
    let email=document.getElementById("txtemail").value;
    let pwd=document.getElementById("txtPwd").value;
    let a=document.getElementById("a");
    let b=document.getElementById("b");
    
    if(email.indexOf('@')<=0)
    {
        a.style.display ="block"
        return false;
    }
    else if(pwd.length<6 || pwd.length>12)
    {
            b.style.display ="block"
            return false;
    }
}
function keypress(){
    
    a.style.display = "none";
    b.style.display = "none";
}
