
// 1
/*
function calculadora(a, b , f){
    return f(a,b)
}

function soma(a,b){
    return console.log(a + b)
}

function subtrai(a,b){
    return console.log(a - b)
}

var callback = function() {
    console.log("Estou na função de callback");
}  
*/

// 2  
/*console.log("Iniciei")
setTimeout(callback, 5000);
console.log("Estou após o setTimeout")*/

// 3
/*
function consoleAtrasado(mensagem, atraso) {
    setTimeout(console.log(mensagem), atraso)
}
console.log("Olá")
consoleAtrasado("Teste", 10000)
console.log("Bye")
*/

// 4
/*
function consoleAtrasado(mensagem, atraso) {
    setTimeout(()=>{console.log(mensagem)}, atraso)
}
console.log("Olá")
consoleAtrasado("Teste", 1000)
console.log("Bye")
*/

// 7
/*
const resolverEm1s = new Promise(resolve => setTimeout(resolve, 1000));
for (let i = 0; i < 10; i++) {
    resolverEm1s.then(() => console.log("oi"))            
}*/

// 10
let i=0
let max = 10
async function p() {
    for (let i = 0; i < max; i++){
        await new Promise(resolve=>setTimeout(resolve,1000))
        console.log(i)
    }
    return p
}        
p()