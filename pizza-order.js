function pizzaPrice(pizza, ...extras) {
  let price = 0;
  switch (pizza) {
    case 'Margherita':
      price += 7;
      break;
    case 'Caprese':
      price += 9;
      break;
    case 'Formaggio':
      price += 10;
      break;
  };
  if (extras) {
    extras.forEach((extra) => {
      if (extra === 'ExtraSauce') {
        price += 1;
      } else if (extra === 'ExtraToppings') {
        price += 2;
      } else {
        return;
      }
    })
  };
  return price;
};

function orderPrice(pizzaOrders) {
  let total = 0;
  for (const order of pizzaOrders) {
    total += pizzaPrice(order.pizza, ...order.extras);
  };
  return total;
};
