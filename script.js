let timerTime = document.querySelector('.time')
let start = document.querySelector('.start-btn')
let inputTime = document.querySelector('.input')

let time = 25 * 60


function calculateTime() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  timerTime.textContent = `Time left: ${minutes}:${seconds}`;
}
calculateTime()

let timerId = null
start.addEventListener('click', function () {
  if (timerId !== null) return;
  time = inputTime.value *60 || time

  timerId = setInterval(function () {
    if (time > 0) {
      time--;
      calculateTime();
      music()
    } else {
      clearInterval(timerId);
      timerId = null;
    }
  }, 1000);
});

let pause = document.querySelector('.pause-btn')
pause.addEventListener('click', function () {
  clearInterval(timerId);
  timerId = null;
});
let reset = document.querySelector('.reset-btn')
reset.addEventListener('click', function () {
  clearInterval(timerId);
  timerId = null;
  time = inputTime.value *60 || 25*60
  calculateTime();
});
let audio = document.querySelector('.audio')
function music() {
  if (time === 0) {
    audio.play()
  }
}
music()