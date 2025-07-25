export class PaymentProcessor {
    processPayment(amount: number, method: string): boolean {
        console.log(`Processing ${method} payment of $${amount}`);
        // Mock logic for demo
        return true;
    }
}
