// utils.js
function log(message) {
    console.log(`[PaymentService] ${message}`);
}

function generateRandomId(prefix) {
    return `${prefix}_${Math.random().toString(36).substring(2, 10)}`;
}

module.exports = { log, generateRandomId };
