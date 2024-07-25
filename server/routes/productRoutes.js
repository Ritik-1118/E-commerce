import express from 'express';
import { getProducts, getProductsByFilter, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

const router = express.Router();

router.route( '/' )
    .get( getProducts )
    .post( createProduct );
router.get('getByFilter',getProductsByFilter)

router.route( '/:id' )
    .get( getProductById )
    .put( updateProduct )
    .delete( deleteProduct );

export default router;
