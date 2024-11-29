/**
 * Simulador Botão Pânico
 * @author Wellington R. Cruz
 */

// variáveis
const botao_panico = document.getElementById('panico_botao');
let som = new Audio("sound/alarme.mp3")

// Iniciar o som quando o botão for pressionado
botao_panico.addEventListener('mousedown', function() {
    som.play() // Iniciar Audio

});

// Parar o som quando o botão for solto
botao_panico.addEventListener('mouseup', function() {
    som.pause() // Para ou pausa o audio
});