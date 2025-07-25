let time = 25 * 60;
let timer;
let isRunning = false;

const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  timerEl.textContent = `${minutes}:${seconds}`;

  // Add animation class
  timerEl.classList.add('animate');
  setTimeout(() => timerEl.classList.remove('animate'), 200);
}


function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (time <= 0) {
      clearInterval(timer);
      new Notification("Pomodoro Finished!", { body: "Time for a break 🍃" });
      isRunning = false;
    } else {
      time--;
      updateDisplay();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  pauseTimer();
  time = 25 * 60;
  updateDisplay();
}

startBtn.onclick = startTimer;
pauseBtn.onclick = pauseTimer;
resetBtn.onclick = resetTimer;

updateDisplay();
