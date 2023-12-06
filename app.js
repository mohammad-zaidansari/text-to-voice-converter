let speech = new SpeechSynthesisUtterance();

let btn = document.querySelector("button");

let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.value];
})

btn.addEventListener("click", () => {
    let text = document.querySelector("textarea");
    speech.text = text.value;
    window.speechSynthesis.speak(speech);
});



