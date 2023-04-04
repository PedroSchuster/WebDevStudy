function haOnzeDigitos(cpf) {
    return cpf.split("").length == 11
}

function todosOsOnzeDigitosSaoNumeros(cpf) {
    //---- edite aqui para a validação do exercício 9b

    return !isNaN(cpf)
}

function osOnzeNumerosSaoDiferentes(cpf) {
    //---- edite aqui para a validação do exercício 9c
    for (let index = 0; index < cpf.length - 1; index++) {
        if (cpf[index] != cpf[index + 1]){
            break
        }

        if(index + 2 == cpf.length){
            return false
        }
    }

    return true
}

function oPrimeiroDigitoVerificadorEhValido(cpf) {
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
    return soma == cpf[9]
}

function oSegundoDigitoVerificadorEhValido(cpf) {
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
    return soma == cpf[10]
}





//------------------- Não edite abaixo ----------------------------
function validarCPF(validacao, cpf) {
    switch (validacao) {
        case "onzeDigitos": return haOnzeDigitos(cpf)
        case "onzeSaoNumeros": return todosOsOnzeDigitosSaoNumeros(cpf) && validarCPF("onzeDigitos", cpf)
        case "naoSaoTodosIguais": return osOnzeNumerosSaoDiferentes(cpf) && validarCPF("onzeSaoNumeros", cpf)
        case "verificador10": return oPrimeiroDigitoVerificadorEhValido(cpf) && validarCPF("naoSaoTodosIguais", cpf)
        case "verificador11": return oSegundoDigitoVerificadorEhValido(cpf) && validarCPF("verificador10", cpf)

        default:
            console.error(validacao+" é um botão desconhecido...")
            return false
    }
}


function tratadorDeCliqueExercicio9(nomeDoBotao) {
    const cpf = document.getElementById("textCPF").value

    const validacao = (nomeDoBotao === "validade") ? "verificador11": nomeDoBotao
    const valido = validarCPF(validacao, cpf)
    const validoString = valido ? "valido": "inválido"
    const validadeMensagem = "O CPF informado ("+cpf+") é "+ validoString
    console.log(validadeMensagem)

    if (nomeDoBotao !== "validade") {
        let divResultado = document.getElementById(validacao);
        divResultado.textContent = validoString
        divResultado.setAttribute("class", valido ? "divValidadeValido": "divValidadeInvalido")    
    } else {
        window.alert(validadeMensagem)
    }

    
}