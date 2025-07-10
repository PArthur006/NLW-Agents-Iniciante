const apiKeyInput = document.getElementById('apiKey')
const gameSelect = document.getElementById('gameSelect')
const questionInput = document.getElementById('questionInput')
const askButton = document.getElementById('askButton')
const form = document.getElementById('aiResponse')
const aiResponse = document.getElementById('aiResponse')

const enviarFormulario = (event) => {
    event.preventDefault()
    
}

form.addEventListener('submit', enviarFormulario)