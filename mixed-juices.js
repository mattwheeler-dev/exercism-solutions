// TASK 1
// DETERMINE TIME TO MIX DRINK
function timeToMixJuice(name) {
	switch (name) {
		case "Pure Strawberry Joy":
			return 0.5;
			break;
		case "Energizer":
			return 1.5;
			break;
		case "Green Garden":
			return 1.5;
			break;
		case "Tropical Island":
			return 3;
			break;
		case "All or Nothing":
			return 5;
			break;
		default:
			return 2.5;
	}
}

// TASK 2
// REPLENISH LIME WEDGE SUPPLY
function limesToCut(wedgesNeeded, limes) {
	const limeSizes = {
		small: 6,
		medium: 8,
		large: 10,
	};

	let limesCut = 0;

	while (wedgesNeeded > 0 && limes.length > 0) {
		wedgesNeeded -= limeSizes[limes.shift()];
		limesCut++;
	}

	return limesCut;
}

// TASK 3
// FINISH THE SHIFT
function remainingOrders(timeLeft, orders) {
	while (timeLeft > 0) {
		timeLeft -= timeToMixJuice(orders.shift());
	}

	return orders;
}
