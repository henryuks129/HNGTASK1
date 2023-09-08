'use strict'
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const track = 'Track: Frontend'

function currentUTC(){
function weekDays() {
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML = `Current Day: ${dayOfWeek}`;
}
weekDays()
function currentTime() {
    document.querySelector('[data-testid="myTrack"]').innerHTML = track
    const currentUTCDate = new Date();
    const hours = currentUTCDate.getUTCHours();
    const minutes = currentUTCDate.getUTCMinutes();
    const seconds = currentUTCDate.getUTCSeconds();
    document.querySelector('[data-testid="currentUTCTime"]').innerHTML = `Current UTC Time: ${hours}: ${minutes}: ${seconds} `;
    document.querySelector('[data-testid="myTrack"]').innerHTML = track
}
currentTime()
setInterval(weekDays, 60 * 60 * 1000);
setInterval(currentTime, 1000);
}
currentUTC()        


