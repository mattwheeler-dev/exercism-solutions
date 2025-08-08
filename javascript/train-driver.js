// Task 1
const getListOfWagons => (...wagons) {
  return Array.from(wagons);
}

// Task 2
const fixListOfWagons => (ids) {
  const [first, second, ...others] = ids; 
  return [...others, first, second];
}

// Task 3
const correctListOfWagons => (ids, missingWagons) {
  const [first, ...others] = ids;
  return [first, ...missingWagons, ...others];
}

// Task 4
const extendRouteInformation => (information, additional) {
  return {
    ...information,
    ...additional
  };
}

// Task 5
const separateTimeOfArrival => (information) {
  const {timeOfArrival, ...rest} = information;
  return [timeOfArrival, rest];
}
