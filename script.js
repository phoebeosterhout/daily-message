var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();
var isPartyTime = false;
var partyButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var updateClock = function() {
	var landscape = document.getElementById('landscape');
	var message = document.getElementById("timeEvent");
	var messageText;

	if (time == partyTime){
		landscape.src = "img/party.jpg";
    	messageText = "Party time!!";
	} else if (time == napTime) {
		landscape.src = "img/nap.jpg";
    	messageText = "It's nap time...";
	} else if (time == lunchTime) {
		landscape.src = "img/lunch.jpg";
    	messageText = "Time for Lunch!";
	} else if (time == wakeupTime) {
		landscape.src = "img/morning.jpg";
    	messageText = "Rise and shine!";
	} else if (time < noon) {
    	messageText = "Good morning!";
	} else if (time > evening) {
    	messageText = "Good Evening!";
	} else {
    	messageText = "Good afternoon!";
	}

	message.innerText = messageText;

	showCurrentTime();
};

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;

    clock.innerText = clockTime;
};

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyEvent = function() {
	if (isPartyTime === false) {
		isPartyTime = true;
		time = partyTime;
		partyButton.innerText = "Party Over";
		partyButton.style.backgroundColor = "#0A8DAB";
	} else {
		isPartyTime = false;
		time = new Date().getHours();
		partyButton.innerText = "Party Time!!";
		partyButton.style.backgroundColor = "#222";
	}
};

var lunchEvent = function() {
	var lunchtime = lunchTimeSelector.value;
};
var wakeUpEvent = function() {
	var wakeUpTime = wakeUpTimeSelector.value;
};
var napEvent = function() {
	var napTime = napTimeSelector.value;
};

partyButton.addEventListener("click", partyEvent);
napTimeSelector.addEventListener("change", napEvent);
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
