//selecting HTML Element
var CurrentDay = document.getElementById("currentDay");
var timeFormat = moment().format('dddd, MMMM Do');
var clock = new Date();
var clockTime = clock.getHours();

CurrentDay.innerHTML = timeFormat;


for (var y = 0; y < 9; y++){
    var tableRaw = document.getElementById("txtbtn"+y);
    tableRaw.textContent = localStorage.getItem("Eventbtn"+y);
}

var timeVar = 9;

for (var i = 0; i < 9; i++){
    var checkTime = document.getElementById("txtbtn"+i);    

    if (timeVar < clockTime){
        console.log("0"+timeVar+":00" < clockTime);
        checkTime.classList.add("past");
    }

    else if (timeVar == clockTime) {
        checkTime.classList.add("present")
    }

    else
        checkTime.classList.add("future");

    timeVar++;
}

console.log(clockTime)

var mainSection = document.getElementById("mainSection");

mainSection.addEventListener('click', function(event){
    var selectedButton = event.target;

    if (selectedButton.tagName != 'BUTTON') 
    return;

    console.log(selectedButton.tagName);
    var userInput = document.getElementById("txt"+selectedButton.id);

   localStorage.setItem("Event" + selectedButton.id, userInput.value);
   console.log("TEST" + localStorage.getItem("Event" + selectedButton.id));

 
})