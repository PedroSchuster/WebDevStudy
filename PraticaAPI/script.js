function onLoad(){
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome").then(loadUfData);
}

function loadUfData(response){
    response.json().then(loadUfJson);
}

function loadUfJson(list){
    var select = document.getElementById("uf") 
    for (let index = 0; index < list.length; index++) {
        var option = document.createElement('option')
        option.text = list[index].nome;
        option.value = list[index].id;
        select.add(option)
    }
}

function onItemSelected(value){
    if (value != -1){
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + value + "/municipios?orderBy=nome").then(loadCityData);
    }
}

function loadCityData(response){
    response.json().then(loadCityJson);
}

function loadCityJson(list){
    var select = document.getElementById("nomes") 
    for (let index = 0; index < list.length; index++) {
        var option = document.createElement('option')
        option.text = list[index].nome;
        option.value = list[index].id;
        select.add(option)
    }
}