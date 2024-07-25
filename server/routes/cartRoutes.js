import express from 'express';
import { getCartByUserId, addItemToCart, removeItemFromCart, updateItemQuantityInCart } from '../controllers/CartController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);  //applying middleware

router.get('/', getCartByUserId);
router.post('/add', addItemToCart);
router.post('/remove', removeItemFromCart);
router.post('/update', updateItemQuantityInCart);

export default router;
