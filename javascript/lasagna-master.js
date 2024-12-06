// TASK 1
// DETERMINE IF LAS IS DONE
function cookingStatus(time) {
	if (!time && time != 0) {
		return "You forgot to set the timer.";
	} else if (time === 0) {
		return "Lasagna is done.";
	} else {
		return "Not done, please wait.";
	}
}

// TASK 2
// ESTIMATE PREP TIME
function preparationTime(layers, prepTime) {
	if (!prepTime) {
		return layers.length * 2;
	} else {
		return layers.length * prepTime;
	}
}

// TASK 3
// COMPUTE NOODLES & SAUCE NEEDED
function quantities(layers) {
	let noodle = 0;
	let sauce = 0;

	layers.forEach((layer) => {
		switch (layer) {
			case "noodles":
				noodle += 50;
				break;
			case "sauce":
				sauce += 0.2;
				break;
			default:
				break;
		}
		return { noodle, sauce };
	});

	return {
		noodles: noodle,
		sauce: sauce,
	};
}

// TASK 4
// SECRET INGREDIENT
function addSecretIngredient(otherList, myList) {
	myList.push(otherList[otherList.length - 1]);
}

// TASK 5
// SCALE RECIPE
function scaleRecipe(recipe, portions) {
	let newRecipe = { ...recipe };
	let scale = portions / 2;

	for (let item in recipe) {
		newRecipe[item] *= scale;
	}
	return newRecipe;
}
