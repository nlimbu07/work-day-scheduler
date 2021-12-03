// Display today's day and date
var todayEl = document.querySelector('#currentDay');
todayDate = moment().format('dddd, MMM Do YYYY');
todayEl.textContent = todayDate;
