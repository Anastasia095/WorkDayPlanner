//selecting HTML Element
var CurrentDay = document.getElementById("currentDay");

var timeFormat = moment().format('dddd, MMMM Do');
console.log(timeFormat);

CurrentDay.innerHTML = timeFormat;

