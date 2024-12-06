// TASK 1
// CHOOSE A CARD
function getItem(cards, position) {
	return cards[position];
}

// TASK 2
// EXCHANGE A CARD
function setItem(cards, position, replacementCard) {
	cards[position] = replacementCard;
	return cards;
}

// TASK 3
// INSERT A CARD AT TOP
function insertItemAtTop(cards, newCard) {
	cards.push(newCard);
	return cards;
}

// TASK 4
// REMOVE A CARD
function removeItem(cards, position) {
	cards.splice(position, 1);
	return cards;
}

// TASK 5
// REMOVE TOP CARD
function removeItemFromTop(cards) {
	cards.pop();
	return cards;
}

// TASK 6
// INSERT CARD AT BOTTOM
function insertItemAtBottom(cards, newCard) {
	cards.unshift(newCard);
	return cards;
}

// TASK 7
// REMOVE BOTTOM CARD
function removeItemAtBottom(cards) {
	cards.shift();
	return cards;
}

// TASK 8
// CHECK STACK SIZE
function checkSizeOfStack(cards, stackSize) {
	return cards.length == stackSize;
}
