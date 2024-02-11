// TASK 1
// DETERMINE NUM OF CARDS OF GIVEN TYPE
function cardTypeCheck(stack, type) {
	let ofType = 0;
	stack.forEach((card) => {
		ofType += card === type ? 1 : 0;
	});
	return ofType;
}

// TASK 2
// DETERMINE NUM OF CARDS FOR EVEN / ODD
function determineOddEvenCards(stack, type) {
	let ofType = 0;
	for (const card of stack) {
		if (type === true) {
			if (card % 2 == 0) {
				ofType += 1;
			}
		} else {
			if (card % 2 != 0) {
				ofType += 1;
			}
		}
	}
	return ofType;
}
