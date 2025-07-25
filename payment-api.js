// payment-api.js
function processPayment(cardDetails, amount) {
    // process payment logic
    console.log(`Processing payment of $${amount} for card ending in ${cardDetails.last4}`);
    return { status: "success", transactionId: Math.random().toString(36).substring(2, 10) };
}

function refundPayment(transactionId) {
    // refund logic
    console.log(`Refund initiated for transaction: ${transactionId}`);
    return { status: "refunded" };
}

module.exports = { processPayment, refundPayment };
