const btnStartRecord = document.getElementById('btnStartRecord');
const btnStopRecord = document.getElementById('btnStopRecord');
const texto = document.getElementById('texto');
const clearBtn = document.getElementById('btnClear')

let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-GT';
recognition.continuous = true;
recognition.interimResults = false;

recognition.onresult = (event) => {
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    texto.value += frase;
}

btnStartRecord.addEventListener('click', () =>{
    recognition.start();
});

btnStopRecord.addEventListener('click', () =>{
    recognition.stop()
});
clearBtn.addEventListener('click', () =>{
    document.getElementById("texto").value = "";
});
