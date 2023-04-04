function convertCelciusToFahrenheit(celcius) {
	//edite esta função
	//note que você já está recebendo o valor em celcius como parâmetro desta função

	return (celcius * 1.8) + 32
}





// -- Não edite abaixo!

function conversaoCtoF() {
	let textCelcius = document.getElementById("celciusText")
	let textFahrenheit = document.getElementById("resultFahrenheit")
	textFahrenheit.textContent = convertCelciusToFahrenheit(textCelcius.value) + 
								 "ºF"
}