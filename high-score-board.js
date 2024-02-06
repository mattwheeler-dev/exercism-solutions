// TASK 1
// CREATE BOARD
function createScoreBoard() {
	return {
		"The Best Ever": 1000000,
	};
}

// TASK 2
// ADD PLAYER
function addPlayer(scoreBoard, player, score) {
	scoreBoard[player] = score;
	return scoreBoard;
}

// TASK 3
// REMOVE PLAYER
function removePlayer(scoreBoard, player) {
	delete scoreBoard[player];
	return scoreBoard;
}

// TASK 4
// INCREASE SCORE
function updateScore(scoreBoard, player, points) {
	scoreBoard[player] += points;
	return scoreBoard;
}

// TASK 5
// MONDAY BONUS PTS
function applyMondayBonus(scoreBoard) {
	for (let player in scoreBoard) {
		scoreBoard[player] += 100;
	}
	return scoreBoard;
}

// TASK 6
// NORMALIZE HIGH SCORE
function normalizeScore(params) {
	return params.normalizeFunction(params.score);
}
