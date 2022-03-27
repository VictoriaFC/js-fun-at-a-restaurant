function nameMenuItem(food) {
  return `Delicious ${food}`
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type,
  }
}

function addIngredients(ingredient, ingredientArray) {
// includes ingredient is not true. that's why you used bang ;)
  if (!ingredientArray.includes(ingredient)) {
    ingredientArray.push(ingredient)
  }
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
  return price * 0.9;
}

function createRecipe(title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
