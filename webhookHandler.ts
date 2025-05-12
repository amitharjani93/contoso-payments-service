import express from 'express';
const router = express.Router();

router.post('/webhook', (req, res) => {
    const event = req.body;

    switch (event.type) {
        case 'payment_intent.succeeded':
            console.log('Payment succeeded:', event.data.object.id);
            break;
        case 'payment_intent.failed':
            console.log('Payment failed:', event.data.object.id);
            break;
        default:
            console.log('Unhandled event type:', event.type);
    }

    res.sendStatus(200);
});

export default router;
