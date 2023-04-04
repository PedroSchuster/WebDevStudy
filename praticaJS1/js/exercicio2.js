function tratadorDeCliqueExercicio2() {
    // atualize esta função para
    // exibir um alerta com a hora 
    // atual no seguinte formato:
    // Horário: 8 PM : 40m : 28s
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    window.alert(h + "PM : " + m + "m : " + s + "s");
    console.log('adicionar código na função tratadorDeCliqueExercicio2() em ./js/exercicio2.js')
}