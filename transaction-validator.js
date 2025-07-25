// transaction-validator.js
function validateCard(cardDetails) {
    // basic card validation
    if (!cardDetails.number || cardDetails.number.length !== 16) {
        return { valid: false, reason: "Invalid card number" };
    }
    return { valid: true };
}

function validateAmount(amount) {
    // check if amount is positive
    return amount > 0;
}

module.exports = { validateCard, validateAmount };
