const workInput = document.getElementById("workDuration");
const shortBreakInput = document.getElementById("shortBreakDuration");
const longBreakInput = document.getElementById("longBreakDuration");
const pomodorosBeforeLongInput = document.getElementById("pomodorosBeforeLong");

const sessionType = document.getElementById("sessionType");
const countdown = document.getElementById("countdown");
const cycleDisplay = document.getElementById("cycleDisplay");

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

let timer;
let timeLeft = 0;
let isRunning = false;
let currentCycle = 0;
let currentSession = "work"; // work | short | long

function updateCycleDisplay() {
  const totalCycles = parseInt(pomodorosBeforeLongInput.value);
  let display = "";

  for (let i = 0; i < totalCycles; i++) {
    display += i < currentCycle ? "🔴 " : "⚪ ";
  }

  cycleDisplay.textContent = display.trim();
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60).toString().padStart(2, '0');
  const sec = (seconds % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
}

function setTimer(duration, label) {
  timeLeft = duration * 60;
  sessionType.textContent = label;
  countdown.textContent = formatTime(timeLeft);
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      countdown.textContent = formatTime(timeLeft);
    } else {
      clearInterval(timer);
      isRunning = false;

      // Transition Logic
      if (currentSession === "work") {
        currentCycle++;
        updateCycleDisplay();

        if (currentCycle >= parseInt(pomodorosBeforeLongInput.value)) {
          currentSession = "long";
          setTimer(parseInt(longBreakInput.value), "Long Break");
          currentCycle = 0; // Reset after long break
        } else {
          currentSession = "short";
          setTimer(parseInt(shortBreakInput.value), "Short Break");
        }
      } else {
        currentSession = "work";
        setTimer(parseInt(workInput.value), "Work");
      }

      startTimer(); // Auto-start next session
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  currentCycle = 0;
  currentSession = "work";
  updateCycleDisplay();
  setTimer(parseInt(workInput.value), "Work");
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// Initialize on load
resetTimer();
