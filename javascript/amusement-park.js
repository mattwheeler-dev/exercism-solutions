// TASK 1
// CREATE NEW VISITOR
function createVisitor(name, age, ticketId) {
	return {
		name: name,
		age: age,
		ticketId: ticketId,
	};
}

// TASK 2
// REVOKE TICKET
function revokeTicket(visitor) {
	visitor.ticketId = null;
	return visitor;
}

// TASK 3
// DETERMINE TICKET STATUS
function ticketStatus(tickets, ticketId) {
	if (tickets[ticketId] === undefined) {
		return "unknown ticket id";
	} else if (tickets[ticketId] === null) {
		return "not sold";
	} else {
		return `sold to ${tickets[ticketId]}`;
	}
}

// TASK 4
// IMPROVE STATUS RESPONSE
function simpleTicketStatus(tickets, ticketId) {
	if (tickets[ticketId] === undefined || tickets[ticketId] === null) {
		return "invalid ticket !!!";
	} else {
		return tickets[ticketId];
	}
}

// TASK 5
// DETERMINE VERSION OF T&C
function gtcVersion(visitor) {
	if (visitor.gtc) {
		return visitor.gtc.version;
	} else {
		return;
	}
}
