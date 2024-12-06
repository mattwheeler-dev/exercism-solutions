// TASK 1
// DOUBLE EVERY CARD
function seeingDouble(deck) {
  return (deck.map((card) => card * 2));
};

// TASK 2
// TRIPLICATE ALL 3'S
function threeOfEachThree(deck) {
  return deck.reduce((acc, card) => {
    if (card === 3) {
      acc.push(3, 3, 3);
    } else {
      acc.push(card);
    }
    return acc;
  }, []);
};

// TASK 3
// FIND MIDDLE 2 CARDS
function middleTwo(deck) {
  return deck.splice(4, 2);
};

// TASK 4
// PLACE FIRST & LAST CARDS IN MIDDLE IN REVERSE ORDER
function sandwichTrick(deck) {
  const first = deck.shift();
  const last = deck.pop();
  const middle = (deck.length / 2);
  deck.splice(middle, 0, last, first);
  return deck;
};

// TASK 5
// REMOVE ALL CARDS != 2
function twoIsSpecial(deck) {
  return deck.filter((card) => card === 2);
};

// TASK 6
// PLACE DECK IN ORDER
function perfectlyOrdered(deck) {
  return deck.sort((card1, card2) => {
    if (card1 < card2) {
      return -1;
    } else {
      return 1;
    }
    return 0;
  });
};

// TASK 7
// REVERSE DECK ORDER
function reorder(deck) {
  return deck.reverse();
};
