// TASK 1
// GET 1ST LETTER OF SENTENCE
export function frontDoorResponse(line) {
	return line[0];
}

// TASK 2
// CAPITALIZE WORD
export function frontDoorPassword(word) {
	let capFirstLetter = word[0].toUpperCase();
	let capitalized = capFirstLetter + word.slice(1, word.length).toLowerCase();
	return capitalized;
}

// TASK 3
// GET LAST LETTER OF SENTENCE
export default function backDoorResponse(line) {
	let trimmedLine = line.trim();
	return trimmedLine[trimmedLine.length - 1];
}

// TASK 4
// BE POLITE
export function backDoorPassword(word) {
	return frontDoorPassword(word) + ", please";
}
