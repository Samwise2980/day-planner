moment().format();

// Current times hours in military
var currentTime = moment().format("HH");
// Array of hours 
var hoursArray = [09, 10, 11, 12, 13, 14, 15, 16, 17]
// Array of IDs for each hour
var dayPlannerIDArray = [$("#hour-9"), $("#hour-10"), $("#hour-11"), $("#hour-12"), $("#hour-13"), $("#hour-14"), $("#hour-15"), $("#hour-16"), $("#hour-17")]

// Execute functions
currentDay();
hourColorSet();
getStoredEvents()

// Sets the current day to the top of the page
function currentDay(){

  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  
}

// Sets the color of the ID if it is the present, future, or past time
function hourColorSet(){
  for (i = 0; i < hoursArray.length; i++) {

    if (currentTime == hoursArray[i]) {
      dayPlannerIDArray[i].addClass("present");
    } 
    
    else if (currentTime < hoursArray[i]) {
      dayPlannerIDArray[i].addClass("future");
    }
    
    else if (currentTime > hoursArray[i]) {
      dayPlannerIDArray[i].addClass("past");
    }

  };
};

// When the save button is pressed, it will get the parent div ID and the value of the text area. Then it will save it to local storage under ID name
$(".saveBtn").on("click", function(){

  var parentID = $(this).closest("div").attr("id");
  var parentChildTextBox = $(this).closest("div").children("textarea").val();

  for (var j = 0; j < dayPlannerIDArray.length; j++) {

    var parentArrayID = dayPlannerIDArray[j].attr("id")

    if (parentID === parentArrayID) {

      localStorage.setItem(parentID, JSON.stringify(parentChildTextBox));

    }
  }
});

// When the page loads, then it will set the stored events to each ID
function getStoredEvents() {

  for (var k = 0; k < dayPlannerIDArray.length; k++) {

    var oldParentArrayID = dayPlannerIDArray[k].attr("id")
    var plannerText = JSON.parse(localStorage.getItem(oldParentArrayID));

    dayPlannerIDArray[k].children("textarea").val(plannerText);

  }
};
