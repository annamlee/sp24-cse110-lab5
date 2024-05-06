// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");

  // load available voices
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // "Press to Talk" button
  const btn = document.querySelector("section button");
  const text = document.getElementById("text-to-speak");
  const img = document.querySelector("section img");

  btn.addEventListener("click", function () {
    const speak = new SpeechSynthesisUtterance(text.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        speak.voice = voices[i];
      }
    }
    synth.speak(speak);

    speak.onstart = function () {
      img.src = "assets/images/smiling-open.png";
      img.alt = "Open smiling face";
    }

    speak.onend = function () {
      img.src = "assets/images/smiling.png";
      img.alt = "Smiling face";
    }
  });

}