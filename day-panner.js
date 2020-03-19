moment().format();

// GIVEN I am using a daily planner to create a schedule

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist

// ------------------------------------------------------------------//

// use class for "past", "present", and "future" to apply styles

// Get the current day, months, date from moment.js
// set the #currentDay to this value

// Set value for current hour/minute/second from moment.js

// If current time is less than set value time
// Color past

// IF current time is the same as value time
// Color present

// IF current time is greater than set value time
// Color future

// When user clicks on the save button
// Then saves text area value to local storage

// When the page refreshes
// Get the text string for each hour from local storage


var currentTime = moment().format("h:mm:ss");
var hours = [{hourStart: "9:00:00", hourEnd: "9:59:59"}, {hourStart: "10:00:00", hourEnd: "10:59:59"}, {hourStart: "11:00:00", hourEnd: "11:59:59"}, {hourStart: "12:00:00", hourEnd: "12:59:59"}, {hourStart: "13:00:00", hourEnd: "13:59:59"}, {hourStart: "14:00:00", hourEnd: "14:59:59"}, {hourStart: "15:00:00", hourEnd: "15:59:59"}, {hourStart: "16:00:00", hourEnd: "16:59:59"}, {hourStart: "17:00:00", hourEnd: "17:59:59"}]

// Execute functions
currentDay();
hourColorSet();

function currentDay(){

  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  
}

$(".saveBtn").on("click", function(){
  alert("Yep, still here!")
});

function hourColorSet(){
  for (i = 0; i < hours.length; i++) {
    
  }
};
