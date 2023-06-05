const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  bodyEl: document.querySelector('.body'),
};

let intervalId = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startRandom() {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      const radnomIndex = randomIntegerFromInterval(0, colors.length - 1);
      console.log(colors[radnomIndex]);
      refs.bodyEl.style.backgroundColor = colors[radnomIndex];
      refs.startBtn.disabled;
    }, 1000);
  }
  refs.startBtn.setAttribute('disabled', '');
}

function stopRandom() {
  clearInterval(intervalId);
  refs.startBtn.removeAttribute('disabled', '');
}

refs.startBtn.addEventListener('click', startRandom);
refs.stopBtn.addEventListener('click', stopRandom);
