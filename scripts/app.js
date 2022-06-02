const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');
const yearEl = document.getElementById('year');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`Jan 1 ${currentYear + 1} 00:00:00`);
yearEl.innerHTML = currentYear + 1;

function countDown() {
  const currentDate = new Date();
  const newYearsDate = (newYearTime - currentDate) / 1000;

  const days = Math.floor(newYearsDate / 3600 / 24);
  const hours = Math.floor(newYearsDate / 3600) % 24;
  const mins = Math.floor(newYearsDate / 60) % 60;
  const seconds = Math.floor(newYearsDate) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secsEl.innerHTML = formatTime(seconds);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
//init func
countDown();

setInterval(countDown, 1000);
