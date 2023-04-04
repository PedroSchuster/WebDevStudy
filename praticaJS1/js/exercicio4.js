function intervalo(){

    let valor = window.prompt();

    if (30 <= valor && valor <= 50){
        window.alert("O numero esta no intervalo de [30,50]");
    }
    else if (60 <= valor && valor <= 100){
        window.alert("O numero esta no intervalo de [60,100]");
    }
    else{
        window.alert("O numero não esta em nenhum intervalor");
    }
}