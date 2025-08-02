// let workTime = 25 * 60;
//     let shortBreakTime = 5 * 60;
//     let longBreakTime = 15 * 60;
//     let pomodoroRounds = 4;

//     let currentRound = 1;
//     let cycle = 0;
//     let isRunning = false;
//     let timer;
//     let timeLeft = workTime;
//     let session = "Work"; // or "Short Break" or "Long Break"

//     const timerEl = document.getElementById('timer');
//     const statusEl = document.getElementById('sessionStatus');
//     const cycleDisplay = document.getElementById('cycleDisplay');

//     function updateSettings() {
//       workTime = parseInt(document.getElementById('workDuration').value) * 60;
//       shortBreakTime = parseInt(document.getElementById('shortBreak').value) * 60;
//       longBreakTime = parseInt(document.getElementById('longBreak').value) * 60;
//       pomodoroRounds = parseInt(document.getElementById('rounds').value);

//       timeLeft = workTime;
//       updateDisplay();
//       updateCycleDisplay();
//     }

//     document.querySelectorAll('.settings input').forEach(input => {
//       input.addEventListener('change', updateSettings);
//     });

//     function updateDisplay() {
//       const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
//       const seconds = (timeLeft % 60).toString().padStart(2, '0');
//       timerEl.textContent = `${minutes}:${seconds}`;
//       statusEl.textContent = session;
//     }

//     function updateCycleDisplay() {
//       let cycles = '';
//       for (let i = 0; i < pomodoroRounds; i++) {
//         cycles += i < cycle ? '🔴 ' : '⚪ ';
//       }
//       cycleDisplay.textContent = cycles.trim();
//     }

//     function startTimer() {
//       if (!isRunning) {
//         isRunning = true;
//         timer = setInterval(() => {
//           timeLeft--;
//           updateDisplay();

//           if (timeLeft <= 0) {
//             clearInterval(timer);
//             isRunning = false;
//             handleSessionEnd();
//           }
//         }, 1000);
//       }
//     }

//     function pauseTimer() {
//       clearInterval(timer);
//       isRunning = false;
//     }

//     function resetTimer() {
//       clearInterval(timer);
//       isRunning = false;
//       cycle = 0;
//       currentRound = 1;
//       session = "Work";
//       timeLeft = workTime;
//       updateDisplay();
//       updateCycleDisplay();
//     }

//     function handleSessionEnd() {
//       if (session === "Work") {
//         cycle++;
//         if (cycle % pomodoroRounds === 0) {
//           session = "Long Break";
//           timeLeft = longBreakTime;
//         } else {
//           session = "Short Break";
//           timeLeft = shortBreakTime;
//         }
//       } else {
//         session = "Work";
//         timeLeft = workTime;
//       }
//       updateDisplay();
//       updateCycleDisplay();
//       startTimer();
//     }

//     updateSettings();



const timer= document.querySelector('.timer');
const title= document.querySelector('.title');
const startBtn= document.querySelector('.startBtn');
const pauseBtn= document.querySelector('.pauseBtn');
const resetBtn= document.querySelector('.resetBtn');

//Making variables
const WORK_TIME =1*60;
const BREAK_TIME= 0.5*60;
let timerId = null;


//function to countdown 
const countDown = (time)=>{
    return ()=>{
        timer.textContent= time;
        time--;
        if( time<0){
            stopTimer();
            timerId = startTimer(BREAK_TIME);
        }
    }
}

//Arrow fxn to start time
const startTimer=(startTime)=>{
    if(timerId !== null){
        startTimer();
    }
    return setInterval(countDown(startTime),1000)
}

//Arrow fxn to stop time
const stopTimer=()=>{
    clearInterval(timerId);
    timerId=null;
}




//add ebvent listenr to start button
startBtn.addEventListener('click',()=>{
    timerId = startTimer(WORK_TIME);
});
