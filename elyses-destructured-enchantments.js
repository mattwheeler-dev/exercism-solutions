// TASK 1
// GET 1ST CARD
function getFirstCard(deck) {
	const [first, ...theRest] = deck;
	return first;
}

// TASK 2
// GET 2ND CARD
function getSecondCard(deck) {
	const [first, second, ...theRest] = deck;
	return second;
}

// TASK 3
// SWAP 1ST 2 CARDS
function swapTopTwoCards(deck) {
	const [first, second, ...theRest] = deck;
	return [second, first, ...theRest];
}

// TASK 4
// DISCARD TOP CARD
function discardTopCard(deck) {
	const [first, ...theRest] = deck;
	return [first, [...theRest]];
}

// TASK 5
// INSERT FACE CARDS
const FACE_CARDS = ["jack", "queen", "king"];
function insertFaceCards(deck) {
	const [first, ...theRest] = deck;
	return [first, ...FACE_CARDS, ...theRest];
}
