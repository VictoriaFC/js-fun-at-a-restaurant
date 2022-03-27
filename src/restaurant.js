function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

function addMenuItem(restaurant, menuItem) {
  // we must check which type the item is to determine which menu array to add it to
  if (menuItem.type === "breakfast") {
    // check every item in breakfast array to see if item already exists
    for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
      // if item exists at any index return out so we don't add item to array
      if (restaurant.menus.breakfast[i].name === menuItem.name) {
        return
      }
    }
    // Once we check every item in the array and none match we can add the item
    // we know it was not found in the array since we have reached this line
    restaurant.menus.breakfast.push(menuItem);
  } else if (menuItem.type === "lunch") {
    for (var i = 0; i < restaurant.menus.lunch.length; i++) {
      if (restaurant.menus.lunch[i].name === menuItem.name) {
        return
      }
    }

    restaurant.menus.lunch.push(menuItem);
  } else if (menuItem.type === "dinner") {
    for (var i = 0; i < restaurant.menus.dinner.length; i++) {
      if (restaurant.menus.dinner[i].name === menuItem.name) {
        return
      }
    }

    restaurant.menus.dinner.push(menuItem);
  }
}

function removeMenuItem(restaurant, food, menuType) {
  // check menu type to determine which menu array we will be checking
  if (menuType === "breakfast") {
    // iterate through breakfast array to check whether food already exists
    for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
      // check to see if menu item name matches passed food name
      if (restaurant.menus.breakfast[i].name === food) {
        // if food name matches remove menu item object from breakfast array
        restaurant.menus.breakfast.splice(i, 1)
        // return a string that describes which food was removed from which menu
        return `No one is eating our ${food} - it has been removed from the ${menuType} menu!`
      }
    }
  } else if (menuType === "lunch") {
    for (var i = 0; i < restaurant.menus.lunch.length; i++) {
      if (restaurant.menus.lunch[i].name === food) {
        restaurant.menus.lunch.splice(i, 1)
        return `No one is eating our ${food} - it has been removed from the ${menuType} menu!`
      }
    }
  } else if (menuType === "dinner") {
    for (var i = 0; i < restaurant.menus.dinner.length; i++) {
      if (restaurant.menus.dinner[i].name === food) {
        restaurant.menus.dinner.splice(i, 1)
        return `No one is eating our ${food} - it has been removed from the ${menuType} menu!`
      }
    }
  }

  // if menuType and food do not exist in any of the menu arrays return failure message
  return `Sorry, we don't sell ${food}, try adding a new recipe!`
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
