// var mylist = document.getElementsByTagName("LI");
var taskCounter = 0;
var calendar;

// var i;
// for (i = 0; i < mylist.length; i++) { //for loop loops through all the list items and creates an option to close the item
//   var span = document.createElement("SPAN");//this creates an "x" to click on
//   span.className = "close";
// }

// var close = document.getElementsByClassName("close");//this actually closes the list items
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

function handleDocumentLoaded() {
  var calendarEl = document.getElementById('calendar');
  calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();
  document.getElementById('taskList').addEventListener("click", handleTaskListClick);
}

function handleTaskListClick(event) {
  var clickEl = event.target;

  if (clickEl.nodeName !== 'SPAN') {
    return;
  }

  var taskLi = clickEl.parentElement;
   var eventId = taskLi.id;
  var calendarEvent = calendar.getEventById( eventId );
  if (calendarEvent != null)
  {
    calendarEvent.remove();
  }
  taskLi.parentElement.removeChild(taskLi);
}


// Create a new list item when clicking on the "Add" button
function newElement() {
  // var inputValue = document.getElementById("myInput").value;
  var taskDesc = document.getElementById('myInput').value;

  if (taskDesc === '') {
    alert("You can't leave your task empty.");
    return;
  }

  var taskId = "task-" + taskCounter++;
  var start = document.getElementById('startDate').value;
  var end = document.getElementById('endDate').value;

  if (start != '' && end != '')
  {
    calendar.addEvent({ id:taskId, title:taskDesc, start: start , end: end, allDay: true });
  }

    var li = document.createElement("li");
    var t = document.createTextNode(taskDesc);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    li.id = taskId;
    li.appendChild(t);
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    document.getElementById("taskList").appendChild(li);

    document.getElementById("myInput").value = "";

    //
    // for (i = 0; i < close.length; i++) {
    //   close[i].onclick = function() {
    //     var div = this.parentElement;
    //     div.style.display = "none";
    //   }
    // }

}
