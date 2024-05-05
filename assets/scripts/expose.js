// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // select horn type
  let horn = document.getElementById("horn-select");
  let audio = document.querySelector("section audio");
  horn.addEventListener("change", function () {
    let type = horn.value;
    let img = document.querySelector("section img");

    if (type === "air-horn") {
      img.src = "assets/images/air-horn.svg";
      img.alt = "Air Horn";
      audio.src = "assets/audio/air-horn.mp3";
    }
    else if (type === "car-horn") {
      img.src = "assets/images/car-horn.svg";
      img.alt = "Car Horn";
      audio.src = "assets/audio/car-horn.mp3";
    } 
    else if (type === "party-horn") {
      img.src = "assets/images/party-horn.svg";
      img.alt = "Party Horn";
      audio.src = "assets/audio/party-horn.mp3";
    }   
  });

  // change volume
  let slider = document.getElementById("volume");
  slider.addEventListener("change", function () {
    let vol = slider.value;
    let img = document.querySelector("#volume-controls img");

    if (vol == 0) {
      img.src = "assets/icons/volume-level-0.svg";
      img.alt = "Volume level 0";
    }
    else if (vol < 33) {
      img.src = "assets/icons/volume-level-1.svg";
      img.alt = "Volume level 1";
    }
    else if (vol < 67) {
      img.src = "assets/icons/volume-level-2.svg";
      img.alt = "Volume level 2";
    }
    else {
      img.src = "assets/icons/volume-level-3.svg"
      img.alt = "Volume level 3";
    }
    audio.volume = vol/100;
  });

  // "play sound" button
  let btn = document.querySelector("section button");
  const jsConfetti = new JSConfetti();
  btn.addEventListener("click", function () {
    audio.play();
    if(horn.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });

}