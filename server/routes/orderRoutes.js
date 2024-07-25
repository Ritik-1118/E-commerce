import express from 'express';
import { createOrder, getOrderById, getAllOrders } from '../controllers/orderController.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/:id', getOrderById);
router.get('/', getAllOrders);

export default router;
