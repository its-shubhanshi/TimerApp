"use strict";
let hour = document.querySelector("#hour");
let minute = document.querySelector("#min");
let second = document.querySelector("#sec");
let start = document.querySelector("#start");
let reset = document.querySelector("#reset");
let heading = document.querySelector("h1");
let audio = new Audio("wind.mp3");
let isPlaying = false;
var total = 0;
let interval = null;

let reloadingPage = () => {
  function reloads() {
    window.location.reload();
  }
  setInterval(reloads, 1000);
};

function totalValue() {
  total =
    Number(hour.value) * 3600 +
    Number(minute.value) * 60 +
    Number(second.value);
}

let timer = () => {
  totalValue();
  total = total - 1;

  if (total >= 0) {
    let hr = Math.floor(total / 3600);
    let mt = Math.floor(total / 60 - hr * 60);
    let sc = Math.floor(total - (hr * 3600 + mt * 60));
    hour.value = hr;
    minute.value = mt;
    second.value = sc;
    isPlaying = true;
    audio.play();
  } else {
    heading.innerText = "Time Over !!";
    audio.pause();
    reloadingPage();
  }
};
start.addEventListener("click", () => {
  if (minute.value > 59 || second.value > 59) {
    alert("Please enter a valid number");
    reloadingPage();
  } else {
    clearInterval(interval);
    setInterval(timer, 1000);
  }
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  hour.value = 0;
  minute.value = 0;
  second.value = 0;
});
