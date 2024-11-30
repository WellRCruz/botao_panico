/**
 * Simulador Botão Pânico
 * @author Wellington R. Cruz
 */

const botao = document.getElementById('button')
let som = new Audio("sound/alarme.mp3")
 
botao.addEventListener('mousedown', (event) => {
    event.preventDefault()
    audio();
    //som.play()
})
 
botao.addEventListener('mouseup', (event) => {
    event.preventDefault()
    audios();
    //som.pause()
})
 
 
function audio() {
    som.play()
}
 
function audios() {
    som.pause()
}
 
 
 
botao.addEventListener('touchstart', (event) => {
    event.preventDefault()
    audio();
    ligar()
})
 
botao.addEventListener('touchend', (event) => {
    event.preventDefault()
    audios();
    desligar()
})
 
 
//daq pra frente eu nao sei oq ta rolando
 
//lanterna torch
function inicializarlanterna(){
    // lanterna (pré carregamento)
let stream, track
inicializarLanterna()
 
// Lanterna
// Inicializa o stream e configura o track apenas uma vez
async function inicializarLanterna() {
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
async function desligar() {
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: false }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}
}