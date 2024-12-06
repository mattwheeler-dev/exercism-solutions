// TASK 1
// CREATE CALLBACK FOR ORDER SUCCESS
function onSuccess() {
	return notify({ message: "SUCCESS" });
}

// TASK 2
// CREATE CALLBACK FOR ORDER FAIL
function onError() {
	return notify({ message: "ERROR" });
}

// TASK 3
// CREATE WRAPPER FOR API FUNCTION
function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
	order(query, onSuccessCallback, onErrorCallback);
}

// TASK 4
// CREATE SHORT FUNCTION
function postOrder(variety, quantity) {
	orderFromGrocer({ variety, quantity }, onSuccess, onError);
}
