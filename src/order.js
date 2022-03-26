function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order)
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    var order = deliveryOrders[i];

    if (order.orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1);
    }
  }
}

function listItems(deliveryOrders) {
  var itemsString = '';

  for (var i = 0; i < deliveryOrders.length; i++) {
    var order = deliveryOrders[i];

    itemsString = itemsString + order.item + ', ';
  }

  return itemsString.slice(0, -2);
}

function searchOrder(deliveryOrders, item) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    var order = deliveryOrders[i];

    if (order.item === item) {
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
