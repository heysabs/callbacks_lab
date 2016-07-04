// // your code here:

var secondsCounter = 0;
var timerID;
var setIntervalID;

var h1Timer = document.getElementById("timer");

var resetButton = document.getElementById("reset");
var startButton = document.getElementById("start");
var pauseButton = document.getElementById("pause");

resetButton.addEventListener("click", resetWatch);
startButton.addEventListener("click", startWatch);
pauseButton.addEventListener("click", pauseWatch);

function updateTime() {
  secondsCounter += 1;
  h1Timer.innerHTML = secondsCounter;
}

function startWatch() {
  h1Timer.innerHTML  = secondsCounter;
  setIntervalID = setInterval(updateTime, 1000);
}

function pauseWatch() {
  clearInterval(setIntervalID);
}

function resetWatch() {
  clearInterval(setIntervalID);
  h1Timer.innerHTML = "Start Counting!";
  secondsCounter = 0;
}
