const prompt = require('prompt-sync')({sigint: true});
const HappyBirthday2 = require("./happyBirthday2.js");
const hb = new HappyBirthday2();

runApplication = function (hb) {
	// runs application and persists data from client to singleton class
	runWizard(hb);
	// introduces feature of adding a new person's birthday
	if (shouldAddNewPerson()) {
		// if a new person is to be added, start the application over
		runApplication(hb);
	} else {
		// shows data that will be sent to server
		hb.showServerOutput();
	}
}

runWizard = function (hb) {
	hb.createNewPerson();
	hb.persistName(prompt("What is your name? "));
	hb.persistMonth(prompt("What is your birth month? "));
	hb.persistDay(prompt(`What day in ${hb.currentPerson.birthMonth} were you born? `));
	hb.persistYear(prompt("What is your birth year? "));
	hb.persistNewPerson();
}

shouldAddNewPerson = function (hb) {
	const response = prompt("Would you like to add another person? (Y/N) ");
	return response[0].toUpperCase() === "Y";
}

runApplication(hb);