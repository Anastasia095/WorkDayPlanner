//selecting HTML Element
var CurrentDay = document.getElementById("currentDay");

var timeFormat = moment().format('dddd, MMMM Do');
console.log(timeFormat);

CurrentDay.innerHTML = timeFormat;


for(var i = 0; i < document.getElementsByClassName("saveBtn").length; i++) {
    document.getElementsByClassName("saveBtn")[i].addEventListener('click',function(){
        console.log("save btn test");
        var userInput = document.getElementById("col-10").value;
        localStorage.setItem("userInput", userInput);

    });
}
