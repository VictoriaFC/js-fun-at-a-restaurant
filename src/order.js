function takeOrder(orderObject, deliveryOrdersArray) {
  if (deliveryOrdersArray.length < 3) {
    deliveryOrdersArray.push(orderObject)
  }
}

function refundOrder(orderNum, deliveryOrdersArray) {
  for (var i = 0; i < deliveryOrdersArray.length; i++) {
    if (orderNum === deliveryOrdersArray[i].orderNumber) {
      deliveryOrdersArray.splice(i, 1);
    }
  }
}

function listItems(deliveryOrdersArray) {
  var itemsString = '';

  for (var i = 0; i < deliveryOrdersArray.length; i++) {
    itemsString = itemsString + deliveryOrdersArray[i].item + ', ';
  }

  return itemsString.slice(0, -2);
}
// slice started at index 0 and sliced 2 elements from the end of the string.



function searchOrder(deliveryOrdersArray, itemString) {
  for (var i = 0; i < deliveryOrdersArray.length; i++) {
    if (deliveryOrdersArray[i].item === itemString) {
      return true;
    }
  }

  return false;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
