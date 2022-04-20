// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// START - Global Variables
var events = {};
var saveBtn = document.querySelector(".save-btn");

function saveText(e) {
  // take text/time/date from .description and save to local storage
  localStorage.setItem("event", JSON.stringify(events));
  console.log(events);
}

// Save events on click
$(".save-btn").click(function () {
  console.log("save button clicked");
  var eventTime = $(this).closest(".time-block").attr("id");
  console.log(eventTime);
  // var eventText = from textarea;
  //console.log(eventText);
});

var auditEvents = function () {
  console.log("this will change colors of text area");
};

// get description/date and hour from local storage
var loadEvents = function () {
  console.log("loading description");
};

// event listeners
// saveBtn.addEventListener("click", saveText, false);
auditEvents();
loadEvents();
