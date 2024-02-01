// TASK 1
// CALC SUM FOR NUMS ON SLOT MACHINE
function twoSum(array1, array2) {
	let arr1 = Number(array1.join(""));
	let arr2 = Number(array2.join(""));
	return (arr1 += arr2);
}

// TASK 2
// DETERMINE IF NUM IS PALINDROME
function luckyNumber(value) {
	let val = value.toString();
	let reverseVal = val.split("").reverse().join("");
	return val === reverseVal;
}

// TASK 3
// GENERATE ERROR MSG FOR INVALID USER INPUT
function errorMessage(input) {
	if (!input) {
		return "Required field";
	} else if (Number(input) === 0 || !Number(input)) {
		return "Must be a number besides 0";
	} else {
		return "";
	}
}
