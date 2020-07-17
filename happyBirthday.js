class HappyBirthday {

	name;
	birthMonth;
	birthDay;
	birthYear;

	constructor() {}

	persistName(name) {
		this.name = name;
	}

	persistMonth(month) {
		this.birthMonth = month;
	}

	persistDay(day) {
		this.birthDay = day;
	}

	persistYear(year) {
		this.birthYear = year;
	}

	showServerOutput() {
		console.log("This data will be sent to the server: ")
		console.log({
			'name': this.name,
			'month': this.birthMonth,
			'day': this.birthDay,
			'year': this.birthYear
		});
	}
}

module.exports = HappyBirthday;