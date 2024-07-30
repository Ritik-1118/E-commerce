import express from 'express';
import { createPayment, updateOrderToPaid } from '../controllers/paymentController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.post('/checkout', createPayment);
router.post('/update-order', updateOrderToPaid);

export default router;
