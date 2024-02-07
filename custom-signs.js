// TASK 1
// BUILD OCCASION SIGN
function buildSign(occasion, name) {
	return `Happy ${occasion} ${name}!`;
}

// TASK 2
// BUILD B-DAY SIGN
function buildBirthdaySign(age) {
	return `Happy Birthday! What a ${
		age >= 50 ? "mature" : "young"
	} fellow you are.`;
}

// TASK 3
// BUILD GRAD SIGN
function graduationFor(name, year) {
	return `Congratulations ${name}!\nClass of ${year}`;
}

// TASK 4
// COMPUTE SIGN COST
function costOf(sign, currency) {
	return `Your sign costs ${20 + 2 * sign.length}.00 ${currency}.`;
}
