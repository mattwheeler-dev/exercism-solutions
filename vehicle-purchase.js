// TASK 1
// DETERMINE IF LICENSE IS NEEDED
function needsLicense(kind) {
	return kind == "truck" || kind == "car";
}

// TASK 2
// CHOOSE BETWEEN 2 VEHICLES
function chooseVehicle(option1, option2) {
	let bestChoice;
	if (option1 < option2) {
		bestChoice = option1;
	} else {
		bestChoice = option2;
	}
	return `${bestChoice} is clearly the better choice.`;
}

// TASK 3
// CALC ESTIMATED PRICE
function calculateResellPrice(originalPrice, age) {
	let estimate;
	if (age >= 3 && age <= 10) {
		estimate = originalPrice * 0.7;
	} else if (age < 3) {
		estimate = originalPrice * 0.8;
	} else {
		estimate = originalPrice * 0.5;
	}
	return estimate;
}
