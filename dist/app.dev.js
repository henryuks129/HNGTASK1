'use strict';

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var track = 'Track: Frontend';

function currentUTC() {
  function weekDays() {
    var currentDate = new Date();
    var dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML = "Current Day: ".concat(dayOfWeek);
  }

  weekDays();

  function currentTime() {
    document.querySelector('[data-testid="myTrack"]').innerHTML = track;
    var currentUTCDate = new Date();
    var hours = currentUTCDate.getUTCHours();
    var minutes = currentUTCDate.getUTCMinutes();
    var seconds = currentUTCDate.getUTCSeconds();
    document.querySelector('[data-testid="currentUTCTime"]').innerHTML = "Current UTC Time: ".concat(hours, ": ").concat(minutes, ": ").concat(seconds, " ");
    document.querySelector('[data-testid="myTrack"]').innerHTML = track;
  }

  currentTime();
  setInterval(weekDays, 60 * 60 * 1000);
  setInterval(currentTime, 1000);
}

currentUTC();