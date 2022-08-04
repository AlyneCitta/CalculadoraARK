do{
    var a = Math.floor(Math.random() * 5) + 1;
    var b = Math.floor(Math.random() * 5) + 1;
    var sinal = ["+", "-"][Math.floor(Math.random()*2)];

    // calcular a resposta certa
    var resposta = eval(a + sinal + b)

}while(resposta<0 || resposta>9)

document.getElementById('n1').innerHTML = a
document.getElementById('n2').innerHTML = b
document.getElementById('sinal').innerHTML = sinal

document.onkeyup = function (evento){
    let tecla = Number(evento.key)

    document.getElementById('answer').value = tecla

    setTimeout(function() {
        window.location.reload(1);
    }, 2500);

    if(tecla == eval(a + sinal + b)){
        document.getElementById('p').innerHTML = "Resposta Certa! Agora você tem um Alossauro :D"
        document.getElementById('img3').src = 'https://www.pngkit.com/png/full/154-1541630_allosaurus-kibble-ark-survival-evolved-allosaurus.png'
    } else {
        document.getElementById('p').innerHTML = "Resposta Errada! Você não conseguiu domar o Alossauro :<"
        document.getElementById('img3').src = 'https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/2/26/Mod_Primal_Fear_Alpha_Allosaurus.png/revision/latest?cb=20181020232807'
    }
}