// TASK 1
// FIND POSITION OF CARD
function getCardPosition(stack, card) {
	return stack.indexOf(card);
}

// TASK 2
// DETERMINE IF CARD IS PRESENT
function doesStackIncludeCard(stack, card) {
	return stack.includes(card);
}

// TASK 3
// DETERMINE IF EACH CARD IS EVEN
function isEachCardEven(stack) {
	return stack.every((card) => card % 2 === 0);
}

// TASK 4
// CHECK IF STACK CONTAINS AN ODD CARD
function doesStackIncludeOddCard(stack) {
	return stack.some((card) => card % 2 !== 0);
}

// TASK 5
// GET FIRST ODD CARD
function getFirstOddCard(stack) {
	return stack.find((card) => card % 2 !== 0);
}

// TASK 6
// DETERMINE POSITION OF FIRST EVEN CARD
function getFirstEvenCardPosition(stack) {
	return stack.findIndex((card) => card % 2 === 0);
}
