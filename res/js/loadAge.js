function loadAge() {
	var today = new Date();
	var today_day = today.getDate();
	var today_month = today.getMonth();
	var today_year = today.getFullYear();

	var birthday = {
		day : 29,
		month : 1,
		year : 1997
	};

	var years;
	years = today_year - birthday.year - 1;

	if ( (today_month*31 + today_day) >
		 (birthday.month*31 + birthday.day) ) {
		console.log("Today total: "+ today_month*31 + today_day)
		years++;
	}

	document.getElementById('age').innerHTML= years.toString();
}