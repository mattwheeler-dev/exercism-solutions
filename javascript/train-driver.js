// Task 1
const getListOfWagons => (...wagons) {
  return wagons;
}

// Task 2
const fixListOfWagons => ([first, second, ...rest]) {
  return [...rest, first, second];
}

// Task 3
const correctListOfWagons => ([first, ...rest], missingWagons) {
  return [first, ...missingWagons, ...rest];
}

// Task 4
const extendRouteInformation => (information, additional) {
  return {
    ...information,
    ...additional
  };
}

// Task 5
const separateTimeOfArrival => ({timeOfArrival, ...rest}) {
  return [timeOfArrival, rest];
}
