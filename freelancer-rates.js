// TASK 1
// CALC DAY RATE WHEN GIVEN HOURLY RATE
function dayRate(ratePerHour) {
	return ratePerHour * 8;
}

// TASK 2
// CALC AMT OF DAYS ON A FIXED BUDGET
function daysInBudget(budget, ratePerHour) {
	return Math.floor(budget / dayRate(ratePerHour));
}

// TASK 3
// CALC DISCOUNTED RATE FOR LARGE PROJECTS
function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
	let fullMonths = Math.floor(numDays / 22);
	let fullDays = numDays % 22;
	let fullPrice = dayRate(ratePerHour) * fullDays;
	let discountPrice = fullMonths * (dayRate(ratePerHour) * 22) * (1 - discount);
	console.log(fullMonths, fullDays, fullPrice, discountPrice);
	let total = Math.ceil(fullPrice + discountPrice);
	return total;
}
