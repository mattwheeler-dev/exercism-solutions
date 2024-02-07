// TASK 1
// CHECK IF FAST ATK IS POSSIBLE
function canExecuteFastAttack(knightIsAwake) {
	return !knightIsAwake;
}

// TASK 2
// CHECK IF SPY IS POSSIBLE
function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
	return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

// TASK 3
// CHECK IF SIGNAL PRISONER IS POSSIBLE
function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
	return archerIsAwake == false && prisonerIsAwake == true;
}

// TASK 4
// CHECK IF FREE PRISONER IS POSSIBLE
function canFreePrisoner(
	knightIsAwake,
	archerIsAwake,
	prisonerIsAwake,
	petDogIsPresent
) {
	return (
		(archerIsAwake == false && petDogIsPresent == true) ||
		(prisonerIsAwake == true &&
			knightIsAwake == false &&
			archerIsAwake == false)
	);
}
