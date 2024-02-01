// TASK 1
// DETERMINE TOTAL NUM OF BIRDS
function totalBirdCount(birdsPerDay) {
	let total = 0;
	for (let i = 0; i < birdsPerDay.length; i++) {
		total += birdsPerDay[i];
	}
	return total;
}

// TASK 2
// CALC NUM OF VISITING BIRDS IN GIVEN WEEK
function birdsInWeek(birdsPerDay, week) {
	return totalBirdCount(birdsPerDay.slice(week * 7 - 7, week * 7));
}

// TASK 3
// FIX A MISTAKE
function fixBirdCountLog(birdsPerDay) {
	for (let i = 0; i < birdsPerDay.length; i += 2) {
		birdsPerDay[i] += 1;
	}
	return birdsPerDay;
}
