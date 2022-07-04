//selecting HTML Element
var CurrentDay = document.getElementById("currentDay");
var timeFormat = moment().format('dddd, MMMM Do');
console.log(timeFormat);
var x = document.getElementById("txtbtn0");
CurrentDay.innerHTML = timeFormat;

// var plannerEvents = [];
// var eventArray = [];

//i < document.getElementsByClassName("saveBtn").length

// for(var k = 0; k < 3; k++) {
//     console.log(k);
//     document.getElementById("btn" + k).addEventListener('click',function(e){
//         console.log("save btn test");
//         //var userInput;
//         var nodeNumber = e.target.id[3];
//         console.log(e.target.id);
//         userInput = document.getElementById("txt" + nodeNumber);
//         console.log(userInput.value);
//         localStorage.setItem("userInput", userInput.value);

//     });
// }
x.textContent = localStorage.getItem("Eventbtn0");

var mainSection = document.getElementById("mainSection");

mainSection.addEventListener('click', function(event){

    var selectedButton = event.target;
    console.log(selectedButton.id);
    var userInput = document.getElementById("txt"+selectedButton.id);

   localStorage.setItem("Event" + selectedButton.id, userInput.value);
   console.log("TEST" + localStorage.getItem("Event" + selectedButton.id));

 
})