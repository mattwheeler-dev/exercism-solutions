// TASK 1
// DEFINE EXPECTED TIME
const PREPARATION_MINUTES_PER_LAYER = 2;
const EXPECTED_MINUTES_IN_OVEN = 40;

// TASK 2
// CALC REMAINING TIME
function remainingMinutesInOven(actualMinutesInOven) {
	return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

// TASK 3
// CALC PREP TIME
function preparationTimeInMinutes(numberOfLayers) {
	return PREPARATION_MINUTES_PER_LAYER * numberOfLayers;
}

// TASK 4
// CALC TOTAL TIME
function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
	return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}
