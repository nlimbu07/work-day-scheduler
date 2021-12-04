// Display today's day and date
var todayEl = document.querySelector('#currentDay');
todayDate = moment().format('dddd, MMM Do YYYY');
todayEl.textContent = todayDate;

// the document ready event
$(document).ready(function () {
  // get current number of hour
  var currentHour = moment().format('HH');

  // loop over time blocks
  $('.time-block').each(function () {
    var timeBlockEl = $(this).attr('id').split('hour')[1];

    // to check time and add classes for background
    if (currentHour === timeBlockEl) {
      $(this).addClass('present');
    } else if (currentHour < timeBlockEl) {
      $(this).addClass('future');
      $(this).removeClass('present');
    } else if (currentHour > timeBlockEl) {
      $(this).addClass('past');
      $(this).removeClass('future');
    }
  });

  // saveBtn click listener
  $('.saveBtn').on('click', function (event) {
    event.preventDefault();
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    // save text in local storage
    localStorage.setItem(time, value);
  });

  // get item from local storage
  $('#hour09 .description').val(localStorage.getItem('hour09'));
  $('#hour10 .description').val(localStorage.getItem('hour10'));
  $('#hour11 .description').val(localStorage.getItem('hour11'));
  $('#hour12 .description').val(localStorage.getItem('hour12'));
  $('#hour13 .description').val(localStorage.getItem('hour13'));
  $('#hour14 .description').val(localStorage.getItem('hour14'));
  $('#hour15 .description').val(localStorage.getItem('hour15'));
  $('#hour16 .description').val(localStorage.getItem('hour16'));
  $('#hour17 .description').val(localStorage.getItem('hour17'));
});
