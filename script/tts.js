const form = document.getElementById('textToSpeechForm');
const textInput = document.getElementById('text');
const outputDiv = document.getElementById('output');
const synth = window.speechSynthesis;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const text = textInput.value;

    if (synth.speaking) {
        synth.cancel(); 
    }

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.addEventListener('end', () => {
        console.log('Speech synthesis finished.');
    });

    utterance.addEventListener('error', (err) => {
        console.error('Speech synthesis error:', err);
    });

    synth.speak(utterance);

   
});