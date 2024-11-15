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
    ligar()
});

// Parar o som quando o botão for solto
botao_panico.addEventListener('mouseup', function() {
    som.pause() // Para ou pausa o audio
    desligar()
});

//lanter (torch)....async (multi processamento) function (variavel)
async function inicializarLanterna(){
    //try-catch (tratamento de exceções)
    try {
        // Solicita acesso à câmera traseira sem exibir o vídeo
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" }
        })
       
        // Obtém o track do vídeo para controlar a lanterna
        track = stream.getVideoTracks()[0]
       
        // Verifica se o dispositivo suporta o uso da lanterna
        const capabilities = track.getCapabilities()
        if (!capabilities.torch) {
            console.log("Lanterna não suportada no dispositivo.")
            return
        }
    } catch (error) {
        console.error(`Erro ao inicializar a lanterna: ${error}`)
    }
}
 
// Função para ligar a lanterna (torch)
async function ligar() {
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: true }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
 
}
 // Função para desligar a lanterna sem parar o stream
async function desligar() {
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: false }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}