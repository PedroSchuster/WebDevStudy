function mostrarApenasHome(){
    document.getElementById("login-body").style.display = "none";
    document.getElementById("nova-conta").style.display = "none";
    document.getElementById("divHome").style.display = "block";

}

function mostrarApenasLogin(){
    document.getElementById("login-body").children[1].reset();
    document.getElementById("botaoLogin").disabled = true;

    document.getElementById("login-body").style.display = "block";
    document.getElementById("divHome").style.display = "none";
    document.getElementById("nova-conta").style.display = "none";

}

function updateInput(){
    if (document.getElementById("login-email").value.split("@").length - 1 == 1 && document.getElementById("login-password").value){
        document.getElementById("botaoLogin").disabled = false;
    }
    else{
        document.getElementById("botaoLogin").disabled = true;
    }
}


function mostrarApenasConta(){
    document.getElementById("login-body").style.display = "none";
    document.getElementById("divHome").style.display = "none";
    document.getElementById("nova-conta").style.display = "block";
}

function validaTextoEmBranco(){

}