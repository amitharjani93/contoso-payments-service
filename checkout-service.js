// checkout-service.js
function initiateCheckout(cart) {
    // start checkout process
    console.log("Checkout started for cart:", cart);
    return true;
}

function completeCheckout(orderId) {
    // complete checkout process
    console.log("Checkout completed for order:", orderId);
    return true;
}

module.exports = { initiateCheckout, completeCheckout };
