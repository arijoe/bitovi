class HappyBirthday2 {

	people = [];
	currentPerson;

	constructor() {}

	createNewPerson() {
		this.currentPerson = new Person();
	}

	persistName(name) {
		this.currentPerson.name = name;
	}

	persistMonth(month) {
		this.currentPerson.birthMonth = month;
	}

	persistDay(day) {
		this.currentPerson.birthDay = day;
	}

	persistYear(year) {
		this.currentPerson.birthYear = year;
	}

	persistNewPerson() {
		this.people.push(this.currentPerson);
	}

	showServerOutput() {
		console.log("This data will be sent to the server: ")
		console.log(this.people);
	}
}

class Person {
	name;
	birthMonth;
	birthDay;
	birthYear;
	constructor() {}
}

module.exports = HappyBirthday2;