// TASK 1
// GET 1ST LETTER OF SENTENCE
function frontDoorResponse(line) {
	return line[0];
}

// TASK 2
// CAPITALIZE WORD
function frontDoorPassword(word) {
	let capFirstLetter = word[0].toUpperCase();
	let capitalized = capFirstLetter + word.slice(1, word.length).toLowerCase();
	return capitalized;
}

// TASK 3
// GET LAST LETTER OF SENTENCE
function backDoorResponse(line) {
	let trimmedLine = line.trim();
	return trimmedLine[trimmedLine.length - 1];
}

// TASK 4
// BE POLITE
function backDoorPassword(word) {
	return frontDoorPassword(word) + ", please";
}
