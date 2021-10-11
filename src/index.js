const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let intervalId = null;
const interval = 1000;
const refs = {
  buttonStartEl: document.querySelector('[data-action="start"]'),
  buttonStopEl: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body')
}
const { buttonStartEl, buttonStopEl, body } = refs


buttonStartEl.addEventListener('click', ButtonStart)
buttonStopEl.addEventListener('click', ButtonStop)

function ButtonStart() {
  startInterval()
  makeBtnAvl()
}

function startInterval() {
    intervalId = setInterval(() => {
    setChangeBodyColor()
  }, interval )
}

function ButtonStop() {
  stopInterval()
  if (buttonStartEl.hasAttribute('disabled')) {
    makeBtnAvl()
  }
}

function stopInterval() {
    clearInterval(intervalId)
}

function makeBtnAvl() {
  buttonStartEl.toggleAttribute('disabled')
}

function setChangeBodyColor() {
  body.style.backgroundColor = colors[randomIntegerFromInterval([0], colors.length-1)];
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}