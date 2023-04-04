function obterRegiaoFiscalAtravesDoCPFInformado(cpfInformado) {
    //edite esta função!
    let digito = cpfInformado.slice(8,9);
    


    let regiaoFiscal = {1 : ['DF', 'GO', 'MT', 'MS', 'TO'], 2: ['AC', 'AP', 'AM', 'PA', 'RO', 'RR',] , 
        3 : ['CE', 'MA', 'PI'], 4 : ['AL', 'PB', 'PE', 'RN'], 5 : ['BA', 'SE'], 6 : 'MG', 7 : ['ES', 'RJ'],
    8 : 'SP', 9 : ['PR', 'SC'], 0 : 'RS'};
    console.log(cpfInformado)
    console.log(digito)
    //----------------------------
    return regiaoFiscal[digito]
}



function tratadorDeCliqueExercicio8() {
    let textCPF = document.getElementById("textCPF")
	let textRegiao = document.getElementById("regiaoFiscal")

    const regiaoFiscal = obterRegiaoFiscalAtravesDoCPFInformado(textCPF.value);
    textRegiao.textContent = "Região fiscal: "+regiaoFiscal
}
