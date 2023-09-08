'use strict'
// const DaysInAWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

// Function to update the current day of the week
function updateDayOfTheWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${dayOfWeek}`;
}

// Function to update the current UTC time
function updateUTCTime() {
    const currentDate = new Date();
    const utcTimeString = currentDate.toUTCString();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${utcTimeString}`;
}

// Call the functions to update data initially and at regular intervals
updateDayOfTheWeek();
updateUTCTime();
setInterval(updateDayOfTheWeek, 1000 * 60 * 60); // Update every hour
setInterval(updateUTCTime, +1000); // Update every second