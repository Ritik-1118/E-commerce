import express from 'express';
import { createPaymentIntent, updateOrderToPaid } from '../controllers/paymentController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.post('/create-payment-intent', createPaymentIntent);
router.post('/update-order', updateOrderToPaid);

export default router;
