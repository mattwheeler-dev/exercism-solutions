// TASK 1
// TRANSLATE COORDS
function translate2d(dx, dy) {
	return function translate(x, y) {
		return [x + dx, y + dy];
	};
}

// TASK 2
// SCALE COORDS
function scale2d(sx, sy) {
	return function scale(x, y) {
		return [sx * x, sy * y];
	};
}

// TASK 3
// COMPOSE TRANSFORM FUNCTIONS
function composeTransform(f, g) {
	return function composed(x, y) {
		return g(...f(x, y));
	};
}

// TASK 4
// SAVE FUNCTION RESULTS
function memoizeTransform(f) {
	let prevX, prevY, prevResult;

	return function memoized(x, y) {
		if (prevX === x && prevY === y) {
			return prevResult;
		}

		prevX = x;
		prevY = y;
		return (prevResult = f(x, y));
	};
}
