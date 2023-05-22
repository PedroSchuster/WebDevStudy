var textoEmBrancoValido = false;
var emailValido = false;
var cpfValido = false;
var senhaValida = false;


function NotImplementedError(message = "") {
    this.name = "NotImplementedError";
    this.message = message;
  }

  NotImplementedError.prototype = new Error();;
  

class Cpf{
    constructor (valor){
        this._valor = valor;
    }

    #haOnzeDigitos = function(cpf) {
        if ( cpf.split("").length == 11){
            return true;
        }
        throw new NotImplementedError("Erro! CPF tem que ter 11 numeros");

    }
    
    #todosOsOnzeDigitosSaoNumeros(cpf) {
        //---- edite aqui para a validação do exercício 9b
        if (!isNaN(cpf)){
            return true;
        }
        throw new NotImplementedError("Erro! CPF possui valores não numericos");

    }
    
    #osOnzeNumerosSaoDiferentes(cpf) {
        //---- edite aqui para a validação do exercício 9c
        for (let index = 0; index < cpf.length - 1; index++) {
            if (cpf[index] != cpf[index + 1]){
                break
            }
    
            if(index + 2 == cpf.length){
                throw new NotImplementedError("Erro! CPF possui numeros iguais!");
            }
        }
    
        return true
    }
    
    #oPrimeiroDigitoVerificadorEhValido(cpf) {
        //---- edite aqui para a validação do exercício 9d
        let soma = 0;
        for (let index = 0; index < cpf.length - 2; index++) {
            soma += cpf[index] * (cpf.length - 1 - index);
        }
        soma *= 10;
        soma %= 11;
    
        if (soma == 10){
            soma = 0;
        }
        if (soma == cpf[9]){
            return true;
        }
        throw new NotImplementedError("Erro no primeiro digito verificador");

    }
    
    #oSegundoDigitoVerificadorEhValido(cpf) {
        //---- edite aqui para a validação do exercício 9e
        let soma = 0;
        for (let index = 0; index < cpf.length - 1; index++) {
            soma += cpf[index] * (cpf.length - index);
        }
        soma *= 10;
        soma %= 11;
    
        if (soma == 10){
            soma = 0;
        }
        if (soma == cpf[10]){
            return true;
        }
        throw new NotImplementedError("Erro no segundo digito verificador");
    }

    validateCpf(){
        try{
            this.#haOnzeDigitos(this._valor);
            this.#todosOsOnzeDigitosSaoNumeros(this._valor);
            this.#osOnzeNumerosSaoDiferentes(this._valor);
            this.#oPrimeiroDigitoVerificadorEhValido(this._valor);
            this.#oSegundoDigitoVerificadorEhValido(this._valor);
            return true;
        }
        catch (exception){
            return exception;
        }
    }
}

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
    document.getElementById("nova-conta").children[1].reset();
    document.getElementById("areaBotaoConta").children[0].disabled = true;

    document.getElementById("login-body").style.display = "none";
    document.getElementById("divHome").style.display = "none";
    document.getElementById("nova-conta").style.display = "block";
}

function validaTextoEmBranco(obj, id){
    let msg = document.getElementById(id);

    if (!obj.value){
        msg.style.display = "block";
        msg.style.color = "red";
        msg.textContent = "Campo obrigatório!";
        textoEmBrancoValido = false;
    }
    else{
        msg.style.display = "block";
        msg.style.color = "green";
        msg.textContent = "Válido!";
        textoEmBrancoValido = true;
    }
    validarForm()
}

function validaEmail(obj, id){
    let msg = document.getElementById(id);
    if (!obj.value){
        msg.style.display = "block";
        msg.style.color = "red";
        msg.textContent = "Campo obrigatório!"
        emailValido = false;
    }
    else if (obj.value.split("@").length - 1 != 1){
        msg.style.display = "block";
        msg.style.color = "red";
        msg.textContent = "Campo invalido!"
        emailValido = false;
    }
    else{
        msg.style.display = "block";
        msg.style.color = "green";
        msg.textContent = "Válido!";
        emailValido = true;
    }
    validarForm()
}

function validaSenha(obj, id){
    let msg = document.getElementById(id);
    if (!obj.value){
        msg.style.display = "block";
        msg.style.color = "red";
        msg.textContent = "Campo obrigatório!"
        senhaValida = false;
    }
    else if (obj.value !== document.getElementById("senha").value){
        msg.style.display = "block";
        msg.style.color = "red";
        msg.textContent = "Senhas estão diferentes!"
        senhaValida = false;
    }
    else{
        msg.style.display = "block";
        msg.style.color = "green";
        msg.textContent = "Válido!";
        senhaValida = true;
    }
    validarForm()
}

function validarCPF(obj, id){
    let msg = document.getElementById(id);
    var cpf = new Cpf(obj.value);
    var validacao = cpf.validateCpf();
    if (validacao === true){
        msg.style.display = "block";
        msg.style.color = "green";
        msg.textContent = "Válido!";
        cpfValido = true;
    }
    else{
        msg.style.display = "block";
        msg.style.color = "red";
        msg.textContent = validacao.message;
        cpfValido = false;
    }
    validarForm()
}

function validarCep(obj, id){
    let msg = document.getElementById(id);
    if (obj.value.length == 8){
        msg.style.display = "block";
        msg.style.color = "green";
        msg.textContent = "Válido!";
        return completarCampos(obj.value)
    }
    msg.style.display = "block";
    msg.style.color = "red";
    msg.textContent = "Cep não é válido";
}

function completarCampos(cep){
    fetch("http://viacep.com.br/ws/"+ cep + "/json/").then(loadData);
}

function loadData(response){
    response.json().then(loadJson);
}

function loadJson(info){
    console.log(info)
    document.getElementById("loug").value = info["logradouro"]
    document.getElementById("bairro").value = info["bairro"]
    document.getElementById("cidade").value = info["localidade"]
    document.getElementById("estado").value = info["uf"]
}

function validarForm(){
    if (textoEmBrancoValido && emailValido && senhaValida && cpfValido){
        document.getElementById("areaBotaoConta").children[0].disabled = false;
    }
    else{
        document.getElementById("areaBotaoConta").children[0].disabled = true;
    }
}