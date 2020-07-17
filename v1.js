const prompt = require('prompt-sync')({sigint: true});
const HappyBirthday = require("./happyBirthday.js");
const hb = new HappyBirthday();

runApplication = function (hb) {
	// runs application and persists data from client to singleton class
	runWizard(hb);
	// shows data that will be sent to server
	hb.showServerOutput();
}

runWizard = function (hb) {
	hb.persistName(prompt("What is your name? "));
	hb.persistMonth(prompt("What is your birth month? "));
	hb.persistDay(prompt(`What day in ${hb.birthMonth} were you born? `));
	hb.persistYear(prompt("What is your birth year? "));
}

runApplication(hb);


