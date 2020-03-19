moment().format();

// GIVEN I am using a daily planner to create a schedule

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


var currentTime = moment().format("HH");
var hours = [09, 10, 11, 12, 13, 14, 15, 16, 17]
var dayPlannerID = [$("#hour-9"), $("#hour-10"), $("#hour-11"), $("#hour-12"), $("#hour-13"), $("#hour-14"), $("#hour-15"), $("#hour-16"), $("#hour-17"),]

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

    if (currentTime == hours[i]) {
      dayPlannerID[i].addClass("present");
    } 
    
    else if (currentTime < hours[i]) {
      dayPlannerID[i].addClass("future");
    }
    
    else if (currentTime > hours[i]) {
      dayPlannerID[i].addClass("past");
    }

  };
};
