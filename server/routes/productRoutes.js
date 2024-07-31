import express from 'express';
import { getProducts, getProductsByFilter, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
import upload from '../middleware/mutlerMiddleware.js';

const router = express.Router();

router.route( '/' )
    .get( getProducts )
    .post( upload.single('image'),createProduct );
router.get('/getByFilter',getProductsByFilter)

router.route( '/:id' )
    .get( getProductById )
    .put( upload.single('image'), updateProduct )
    .delete( deleteProduct );

export default router;
