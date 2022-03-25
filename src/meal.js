function nameMenuItem(food) {
  return `Delicious ${food}`
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  }

  return menuItem;
}

function addIngredients(food, ingredients) {
  if (!ingredients.includes(food)) {
    ingredients.push(food)
  }
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
  return price * 0.9;
}

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }

  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
